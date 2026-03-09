// Translations data
const translations = {
    "en": {
        "app_title": "CoinFlip - Magic Lamp Edition",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Answers from the Magic Lamp",
        "main_description": "Ask the lamp your question and reveal your destiny.",
        "ask_lamp": "Ask the Lamp",
        "choose_category": "What's on your mind?",
        "total_flips_label": "Total Asks",
        "heads_label": "Positive",
        "tails_label": "Negative",
        "reset_session": "Reset Session",
        "log_title": "Answer Log",
        "clear_log_btn": "Clear Log",
        "view_history_menu": "View History",
        "history_modal_title": "Answer History",
        "no_history_yet": "The lamp is silent.",
        "clear_all_history_btn": "Clear All History",
        "confirm_clear_history": "Clear all destiny records?",
        "language_selection_hint": "Language selection in the menu.",
        "at_label": "at",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "contact_us": "Contact Us",
        "footer_copyright": "© 2024 MagicLamp CoinFlip.",
    },
    "ko": {
        "app_title": "코인플립 - 요술 램프 버전",
        "app_name": "코인플립",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "요술 램프의 해답",
        "main_description": "램프에게 질문을 던지고 당신의 운명을 확인하세요.",
        "ask_lamp": "램프에게 묻기",
        "choose_category": "어떤 고민인가요?",
        "total_flips_label": "총 질문 횟수",
        "heads_label": "긍정",
        "tails_label": "부정",
        "reset_session": "세션 초기화",
        "log_title": "해답 기록",
        "clear_log_btn": "기록 지우기",
        "view_history_menu": "히스토리 보기",
        "history_modal_title": "해답 히스토리",
        "no_history_yet": "기록이 없습니다.",
        "clear_all_history_btn": "모든 기록 삭제",
        "confirm_clear_history": "모든 운명의 기록을 삭제하시겠습니까?",
        "language_selection_hint": "언어 선택은 메뉴에서 할 수 있습니다.",
        "at_label": "에",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "contact_us": "문의하기",
        "footer_copyright": "© 2024 요술램프 코인플립.",
    }
};

