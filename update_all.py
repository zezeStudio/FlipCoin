import os
import re

files_to_update = [
    "insights/cognitive-biases-in-choices.html",
    "insights/crypto-randomness.html",
    "insights/daily-fortune-philosophy.html",
    "insights/fairness-science.html",
    "insights/gamification-of-daily-life.html",
    "insights/group-decision-strategies.html",
    "insights/heuristics-and-biases.html",
    "insights/history-of-divination.html",
    "insights/history-of-games-of-chance.html",
    "insights/luck-vs-probability.html",
    "insights/mbti-decisions.html",
    "insights/mindfulness-and-decisions.html",
    "insights/paradox-of-choice.html",
    "insights/regret-management.html",
    "insights/ai-decision-making.html",
    "insights/decision-fatigue.html",
    "insights/lunch-menu-tips.html",
    "insights/psychology-of-luck.html"
]

def update_file(filepath):
    print(f"Processing {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Extract translations and add footer_about
    trans_match = re.search(r'const translations = (\{[\s\S]*?\});', content)
    if not trans_match:
        print(f"  FAILED: Could not find translations")
        return

    trans_str = trans_match.group(1)
    
    # Add footer_about to translations if missing
    if '"footer_about"' not in trans_str:
        # Match ko section
        ko_match = re.search(r'("ko"|ko):\s*\{([\s\S]*?)\}', trans_str)
        if ko_match:
            ko_body = ko_match.group(2)
            new_ko_body = ko_body.rstrip().rstrip(',') + ',\n                "footer_about": "소개"'
            trans_str = trans_str.replace(ko_body, new_ko_body)

        # Match en section
        en_match = re.search(r'("en"|en):\s*\{([\s\S]*?)\}', trans_str)
        if en_match:
            en_body = en_match.group(2)
            new_en_body = en_body.rstrip().rstrip(',') + ',\n                "footer_about": "About"'
            trans_str = trans_str.replace(en_body, new_en_body)
        
        content = content.replace(trans_match.group(1), trans_str)

    # 2. Extract Korean summary and body for static injection
    ko_summary = ""
    ko_body = ""
    
    # Extract again after modification
    trans_match = re.search(r'const translations = (\{[\s\S]*?\});', content)
    trans_str = trans_match.group(1)
    
    ko_section_match = re.search(r'("ko"|ko):\s*\{([\s\S]*?)\}', trans_str)
    if ko_section_match:
        ko_section = ko_section_match.group(2)
        # Find summary (handles "", '', or ``)
        s_match = re.search(r'"summary":\s*("([\s\S]*?)"|\'([\s\S]*?)\'|`([\s\S]*?)`)', ko_section)
        if s_match:
            ko_summary = s_match.group(2) or s_match.group(3) or s_match.group(4)
        # Find body
        b_match = re.search(r'"body":\s*("([\s\S]*?)"|\'([\s\S]*?)\'|`([\s\S]*?)`)', ko_section)
        if b_match:
            ko_body = b_match.group(2) or b_match.group(3) or b_match.group(4)

    # Clean up summary
    if "<strong>핵심 요약:</strong>" in ko_summary:
        ko_summary = ko_summary.replace("<strong>핵심 요약:</strong>", "").strip()
    if "<ul" in ko_summary:
        li_items = re.findall(r'<li[^>]*>([\s\S]*?)</li>', ko_summary)
        if li_items:
            ko_summary = "\n                    " + "\n                    ".join([f"<li>{item}</li>" for item in li_items])
    elif not ko_summary.strip().startswith("<li"):
        if ko_summary.strip():
            ko_summary = f"<li>{ko_summary.strip()}</li>"

    # 3. Update HTML structure
    summary_block_template = f'''<!-- 핵심 요약 섹션 -->
            <div class="bg-gray-50 border-l-4 border-primary p-6 mb-10 rounded-r-xl">
                <h2 class="text-base font-bold text-primary mb-3 flex items-center gap-2">
                    <span class="material-icons text-lg">auto_awesome</span>
                    <span data-key="summary_title">핵심 요약</span>
                </h2>
                <ul class="text-sm md:text-base text-gray-600 list-disc pl-5 space-y-2" id="article-summary" data-key="summary">{ko_summary}
                </ul>
            </div>'''
            
    if "<!-- 핵심 요약 섹션 -->" in content:
        content = re.sub(r'<!-- 핵심 요약 섹션 -->[\s\S]*?</ul>\s*</div>', summary_block_template, content)
    elif 'id="article-summary"' in content:
        # Standardize existing summary block
        content = re.sub(r'<div[^>]*id="article-summary"[^>]*>[\s\S]*?</div>', summary_block_template, content)
        content = re.sub(r'<ul[^>]*id="article-summary"[^>]*>[\s\S]*?</ul>', summary_block_template, content)
        # Handle cases where it's wrapped in a div without the comment
        if 'id="article-summary"' in content:
             # Try to find the container div if it has specific classes
             content = re.sub(r'<div class="bg-gray-50[^>]*>[\s\S]*?</ul>\s*</div>', summary_block_template, content)
             content = re.sub(r'<div class="bg-primary/5[^>]*>[\s\S]*?</div>', summary_block_template, content)

    # Body replacement
    body_pattern = r'(<div[^>]*id="article-body"[^>]*>)[\s\S]*?(</div>)'
    content = re.sub(body_pattern, lambda m: f'{m.group(1)}\n                {ko_body.strip()}\n            {m.group(2)}', content)
    content = re.sub(r'id="article-body" class="[^"]*"', 'id="article-body" class="space-y-8 text-gray-700 leading-loose text-lg"', content)
    content = re.sub(r'id="article-body"(?! class)', 'id="article-body" class="space-y-8 text-gray-700 leading-loose text-lg"', content)

    # Footer replacement
    new_footer = '''<footer class="bg-surface py-12 mt-auto border-t border-gray-200 text-center text-gray-500 text-xs">
        <div class="flex justify-center gap-6 mb-4">
            <a href="../about.html" class="hover:text-primary transition-colors" data-key="footer_about">소개</a>
        </div>
        <p>© 2026 ZezeStudio Decision Hub. All rights reserved.</p>
    </footer>'''
    content = re.sub(r'<footer[\s\S]*?</footer>', new_footer, content)

    # 4. Update applyLanguage
    new_apply_lang = '''function applyLanguage() {
            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.dataset.key;
                if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
            });
            document.getElementById('article-body').innerHTML = translations[currentLang].body;
            document.getElementById('article-summary').innerHTML = translations[currentLang].summary;
            document.documentElement.lang = currentLang;
            document.querySelectorAll('.lang-btn').forEach(btn => {
                const btnLang = btn.id.split('-')[1];
                if (btnLang === currentLang) {
                    btn.classList.add('bg-primary', 'text-white', 'border-primary');
                    btn.classList.remove('bg-transparent', 'text-gray-600', 'border-gray-200');
                } else {
                    btn.classList.remove('bg-primary', 'text-white', 'border-primary');
                    btn.classList.add('bg-transparent', 'text-gray-600', 'border-gray-200');
                }
            });
        }'''
    content = re.sub(r'function applyLanguage\(\) \{[\s\S]*?\}', new_apply_lang, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in files_to_update:
    if os.path.exists(f):
        update_file(f)
    else:
        print(f"File {f} not found")