// Expanded Advice Database with 'Fun Facts/Explanations'
const adviceDB = {
    food: [
        { type: "positive", answer: "무조건 고!", text: "맛있게 먹으면 0칼로리입니다.", funFact: "💡 과학적 사실: 뇌는 새로운 결정을 내릴 때 엄청난 에너지를 씁니다. 램프가 에너지를 아껴드렸으니 남은 에너지는 소화하는 데 쓰세요!" },
        { type: "positive", answer: "최고의 선택", text: "당신의 직감을 믿으세요. 최고의 맛집일 거예요!", funFact: "💡 램프의 통찰: 가끔은 첫 번째 떠오른 생각이 정답입니다. 고민할수록 배만 더 고파질 뿐이죠." },
        { type: "positive", answer: "당장 드세요", text: "배고픔은 기다려주지 않습니다. 지금 바로!", funFact: "💡 인체의 신비: 혈당이 떨어지면 짜증이 늘어납니다. 평화를 위해 지금 당장 탄수화물을 투여하세요." },
        { type: "negative", answer: "오늘은 참으세요", text: "내일 더 맛있게 먹기 위해 양보하세요!", funFact: "💡 램프의 조언: 지금 참으면 내일 아침 거울 속 붓기 없는 내 얼굴을 보며 칭찬하게 될 것입니다." },
        { type: "negative", answer: "집밥 어때요?", text: "바깥 음식은 잠시 쉬고 건강을 생각하세요.", funFact: "💡 통계의 진실: 외식을 한 번 줄일 때마다 당신의 위장과 지갑은 동시에 평화를 얻습니다." },
        { type: "negative", answer: "냉장고 확인", text: "잠시만요, 냉장고에 남은 음식이 있을지도 몰라요.", funFact: "💡 환경 보호: 냉장고 파먹기는 지구를 구하는 가장 맛있고 쉬운 방법 중 하나입니다." }
    ],
    love: [
        { type: "positive", answer: "완벽한 타이밍", text: "마음이 가는 대로 하세요. 사랑은 용기 있는 자의 것입니다.", funFact: "💡 연애 심리학: 사람들은 한 일보다 '하지 않은 일'을 2배 더 길게 후회한다고 합니다. 일단 질러보세요!" },
        { type: "positive", answer: "직진하세요", text: "망설일 필요 없습니다. 고백하세요!", funFact: "💡 램프의 예언: 오늘 당신의 매력 지수가 평소보다 150% 높게 측정되었습니다. 자신감을 가지세요." },
        { type: "positive", answer: "그린라이트", text: "상대방도 당신의 진심을 기다리고 있을지도 몰라요.", funFact: "💡 호감의 법칙: 당신이 누군가를 많이 생각할수록, 무의식적으로 그 사람에게 호감을 주는 행동을 하게 됩니다." },
        { type: "negative", answer: "신중하세요", text: "조금 더 시간을 두고 지켜보는 것이 좋겠습니다.", funFact: "💡 램프의 경고: 핑크빛 렌즈가 너무 두꺼워진 상태입니다. 며칠 뒤에 안경을 벗고 맨눈으로 다시 상황을 보세요." },
        { type: "negative", answer: "나를 먼저 사랑할", text: "지금은 연애보다 나 자신에게 집중할 시기입니다.", funFact: "💡 자존감 수업: 스스로를 멋지다고 생각할 때 가장 매력적인 사람이 나타나는 법입니다. 오늘은 나에게 집중!" },
        { type: "negative", answer: "때를 기다리세요", text: "인연은 억지로 만들어지는 것이 아닙니다.", funFact: "💡 타이밍의 마법: 가장 좋은 인연은 내가 전혀 예상하지 못한 순간에 문을 두드리는 경우가 많습니다." }
    ],
    money: [
        { type: "positive", answer: "나를 위한 선물", text: "가치 있는 투자입니다. 결제하세요!", funFact: "💡 경제학(?)의 원리: 돈은 쓰라고 있는 것입니다. 스트레스 해소 비용을 미리 낸다고 생각하세요." },
        { type: "positive", answer: "기회입니다", text: "기회는 왔을 때 잡는 법! 현명한 선택입니다.", funFact: "💡 쇼핑의 지혜: 3일 내내 머릿속에 떠올랐다면, 그건 사야만 완치되는 불치병입니다." },
        { type: "positive", answer: "후회보다 지름", text: "나중에 품절되어 후회하는 것보다 지금 사는 게 낫습니다.", funFact: "💡 램프의 격언: '살까 말까 할 때는 사라'는 옛 성현(쇼핑몰 VIP)들의 지혜를 따르십시오." },
        { type: "negative", answer: "지갑 닫으세요", text: "충동구매일 확률이 99%입니다.", funFact: "💡 뇌과학: 결제 버튼을 누르기 직전, 도파민이 가장 많이 분비됩니다. 당신은 물건이 아니라 그 쾌감을 원하는 걸지도 몰라요." },
        { type: "negative", answer: "정말 필요한가요?", text: "장바구니에 넣고 3일만 더 고민해 보세요.", funFact: "💡 3일의 법칙: 장바구니에 담아두고 72시간을 버티면 70% 이상의 구매 욕구가 사라진다고 합니다." },
        { type: "negative", answer: "잔고 위험", text: "통장 요정이 당신에게 강한 경고를 보내고 있습니다.", funFact: "💡 잔고의 진실: 다음 달의 당신이 과거의 당신을 멱살 잡고 싶어 할 수도 있습니다. 멈추세요!" }
    ],
    study: [
        { type: "positive", answer: "지금 시작하세요", text: "늦었다고 생각할 때가 진짜 늦...기 전에 빨리 하세요!", funFact: "💡 5분의 기적: 딱 5분만 책상에 앉아보세요. 관성의 법칙 때문에 계속 공부하게 될 확률이 높습니다." },
        { type: "positive", answer: "성공 예감", text: "노력은 배신하지 않습니다. 목표에 가까워졌어요.", funFact: "💡 뇌 가소성: 무언가를 배울 때마다 당신의 뇌 신경망은 실제로 물리적인 형태를 바꾸며 성장하고 있습니다." },
        { type: "positive", answer: "조금만 더!", text: "하나만 더 보고 쉬는 건 어떨까요? 할 수 있습니다!", funFact: "💡 피크엔드 법칙: 마지막 경험이 전체의 기억을 지배합니다. 지금 잘 마무리하면 오늘 공부가 뿌듯하게 기억될 거예요." },
        { type: "negative", answer: "15분 휴식", text: "잠깐의 휴식이 더 큰 효율을 가져옵니다.", funFact: "💡 뽀모도로 테크닉: 25분 집중 후 5분 휴식하는 것이 뇌의 과부하를 막고 기억력을 높이는 최고의 방법입니다." },
        { type: "negative", answer: "산책 권장", text: "머리가 너무 무거워요. 바람 좀 쐬고 오세요.", funFact: "💡 램프의 처방: 가벼운 걷기는 뇌에 산소를 공급하여 창의력과 문제 해결 능력을 60% 이상 높여줍니다." },
        { type: "negative", answer: "양보다 질", text: "지금은 억지로 붙잡고 있어도 안 들어옵니다. 내일 하세요.", funFact: "💡 수면의 중요성: 잠을 자는 동안 뇌는 오늘 배운 정보를 단기 기억에서 장기 기억으로 이동시킵니다. 주무세요!" }
    ],
    life: [
        { type: "positive", answer: "새로운 도전", text: "새로운 변화를 시도해 보세요. 긍정적인 결과가 올 거예요.", funFact: "💡 심리적 유연성: 늘 가던 길을 벗어나는 아주 작은 시도만으로도 뇌는 젊어지고 스트레스 저항력이 커집니다." },
        { type: "positive", answer: "소확행", text: "작은 실천이 큰 행복을 가져다줍니다. 진행하세요.", funFact: "💡 행복의 비밀: 행복은 강도가 아니라 '빈도'입니다. 오늘 이 작은 결정이 당신의 하루를 행복하게 만들 거예요." },
        { type: "positive", answer: "자신감을 가지세요", text: "당신의 선택이 옳습니다. 밀고 나가세요.", funFact: "💡 플라시보 효과: 스스로 잘될 거라고 믿고 시작하면, 무의식적으로 결과가 좋아지는 방향으로 행동하게 됩니다." },
        { type: "negative", answer: "현상 유지", text: "때로는 익숙한 것에 머무르는 것도 지혜입니다.", funFact: "💡 램프의 철학: 모든 에너지를 변화에 쏟을 필요는 없습니다. 평온한 일상을 유지하는 것도 대단한 능력입니다." },
        { type: "negative", answer: "에너지 절약", text: "쉬어갈 때입니다. 무리한 일정은 취소하세요.", funFact: "💡 번아웃 경고: 아무것도 하지 않는 시간(Default Mode Network)은 뇌가 창의적인 아이디어를 정리하는 가장 중요한 시간입니다." },
        { type: "negative", answer: "내일의 나에게", text: "오늘 굳이 결정하지 않아도 됩니다. 미루세요.", funFact: "💡 전략적 미루기: 즉각적인 결정보다 하룻밤 자고 일어나서 내린 결정이 훨씬 더 이성적일 확률이 높습니다." }
    ],
    etc: [
        { type: "positive", answer: "우주의 기운", text: "온 우주가 당신을 돕고 있습니다. 진행하세요!", funFact: "💡 확률의 장난: 이 희박한 확률 속에서 램프가 '네'라고 답했습니다. 이것 자체가 행운의 징조 아닐까요?" },
        { type: "positive", answer: "일단 고", text: "고민할 시간에 한 발짝 더 나아가는 게 좋습니다.", funFact: "💡 램프의 직언: 10분 이상 고민해도 답이 안 나오는 문제는 사실 어느 쪽을 선택해도 비슷한 결과가 나오는 경우가 많습니다." },
        { type: "positive", answer: "확실한 네", text: "의심의 여지가 없습니다. 망설이지 마세요.", funFact: "💡 결정의 힘: 결정을 내리는 순간 불안의 70%가 사라집니다. 이제 실행만 남았습니다!" },
        { type: "negative", answer: "절대 안 됨", text: "지금은 때가 아닙니다. 멈추고 생각하세요.", funFact: "💡 제동 장치: 자동차에 브레이크가 있는 이유는 빨리 달리기 위해서입니다. 지금은 브레이크를 밟아야 할 때!" },
        { type: "negative", answer: "플랜 B 찾기", text: "다른 길을 찾아보는 건 어떨까요? 더 좋은 대안이 있습니다.", funFact: "💡 터널 시야 현상: 한 가지 생각에 몰두하면 다른 좋은 대안들이 보이지 않습니다. 한 발짝 물러서서 크게 보세요." },
        { type: "negative", answer: "직감을 믿으세요", text: "어딘가 찜찜하다면 안 하는 게 맞습니다.", funFact: "💡 직감의 과학: 직감은 비이성적인 것이 아니라, 뇌가 과거의 모든 경험 데이터를 순식간에 처리해서 보내는 경고등입니다." }
    ]
};

let currentLang = localStorage.getItem('lang') || 'ko';
let selectedCategory = 'food';

// State
let totalFlips = parseInt(localStorage.getItem('totalFlips')) || 0;
let headsCount = parseInt(localStorage.getItem('headsCount')) || 0; // Positive Count
let tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0; // Negative Count
let logEntries = JSON.parse(localStorage.getItem('logEntries')) || [];
let questionCache = JSON.parse(localStorage.getItem('questionCache')) || {};

// DOM Elements
const magicLamp = document.getElementById('magic-lamp');
const askButton = document.getElementById('ask-button');
const questionInput = document.getElementById('question-input');
const smokeCloud = document.getElementById('smoke-cloud');
const answerReveal = document.getElementById('answer-reveal');
const answerText = document.getElementById('answer-text');
const answerAdvice = document.getElementById('answer-advice');
const categoryButtons = document.querySelectorAll('.cat-btn');

const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');
const headsRatioBar = document.getElementById('heads-ratio-bar');
const headsRatioPercent = document.getElementById('heads-ratio-percent');
const tailsRatioBar = document.getElementById('tails-ratio-bar');
const tailsRatioPercent = document.getElementById('tails-ratio-percent');

const logContainer = document.getElementById('log-container');
const clearLogButton = document.getElementById('clear-log-button');
const resetButton = document.getElementById('reset-button');

const sidebarMenu = document.getElementById('sidebar-menu');
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Similarity Algorithms (Levenshtein Distance)
function getLevenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) { matrix[i] = [i]; }
    for (let j = 0; j <= a.length; j++) { matrix[0][j] = j; }
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }
    return matrix[b.length][a.length];
}

function isSimilar(q1, q2) {
    const n1 = q1.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');
    const n2 = q2.toLowerCase().replace(/[^a-z0-9가-힣]/gi, '');
    if (n1 === n2) return true; 
    
    const dist = getLevenshteinDistance(n1, n2);
    const maxLength = Math.max(n1.length, n2.length);
    if (maxLength === 0) return true;
    
    const similarity = (maxLength - dist) / maxLength;
    return similarity >= 0.75 || dist <= 2;
}

// Initialize
function init() {
    setLanguage(currentLang);
    updateDisplay();
    setupEventListeners();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    translatePage();
}

function translatePage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;

    const hRatio = totalFlips === 0 ? 0 : Math.round((headsCount / totalFlips) * 100);
    const tRatio = totalFlips === 0 ? 0 : Math.round((tailsCount / totalFlips) * 100);

    headsRatioBar.style.width = hRatio + '%';
    headsRatioPercent.textContent = hRatio + '%';
    tailsRatioBar.style.width = tRatio + '%';
    tailsRatioPercent.textContent = tRatio + '%';

    renderLog();
}

function renderLog() {
    logContainer.innerHTML = '';
    logEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'flex flex-col p-3 bg-background rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md';
        
        const colorClass = entry.type === 'positive' ? 'text-primary' : 'text-primaryLight';
        
        item.innerHTML = `
            <div class="flex justify-between items-center mb-1">
                <span class="text-xs text-gray-400">${entry.timestamp}</span>
                <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">${entry.category}</span>
            </div>
            <div class="text-sm font-medium text-onBackground mb-1">"${entry.question}"</div>
            <div class="text-lg font-bold ${colorClass}">${entry.answer}</div>
            <div class="text-sm text-gray-700 mt-1">${entry.advice}</div>
            ${entry.funFact ? `<div class="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded-lg border border-gray-200">${entry.funFact}</div>` : ''}
        `;
        logContainer.prepend(item); 
    });
}

function askLamp() {
    const question = questionInput.value.trim();
    if (!question) {
        questionInput.classList.add('ring-2', 'ring-error');
        setTimeout(() => questionInput.classList.remove('ring-2', 'ring-error'), 500);
        return;
    }

    askButton.disabled = true;
    answerReveal.classList.remove('answer-visible');
    answerReveal.classList.add('opacity-0', 'scale-0');
    smokeCloud.classList.remove('smoke-active');
    void smokeCloud.offsetWidth; 

    magicLamp.classList.add('lamp-shaking');
    
    setTimeout(() => {
        magicLamp.classList.remove('lamp-shaking');
        smokeCloud.classList.add('smoke-active');
        
        let fateData;
        let isNewQuestion = true;
        let matchedKey = null;

        // Check Cache
        for (const key in questionCache) {
            const separatorIdx = key.indexOf("_");
            if (separatorIdx > -1) {
                const cachedCategory = key.substring(0, separatorIdx);
                const cachedQuestion = key.substring(separatorIdx + 1);
                
                if (cachedCategory === selectedCategory && isSimilar(question, cachedQuestion)) {
                    matchedKey = key;
                    isNewQuestion = false;
                    break;
                }
            }
        }

        if (!isNewQuestion) {
            fateData = questionCache[matchedKey];
        } else {
            // Generate completely new specific fate
            const pool = adviceDB[selectedCategory];
            
            // Use Crypto API to pick a random index from the pool
            const randomValues = new Uint8Array(1);
            window.crypto.getRandomValues(randomValues);
            const randomIndex = randomValues[0] % pool.length;
            
            fateData = pool[randomIndex];
            
            const newKey = selectedCategory + "_" + question;
            questionCache[newKey] = fateData;
            localStorage.setItem('questionCache', JSON.stringify(questionCache));
            
            totalFlips++;
            if (fateData.type === 'positive') headsCount++; else tailsCount++;
            
            const now = new Date();
            const timeStr = now.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit' });
            logEntries.push({
                timestamp: timeStr,
                category: selectedCategory,
                question: question,
                type: fateData.type,
                answer: fateData.answer,
                advice: fateData.text,
                funFact: fateData.funFact
            });
            if (logEntries.length > 50) logEntries.shift();
        }
        
        // UI Display Update
        answerText.textContent = fateData.answer;
        
        if(fateData.answer.length > 5) {
            answerText.classList.replace('text-5xl', 'text-3xl');
        } else {
            answerText.classList.replace('text-3xl', 'text-5xl');
        }

        answerText.className = `font-bold drop-shadow-glow tracking-tighter transition-all ${fateData.answer.length > 5 ? 'text-3xl' : 'text-5xl'} ${fateData.type === 'positive' ? 'text-primary' : 'text-primaryLight'}`;
        
        // 조언과 Fun Fact를 함께 보여주도록 수정
        answerAdvice.innerHTML = `
            <div class="font-medium">${fateData.text}</div>
            ${fateData.funFact ? `<div class="mt-2 pt-2 border-t border-primary/20 text-xs text-gray-500 text-left bg-white/50 rounded p-1">${fateData.funFact}</div>` : ''}
        `;
        
        setTimeout(() => {
            answerReveal.classList.remove('opacity-0', 'scale-0');
            answerReveal.classList.add('answer-visible');
            
            saveState();
            updateDisplay();
            showParticles();
            askButton.disabled = false;
        }, 500);

    }, 800);
}

function saveState() {
    localStorage.setItem('totalFlips', totalFlips);
    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);
    localStorage.setItem('logEntries', JSON.stringify(logEntries));
}

function showParticles() {
    confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#6200EE', '#BB86FC', '#03DAC6', '#FFD700']
    });
}

function setupEventListeners() {
    askButton.addEventListener('click', askLamp);
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
        });
    });

    resetButton.addEventListener('click', () => {
        totalFlips = 0; headsCount = 0; tailsCount = 0;
        updateDisplay();
        saveState();
    });

    clearLogButton.addEventListener('click', () => {
        logEntries = [];
        questionCache = {}; 
        localStorage.removeItem('questionCache');
        updateDisplay();
        saveState();
    });

    menuToggle.addEventListener('click', () => {
        sidebarMenu.classList.remove('translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });

    sidebarOverlay.addEventListener('click', () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', init);