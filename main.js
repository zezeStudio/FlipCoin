// Translations data
const translations = {
    "en": {
        "app_title": "CoinFlip - Material Design",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "Menu",
        "home_menu": "Home",
        "settings_menu": "Settings",
        "help_menu": "Help",
        "language_select_label": "Language",
        "korean_lang": "한국어",
        "english_lang": "English",
        "japanese_lang": "日本語",
        "german_lang": "Deutsch",
        "spanish_lang": "Español",
        "chinese_lang": "中文",
        "main_title": "Make Decisions with Confidence",
        "main_description": "A fair and simple coin flip for all your quick decisions.",
        "about_title": "About CoinFlip",
        "about_p1": "Life is full of choices, from the small and simple to the life-altering. CoinFlip is a beautifully designed digital tool created to help you make those choices with confidence and a touch of fun. It’s more than just an app; it's your personal decision-making companion, ready to provide a clear, unbiased answer whenever you need it.",
        "about_p2": "We've reimagined the classic coin toss for the modern age. Instead of 'Heads' or 'Tails', we provide a definitive 'Yes' or 'No'. This simple but powerful change removes ambiguity and helps frame your questions for a clearer outcome. Should you take that new job? Is it your turn to wash the dishes? Ask your question, flip the coin, and receive a straightforward answer, empowering you to move forward.",
        "about_p3": "At the heart of CoinFlip lies a commitment to absolute fairness. We don't use simple, predictable computer-generated numbers. Instead, every flip is powered by the <strong>Web Crypto API</strong>, a highly secure web standard used for cryptographic operations. This ensures that each 'Yes' or 'No' result is truly random and statistically unpredictable, providing a foundation of trust for your most important decisions.",
        "about_p4": "CoinFlip is packed with features to enhance your experience:",
        "about_li1": "<strong>Session Statistics:</strong> Go beyond a single flip. Our real-time statistics track your session's total flips, 'Yes' and 'No' counts, and ratio breakdowns, offering a fun look at your decision-making patterns.",
        "about_li2": "<strong>Detailed Flip Log:</strong> Every decision is recorded in a time-stamped log. This is perfect for holding friends accountable for a bet or for reviewing the choices you've made throughout the day.",
        "about_li4": "<strong>Intuitive Interface:</strong> We believe a powerful tool should also be a pleasure to use. Our clean, minimalist design, combined with smooth animations, ensures an experience that is both simple and elegant.",
        "about_li5": "<strong>Multilingual Support:</strong> CoinFlip is designed for a global audience and is available in multiple languages to feel like a native tool, no matter where you are.",
        "about_p5": "Whether you're settling a friendly debate, gamifying your chores, or simply seeking a moment of random guidance, CoinFlip is built to be reliable, transparent, and always at your fingertips. It's decision-making, simplified.",
        "flip_now": "Flip Coin",
        "stats_title": "Session Statistics",
        "total_flips_label": "Total Flips",
        "heads_label": "Yes",
        "tails_label": "No",
        "heads_ratio_label": "Yes",
        "tails_ratio_label": "No",
        "reset_session": "Reset Session",
        "log_title": "Flip Log",
        "clear_log_btn": "Clear Log",
        "no_flips_yet": "No flips yet.",
        "service_purpose_title": "Service Purpose & Scope of Responsibility",
        "service_purpose_p1": "CoinFlip is designed as a simple, engaging tool to assist with minor decisions or to add an element of chance to everyday scenarios. It utilizes advanced cryptographic randomness for fairness, but is intended for entertainment and lighthearted decision-making, not for critical or high-stakes choices.",
        "service_purpose_p2": "Users are solely responsible for decisions made based on CoinFlip's outcomes. We encourage mindful use and advise against using this tool for situations that require serious consideration, professional advice, or have significant financial/personal implications.",
        "how_to_use_title": "How to Play",
        "how_to_use_step1": "<strong>Your Question, Our Answer:</strong> Clearly formulate your 'Yes' or 'No' question in your mind or out loud. This sets the intention for your flip.",
        "how_to_use_step2": "<strong>The Flip:</strong> Tap the 'Flip Coin' button. Watch as the digital coin spins, mimicking a real-world toss, adding a dynamic visual element to your decision-making.",
        "how_to_use_step3": "<strong>The Revelation:</strong> The coin will land on either 'Yes' or 'No', providing an immediate, unbiased answer to your query. Pay attention to the satisfying visual and auditory cues!",
        "use_cases_title": "Practical Applications",
        "use_case_menu_decision": "<strong>Restaurant Roulette:</strong> Can't decide where to eat? Let CoinFlip choose your next culinary adventure (e.g., 'Should we get pizza?' 'Yes' or 'No').",
        "use_case_team_consensus": "<strong>Fair Team Selection:</strong> Use CoinFlip to fairly assign roles, pick teams for a game, or decide who goes first in any activity. Ensures impartiality every time.",
        "use_case_order_setting": "<strong>Turn Taker:</strong> Determine whose turn it is for chores, games, or presentations. A quick flip resolves disputes and keeps things moving smoothly.",
        "use_case_fair_random_choice": "<strong>Unbiased Tie-Breaker:</strong> For any situation requiring a truly unbiased, random choice, CoinFlip steps in as your digital arbiter. From minor dilemmas to significant choices, get a clear answer.",
        "data_log_title": "Data & Log Handling",
        "data_log_p1": "CoinFlip respects your privacy. All session data, including your flip history and statistics, is stored exclusively on your device within your browser's local storage. This means your data never leaves your device and is not collected, stored, or shared by us or any third parties.",
        "data_log_p2": "You have full control over your data. You can clear your entire flip log and session statistics at any time using the 'Clear Log' or 'Reset Session' options within the application. Closing your browser or clearing your browser's cache may also remove this data.",
        "tech_benefits_title": "Technology & User Advantages",
        "tech_benefits_p1": "CoinFlip leverages the powerful <strong>Web Crypto API</strong>, a state-of-the-art web standard for cryptographic operations. This ensures that every coin flip result is generated using a truly random, unpredictable, and secure process. Unlike simpler random number generators, our method guarantees an unbiased outcome, providing you with genuine fairness in every decision.",
        "tech_benefits_p2": "The benefit to you is absolute confidence in the impartiality of each flip. Whether it's a casual choice or a decisive moment, you can trust that CoinFlip's outcome is purely by chance, free from any discernible patterns or predictability, just like a real-world coin toss with enhanced digital integrity.",
        "guide_title": "In-Depth Explanation",
        "guide_p2": "<strong>Cryptographically Secure Randomness:</strong> At its core, CoinFlip is built on the robust <strong>Web Crypto API</strong>, a modern web standard. This API generates cryptographically secure random numbers, far beyond simple pseudo-random algorithms. This means every single flip is genuinely unpredictable and immune to manipulation, guaranteeing absolute fairness and integrity for even your most crucial decisions. Trust in the true randomness of every 'Yes' or 'No'.",
        "faq_title": "Frequently Asked Questions (FAQ)",
        "faq_q1": "Is this coin flip truly random?",
        "faq_a1": "Yes, absolutely! CoinFlip uses the <strong>Web Crypto API</strong>, a robust browser feature designed for secure cryptographic randomness. This ensures that every flip is genuinely unpredictable and unbiased, mirroring the true randomness of a physical coin toss.",
        "faq_q2": "Does this app work offline?",
        "faq_a2": "Currently, CoinFlip requires an internet connection to load initially due to external script dependencies (like Tailwind CSS and Material Icons). While we aim for future offline capability, real-time functionality requires online access.",
        "faq_q3": "Is my data stored or shared?",
        "faq_a3": "No. Your flip history and session statistics are stored locally on your device's browser storage (localStorage). This data is never transmitted to our servers or shared with any third parties. You have full control to clear it at any time.",
        "faq_q4": "Can I use this tool for serious decisions?",
        "faq_a4": "CoinFlip is designed for entertainment and assisting with minor, everyday choices. While it provides genuinely random outcomes, we do not recommend using it for critical life decisions, financial matters, or situations requiring professional advice. Always exercise good judgment.",
        "faq_q5": "Why do results sometimes feel streaky (e.g., many 'Yes' in a row)?",
        "faq_a5": "This is a common psychological phenomenon! Even truly random sequences can have 'streaks' of identical outcomes. Each coin flip is an independent event with a 50/50 chance, so a series of 'Yes' results is statistically just as likely as an alternating pattern. It's simply the nature of randomness!",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "contact_us": "Contact Us",
        "footer_disclaimer": "This tool is for entertainment and decision-making assistance only. We are not responsible for any outcomes or decisions made using this app.",
        "footer_copyright": "&copy; 2024 CoinFlip. All rights reserved.",
        "heads_coin_face": "Yes",
        "tails_coin_face": "No",
        "view_history_menu": "View History",
        "history_modal_title": "Flip History",
        "no_history_yet": "No history available.",
        "clear_all_history_btn": "Clear All History",
        "confirm_clear_history": "Are you sure you want to clear all history?",
        "language_selection_hint": "Language selection can be done from the menu.",
        "at_label": "at", // Added for consistency
        "privacy_policy_title_modal": "Privacy Policy",
        "privacy_policy_content_modal": "This is a placeholder for the Privacy Policy content. Please replace this with your actual privacy policy. The CoinFlip app is committed to protecting your privacy. This app does not collect, store, or share any personally identifiable information. All flip records and session statistics are stored solely on your device's browser local storage. Your data never leaves your device and is not collected, stored, or shared by us or any third parties. You have full control over your data and can delete it at any time using the 'Clear Log' or 'Reset Session' options within the app. Closing your browser or clearing your browser's cache may also remove this data. This Privacy Policy may be updated to reflect app changes or legal requirements. Significant changes will be announced within the app.",
        "terms_of_service_title_modal": "Terms of Service",
        "terms_of_service_content_modal": "This is a placeholder for the Terms of Service content. Please replace this with your actual terms of service. Thank you for using the CoinFlip app. This app is provided for entertainment and simple decision-making assistance. While the app uses the 'Web Crypto API' to provide cryptographically secure random results, we are not responsible for any decisions or outcomes based on the app's results. Do not use this app for important decisions or serious matters. All content and features of this app are protected by copyright laws and related regulations. Unauthorized reproduction, distribution, or commercial use of this app is prohibited. These terms may be changed without prior notice, and the revised terms will take effect through announcements within the app. Users are responsible for regularly reviewing the terms.",
        "contact_us_title_modal": "Contact Us",
        "contact_us_content_modal": "This is a placeholder for the Contact Us content. Please replace this with your actual contact information. If you have any questions, suggestions, or issues regarding the CoinFlip app, please feel free to contact us. Currently, we do not operate a separate contact channel. We appreciate your feedback via app store reviews or by sending an email directly to the developer. Developer Email: developer@example.com (This is an example email. Please change to an actual email.) Your valuable feedback helps us improve the app."
    },
    "ko": {
        "app_title": "코인플립 - Material 디자인",
        "app_name": "코인플립",
        "menu_sidebar_title": "메뉴",
        "home_menu": "홈",
        "settings_menu": "설정",
        "help_menu": "도움말",
        "language_select_label": "언어",
        "korean_lang": "한국어",
        "english_lang": "English",
        "japanese_lang": "日本語",
        "german_lang": "Deutsch",
        "spanish_lang": "Español",
        "chinese_lang": "中文",
        "main_title": "자신 있게 결정하세요",
        "main_description": "모든 빠른 결정을 위한 공정하고 간단한 동전 던지기입니다.",
        "about_title": "코인플립 소개",
        "about_p1": "인생은 작고 단순한 선택부터 삶을 바꾸는 선택까지, 수많은 선택의 연속입니다. CoinFlip은 여러분이 자신감과 약간의 즐거움을 가지고 그러한 선택을 할 수 있도록 돕기 위해 아름답게 디자인된 디지털 도구입니다. 이것은 단순한 앱 그 이상으로, 필요할 때마다 명확하고 편견 없는 답변을 제공할 준비가 된 여러분의 개인적인 의사 결정 동반자입니다.",
        "about_p2": "저희는 현대에 맞게 고전적인 동전 던지기를 재해석했습니다. '앞면'이나 '뒷면' 대신, 저희는 명확한 '예' 또는 '아니오'를 제공합니다. 이 간단하지만 강력한 변화는 모호함을 제거하고 더 명확한 결과를 위해 질문의 틀을 잡는 데 도움을 줍니다. 새로운 직장을 가져야 할까요? 설거지할 차례인가요? 질문을 하고, 동전을 던지고, 간단명료한 답변을 받아 앞으로 나아갈 힘을 얻으세요.",
        "about_p3": "CoinFlip의 핵심에는 절대적인 공정성에 대한 약속이 있습니다. 저희는 간단하고 예측 가능한 컴퓨터 생성 난수를 사용하지 않습니다. 대신, 모든 동전 던지기는 암호화 작업에 사용되는 고도로 안전한 웹 표준인 <strong>Web Crypto API</strong>에 의해 구동됩니다. 이는 각각의 '예' 또는 '아니오' 결과가 진정으로 무작위적이고 통계적으로 예측 불가능함을 보장하여, 가장 중요한 결정에 대한 신뢰의 기반을 제공합니다.",
        "about_p4": "CoinFlip은 여러분의 경험을 향상시키기 위한 기능들로 가득 차 있습니다:",
        "about_li1": "<strong>세션 통계:</strong> 단 한 번의 동전 던지기를 넘어서세요. 저희의 실시간 통계는 세션의 총 던진 횟수, '예'/'아니오' 횟수, 그리고 비율 분석을 추적하여, 여러분의 의사 결정 패턴을 재미있게 살펴볼 수 있게 해줍니다.",
        "about_li2": "<strong>상세 기록:</strong> 모든 결정은 타임스탬프가 찍힌 로그에 기록됩니다. 친구와의 내기에 대한 책임을 묻거나, 하루 동안 내린 선택을 검토하기에 완벽합니다.",
        "about_li4": "<strong>직관적인 인터페이스:</strong> 저희는 강력한 도구가 사용하는 즐거움도 있어야 한다고 믿습니다. 부드러운 애니메이션과 결합된 저희의 깔끔하고 미니멀한 디자인은 간단하면서도 우아한 경험을 보장합니다.",
        "about_li5": "<strong>다국어 지원:</strong> CoinFlip은 전 세계 사용자를 위해 설계되었으며, 어디에 있든 모국어 도구처럼 느껴지도록 여러 언어로 제공됩니다.",
        "about_p5": "친구와의 논쟁을 해결하거나, 집안일에 게임 요소를 더하거나, 또는 단순히 무작위 지침의 순간을 찾고 있을 때, CoinFlip은 신뢰할 수 있고 투명하며 항상 여러분의 손끝에 있도록 만들어졌습니다. 이것은 단순화된 의사 결정입니다。",
        "flip_now": "동전 던지기",
        "stats_title": "세션 통계",
        "total_flips_label": "총 던진 횟수",
        "heads_label": "네",
        "tails_label": "아니오",
        "heads_ratio_label": "예",
        "tails_ratio_label": "아니오",
        "reset_session": "세션 초기화",
        "log_title": "기록",
        "clear_log_btn": "기록 지우기",
        "no_flips_yet": "아직 던진 기록이 없습니다.",
        "service_purpose_title": "서비스 목적 및 책임 범위",
        "service_purpose_p1": "CoinFlip은 사소한 결정을 돕거나 일상적인 상황에 재미 요소를 더하기 위한 간단하고 매력적인 도구로 설계되었습니다. 공정성을 위해 고급 암호화 무작위성을 활용하지만, 중요한 또는 위험 부담이 큰 선택이 아닌 엔터테인먼트 및 가벼운 의사 결정용입니다.",
        "service_purpose_p2": "사용자는 CoinFlip의 결과에 따라 내린 결정에 대해 전적으로 책임이 있습니다. 신중한 사용을 권장하며, 심각한 고려, 전문적인 조언 또는 상당한 재정적/개인적 영향을 요하는 상황에는 이 도구를 사용하지 않도록 조언합니다.",
        "how_to_use_title": "사용 방법",
        "how_to_use_step1": "<strong>질문 명확화:</strong> 마음속으로 또는 소리 내어 '예' 또는 '아니오'로 답할 질문을 명확히 하세요. 이는 동전 던지기의 의도를 설정합니다.",
        "how_to_use_step2": "<strong>동전 던지기:</strong> '동전 던지기' 버튼을 누르세요. 실제 동전을 던지는 것처럼 회전하는 디지털 동전을 보며, 의사 결정 과정에 동적인 시각적 요소를 추가하세요.",
        "how_to_use_step3": "<strong>결과 확인:</strong> 동전은 '예' 또는 '아니오' 중 하나로 멈추며, 질문에 대한 즉각적이고 편향 없는 답변을 제공합니다. 만족스러운 시각 및 청각적 단서에 집중하세요!",
        "use_cases_title": "실용적인 활용 사례",
        "use_case_menu_decision": "<strong>레스토랑 룰렛:</strong> 어디에서 식사할지 결정하기 어렵나요? CoinFlip이 여러분의 다음 미식 모험을 선택하도록 하세요(예: '피자를 먹을까?' '예' 또는 '아니오').",
        "use_case_team_consensus": "<strong>공정한 팀 선택:</strong> CoinFlip을 사용하여 역할을 공정하게 할당하거나, 게임 팀을 선택하거나, 어떤 활동에서 누가 먼저 할지 결정하세요. 항상 공정함을 보장합니다.",
        "use_case_order_setting": "<strong>순서 정하기:</strong> 집안일, 게임 또는 발표의 순서를 결정하세요. 빠른 동전 던지기로 논쟁을 해결하고 일을 원활하게 진행할 수 있습니다.",
        "use_case_fair_random_choice": "<strong>편향 없는 승부 결정:</strong> 진정으로 편향되지 않은 무작위 선택이 필요한 모든 상황에서 CoinFlip은 여러분의 디지털 중재자 역할을 합니다. 사소한 딜레마부터 중요한 선택까지, 명확한 답변을 얻으세요。",
        "data_log_title": "데이터 및 로그 처리",
        "data_log_p1": "CoinFlip은 사용자님의 개인 정보를 존중합니다. 플립 기록 및 통계를 포함한 모든 세션 데이터는 전적으로 브라우저의 로컬 저장소 내에 사용자님의 장치에만 저장됩니다. 이는 사용자님의 데이터가 사용자님의 장치를 떠나지 않으며, 저희 또는 제3자에 의해 수집, 저장 또는 공유되지 않음을 의미합니다.",
        "data_log_p2": "사용자님은 데이터에 대한 완전한 통제권을 가집니다. 애플리케이션 내의 '기록 지우기' 또는 '세션 초기화' 옵션을 사용하여 언제든지 전체 플립 기록 및 세션 통계를 지울 수 있습니다. 브라우저를 닫거나 브라우저의 캐시를 지우는 것도 이 데이터를 제거할 수 있습니다。",
        "tech_benefits_title": "기술 및 사용자 이점",
        "tech_benefits_p1": "CoinFlip은 암호화 작업에 사용되는 최첨단 웹 표준인 강력한 <strong>Web Crypto API</strong>를 활용합니다. 이는 모든 동전 던지기 결과가 진정으로 무작위적이고 예측 불가능하며 안전한 프로세스를 사용하여 생성되도록 보장합니다. 더 간단한 난수 생성기와 달리, 저희 방법은 편향되지 않은 결과를 보장하여, 모든 결정에서 진정한 공정성을 제공합니다.",
        "tech_benefits_p2": "사용자님에게 제공되는 이점은 각 동전 던지기의 공정성에 대한 절대적인 신뢰입니다. 가벼운 선택이든 결정적인 순간이든, 사용자님은 CoinFlip의 결과가 순전히 우연에 의한 것이며, 감지 가능한 패턴이나 예측 가능성으로부터 자유롭다는 것을 신뢰할 수 있습니다. 향상된 디지털 무결성을 가진 실제 동전 던지기와 같습니다.",
        "guide_title": "상세 가이드",
        "guide_p2": "<strong>암호학적으로 안전한 무작위성:</strong> CoinFlip은 핵심적으로 현대 웹 표준인 강력한 <strong>Web Crypto API</strong>를 기반으로 구축되었습니다. 이 API는 단순한 유사 난수 알고리즘을 훨씬 뛰어넘는 암호학적으로 안전한 난수를 생성합니다. 이는 모든 동전 던지기가 진정으로 예측 불가능하고 조작에 면역성이 있음을 의미하며, 가장 중요한 결정에 대해서도 절대적인 공정성과 무결성을 보장합니다. 모든 '예' 또는 '아니오'의 진정한 무작위성을 신뢰하세요。",
        "faq_title": "자주 묻는 질문 (FAQ)",
        "faq_q1": "이 동전 던지기는 정말 무작위인가요?",
        "faq_a1": "네, 물론입니다! CoinFlip은 안전한 암호화 무작위성을 위해 설계된 강력한 브라우저 기능인 <strong>Web Crypto API</strong>를 사용합니다. 이는 모든 동전 던지기가 물리적인 동전 던지기의 진정한 무작위성을 반영하여 진정으로 예측 불가능하고 편향되지 않음을 보장합니다.",
        "faq_q2": "이 앱은 오프라인에서도 작동하나요?",
        "faq_a2": "현재 CoinFlip은 외부 스크립트 종속성(예: Tailwind CSS 및 Material Icons)으로 인해 초기 로드 시 인터넷 연결이 필요합니다. 향후 오프라인 기능을 목표로 하지만, 실시간 기능에는 온라인 접속이 필요합니다.",
        "faq_q3": "제 데이터가 저장되거나 공유되나요?",
        "faq_a3": "아니요. 사용자님의 플립 기록 및 세션 통계는 사용자님의 장치 브라우저 저장소(localStorage)에 로컬로 저장됩니다. 이 데이터는 저희 서버로 전송되거나 제3자와 공유되지 않습니다. 언제든지 이를 지울 수 있는 완전한 통제권을 가집니다.",
        "faq_q4": "이 도구를 심각한 결정에 사용할 수 있나요?",
        "faq_a4": "CoinFlip은 엔터테인먼트 및 사소한 일상적인 결정을 돕기 위해 설계되었습니다. 진정으로 무작위적인 결과를 제공하지만, 중요한 삶의 결정, 재정 문제 또는 전문적인 조언이 필요한 상황에는 사용하지 않는 것이 좋습니다. 항상 신중하게 판단하세요。",
        "faq_q5": "결과가 때때로 '줄무늬'(예: 연속으로 여러 번 '예')처럼 느껴지는 이유는 무엇인가요?",
        "faq_a5": "이것은 흔한 심리적 현상입니다! 진정으로 무작위적인 시퀀스에도 동일한 결과가 '줄무늬'처럼 나타날 수 있습니다. 각 동전 던지기는 50/50의 확률을 가진 독립적인 이벤트이므로, 연속적인 '예' 결과는 번갈아 나타나는 패턴만큼이나 통계적으로 가능성이 높습니다. 이것은 단순히 무작위성의 본질입니다!",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "contact_us": "문의하기",
        "footer_disclaimer": "이 도구는 오락 및 의사 결정 지원 목적으로만 사용됩니다. 이 앱을 사용하여 내린 결과나 결정에 대해 책임지지 않습니다.",
        "footer_copyright": "&copy; 2024 코인플립. 모든 권리 보유.",
        "heads_coin_face": "예",
        "tails_coin_face": "아니오",
        "view_history_menu": "히스토리 보기",
        "history_modal_title": "동전 던지기 기록",
        "no_history_yet": "기록이 없습니다.",
        "clear_all_history_btn": "모든 기록 삭제",
        "confirm_clear_history": "모든 기록을 삭제하시겠습니까?",
        "language_selection_hint": "언어 선택은 메뉴에서 할 수 있습니다.",
        "at_label": "at", // Using 'at' literally for consistency since we didn't translate it in Korean initially
        "privacy_policy_title_modal": "개인정보처리방침",
        "privacy_policy_content_modal": "코인플립 앱은 사용자 개인 정보를 존중하며 보호하기 위해 최선을 다합니다.<br><br>이 앱은 어떠한 개인 식별 정보도 수집, 저장 또는 공유하지 않습니다. 모든 플립 기록 및 세션 통계는 전적으로 사용자 기기의 브라우저 로컬 저장소에 저장됩니다. 이는 사용자의 데이터가 기기를 벗어나지 않으며, 당사 또는 제3자에 의해 수집, 저장 또는 공유되지 않음을 의미합니다.<br><br>사용자는 언제든지 앱 내의 '기록 지우기' 또는 '세션 초기화' 옵션을 사용하여 자신의 데이터를 완전히 제어하고 삭제할 수 있습니다. 브라우저를 닫거나 브라우저 캐시를 지우면 이 데이터도 제거될 수 있습니다.<br><br>본 개인정보처리방침은 앱 업데이트 또는 법적 요구사항 변경에 따라 수정될 수 있습니다. 중요한 변경 사항이 있을 경우 앱 내 공지사항을 통해 알려드립니다.",
        "terms_of_service_title_modal": "서비스 약관",
        "terms_of_service_content_modal": "코인플립 앱(이하 '본 앱')을 이용해 주셔서 감사합니다. 본 앱은 오락 및 간단한 의사 결정을 돕기 위한 목적으로 제공됩니다.<br><br>본 앱은 'Web Crypto API'를 사용하여 암호학적으로 안전한 무작위 결과를 제공하지만, 본 앱의 결과에 따른 어떠한 결정이나 결과에 대해서도 책임지지 않습니다. 중요한 결정이나 심각한 사안에는 본 앱을 사용하지 마십시오.<br><br>본 앱의 모든 콘텐츠 및 기능은 저작권법 및 관련 법규의 보호를 받습니다. 본 앱의 무단 복제, 배포 또는 상업적 이용은 금지됩니다.<br><br>본 약관은 사전 통지 없이 변경될 수 있으며, 변경된 약관은 앱 내 공지사항을 통해 효력이 발생합니다. 사용자는 정기적으로 약관을 검토할 책임이 있습니다.",
        "contact_us_title_modal": "문의하기",
        "contact_us_content_modal": "코인플립 앱에 대한 질문, 제안 또는 문제가 있으시면 언제든지 문의해 주세요.<br><br>현재는 별도의 문의 채널을 운영하고 있지 않습니다. 앱에 대한 피드백은 앱 스토어 리뷰를 통해 남겨주시거나, 개발자에게 직접 이메일을 보내주시면 감사하겠습니다.<br><br>**개발자 이메일:** developer@example.com (예시 이메일입니다. 실제 이메일로 변경해야 합니다.)<br><br>사용자 여러분의 소중한 의견은 앱 개선에 큰 도움이 됩니다."
    },
    "ja": { // Japanese
        "app_title": "CoinFlip - マテリアルデザイン",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "メニュー",
        "home_menu": "ホーム",
        "settings_menu": "設定",
        "help_menu": "ヘルプ",
        "language_select_label": "言語",
        "korean_lang": "韓国語",
        "english_lang": "English",
        "japanese_lang": "日本語",
        "german_lang": "ドイツ語",
        "spanish_lang": "スペイン語",
        "chinese_lang": "中国語",
        "main_title": "自信を持って決断を下す",
        "main_description": "すべての迅速な決定のための公正でシンプルなコインフリップ。",
        "about_title": "CoinFlipについて",
        "about_p1": "人生は小さなものから人生を変えるものまで、選択に満ちています。CoinFlipは、自信と少しの楽しみを持って選択を下すのに役立つように設計された美しいデジタルツールです。これは単なるアプリではありません。必要なときにいつでも明確で偏りのない答えを提供する準備ができています。",
        "about_p2": "私たちは現代に合わせて古典的なコイントスを再考しました。「表」または「裏」の代わりに、「はい」または「いいえ」という明確な答えを提供します。このシンプルだが強力な変更は、曖昧さを取り除き、より明確な結果を得るために質問を組み立てるのに役立ちます。新しい仕事に就くべきですか？皿洗いをする番ですか？質問をし、コインをフリップし、率直な答えを受け取り、前進する力を与えてくれます。",
        "about_p3": "CoinFlipの核心は、絶対的な公平性へのコミットメントです。単純で予測可能なコンピューター生成乱数は使用しません。代わりに、すべてのフリップは暗号化操作に使用される非常に安全なWeb標準である<strong>Web Crypto API</strong>によって強化されています。これにより、「はい」または「いいえ」の各結果が真にランダムで統計的に予測不可能であることが保証され、最も重要な決定に対する信頼の基盤が提供されます。",
        "about_p4": "CoinFlipには、エクスペリエンスを向上させる機能が満載です。",
        "about_li1": "<strong>セッション統計:</strong> 1回のフリップを超えて。リアルタイム統計は、セッションの総フリップ数、「はい」と「いいえ」の数、および比率の内訳を追跡し、意思決定パターンを楽しく見ています。",
        "about_li2": "<strong>詳細フリップログ:</strong> すべての決定はタイムスタンプ付きのログに記録されます。これは、友人の賭けの責任を追及したり、1日の選択肢をレビューしたりするのに最適です。",
        "about_li4": "<strong>直感的なインターフェース:</strong> 強力なツールは使い心地も良いものであるべきだと信じています。クリーンでミニマルなデザインとスムーズなアニメーションが組み合わさり、シンプルかつエレガントなエクスペリエンスを保証します。",
        "about_li5": "<strong>多言語サポート:</strong> CoinFlipはグローバルな視聴者向けに設計されており、どこにいてもネイティブツールのように感じられるように複数の言語で利用できます。",
        "about_p5": "友好的な議論を解決したり、家事にゲーム性を持たせたり、単にランダムなガイダンスの瞬間を探したりする場合でも、CoinFlipは信頼性が高く、透明性があり、いつでも手元にあるように構築されています。それは意思決定を簡素化します。",
        "flip_now": "コインをフリップ",
        "stats_title": "セッション統計",
        "total_flips_label": "合計フリップ",
        "heads_label": "はい", // Corrected Japanese for "Yes"
        "tails_label": "いいえ", // Corrected Japanese for "No"
        "heads_ratio_label": "はい",
        "tails_ratio_label": "いいえ",
        "reset_session": "セッションをリセット",
        "log_title": "フリップログ",
        "clear_log_btn": "ログをクリア",
        "no_flips_yet": "まだフリップはありません。",
        "service_purpose_title": "サービス目的と責任範囲",
        "service_purpose_p1": "CoinFlipは、小さな決断を支援したり、日常のシナリオに偶然の要素を追加したりするためのシンプルで魅力的なツールとして設計されています。公平性のために高度な暗号化ランダム性を使用しますが、重要またはハイステークスの選択ではなく、エンターテイメントと気軽な意思決定を目的としています。",
        "service_purpose_p2": "ユーザーは、CoinFlipの結果に基づいて行われた決定に対して単独で責任を負います。慎重な使用を推奨し、真剣な検討、専門家のアドバイス、または重大な経済的/個人的な影響を必要とする状況でこのツールを使用しないように助言します。",
        "how_to_use_title": "使い方",
        "how_to_use_step1": "<strong>質問を明確にする:</strong> 心の中で、または声に出して、「はい」または「いいえ」の質問を明確に立てます。これはフリップの意図を設定します。",
        "how_to_use_step2": "<strong>フリップ:</strong> 「コインをフリップ」ボタンをタップします。デジタルコインが回転し、現実のトスを模倣し、意思決定に動的な視覚要素を追加します。",
        "how_to_use_step3": "<strong>啓示:</strong> コインは「はい」または「いいえ」のいずれかに着地し、質問に即座に偏りのない答えを提供します。満足のいく視覚的および聴覚的な合図に注意してください！",
        "use_cases_title": "実用的なアプリケーション",
        "use_case_menu_decision": "<strong>レストランルーレット:</strong> どこで食事をするか決められない？CoinFlipに次の料理の冒険を選んでもらいましょう（例：「ピザを食べに行くべきか？」、「はい」または「いいえ」）。",
        "use_case_team_consensus": "<strong>公平なチーム選択:</strong> CoinFlipを使用して、役割を公平に割り当てたり、ゲームのチームを選んだり、任意のアクティビティで誰が最初に行くかを決めたりします。常に公平性を確保します。",
        "use_case_order_setting": "<strong>順番決め:</strong> 家事、ゲーム、プレゼンテーションの順番を決めます。すばやいフリップで紛争を解決し、物事をスムーズに進めます。",
        "use_case_fair_random_choice": "<strong>偏りのないタイブレーカー:</strong> 真に偏りのないランダムな選択が必要なあらゆる状況で、CoinFlipはあなたのデジタル仲裁者として機能します。小さなジレンマから重要な選択まで、明確な答えを得ることができます。",
        "data_log_title": "データとログの処理",
        "data_log_p1": "CoinFlipはあなたのプライバシーを尊重します。フリップ履歴と統計を含むすべてのセッションデータは、ブラウザのローカルストレージ内のデバイスにのみ排他的に保存されます。これは、あなたのデータがデバイスを離れることはなく、私たちや第三者によって収集、保存、共有されることはないことを意味します。",
        "data_log_p2": "あなたはデータに対する完全な制御を持っています。「ログをクリア」または「セッションをリセット」オプションを使用して、いつでもフリップログとセッション統計をクリアできます。ブラウザを閉じたり、ブラウザのキャッシュをクリアしたりすると、このデータも削除される場合があります。",
        "tech_benefits_title": "テクノロジーとユーザーの利点",
        "tech_benefits_p1": "CoinFlipは、暗号化操作のための最先端のWeb標準である強力な<strong>Web Crypto API</strong>を活用しています。これにより、すべてのコイントスの結果が、真にランダムで予測不可能で安全なプロセスを使用して生成されることが保証されます。単純な乱数ジェネレーターとは異なり、私たちの方法は偏りのない結果を保証し、すべての決定において真の公平性を提供します。",
        "tech_benefits_p2": "あなたの利点は、各フリップの公平性に対する絶対的な自信です。カジュアルな選択であろうと決定的な瞬間であろうと、CoinFlipの結果は純粋に偶然によるものであり、パターンや予測可能性がなく、現実のコイントスにデジタル統合が強化されていると信頼できます。",
        "guide_title": "詳細な説明",
        "guide_p2": "<strong>暗号学的に安全なランダム性:</strong> その核となるCoinFlipは、堅牢な<strong>Web Crypto API</strong>という現代のWeb標準に基づいて構築されています。このAPIは、単純な疑似ランダムアルゴリズムをはるかに超える、暗号学的に安全な乱数を生成します。これは、すべてのフリップが真に予測不可能で操作に免疫があることを意味し、最も重要な決定においても絶対的な公平性と整合性を保証します。すべての「はい」または「いいえ」の真のランダム性を信頼してください。",
        "faq_title": "よくある質問（FAQ）",
        "faq_q1": "このコイントスは本当にランダムですか？",
        "faq_a1": "はい、もちろんです！CoinFlipは、安全な暗号化ランダム性のために設計された堅牢なブラウザ機能である<strong>Web Crypto API</strong>を使用しています。これにより、すべてのフリップが真に予測不可能で偏りがなく、物理的なコイントスの真のランダム性を反映していることが保証されます。",
        "faq_q2": "このアプリはオフラインでも動作しますか？",
        "faq_a2": "現在、CoinFlipは外部スクリプトの依存関係（Tailwind CSSやMaterial Iconsなど）のため、初期ロード時にインターネット接続が必要です。将来のオフライン機能を目指していますが、リアルタイム機能にはオンラインアクセスが必要です。",
        "faq_q3": "私のデータは保存または共有されますか？",
        "faq_a3": "いいえ。フリップ履歴とセッション統計は、デバイスのブラウザストレージ（localStorage）にローカルに保存されます。このデータはサーバーに送信されたり、第三者と共有されたりすることはありません。いつでもクリアする完全な制御を持っています。",
        "faq_q4": "このツールを深刻な決定に使用できますか？",
        "faq_a4": "CoinFlipは、エンターテイメントと日常の小さな決定を支援するために設計されています。真にランダムな結果を提供しますが、重要な人生の決定、財務上の問題、または専門家のアドバイスが必要な状況では使用しないことをお勧めします。常に適切な判断を行ってください。",
        "faq_q5": "結果が時々連続しているように感じるのはなぜですか（例：何度も「はい」が続く）？",
        "faq_a5": "これは一般的な心理現象です！真にランダムなシーケンスでも、同じ結果が「連続」して現れることがあります。各コイントスは50/50の確率を持つ独立したイベントであるため、「はい」の結果の連続は、交互のパターンと同じくらい統計的に可能性が高いです。それは単にランダム性の本質です！",
        "privacy_policy": "プライバシーポリシー",
        "terms_of_service": "利用規約",
        "contact_us": "お問い合わせ",
        "footer_disclaimer": "このツールは娯楽および意思決定支援のみを目的としています。このアプリを使用して行われた結果または決定については責任を負いません。",
        "footer_copyright": "&copy; 2024 CoinFlip. 全著作権所有.",
        "heads_coin_face": "はい", // Corrected Japanese for "Yes"
        "tails_coin_face": "いいえ", // Corrected Japanese for "No"
        "view_history_menu": "履歴を表示",
        "history_modal_title": "フリップ履歴",
        "no_history_yet": "履歴はありません。",
        "clear_all_history_btn": "すべての履歴をクリア",
        "confirm_clear_history": "すべての履歴をクリアしてもよろしいですか？",
        "language_selection_hint": "言語選択はメニューから行えます。",
        "at_label": "に", // Translated "at" for Japanese
        "privacy_policy_title_modal": "プライバシーポリシー",
        "privacy_policy_content_modal": "これはプライバシーポリシーコンテンツのプレースホルダーです。実際のプライバシーポリシーに置き換えてください。CoinFlipアプリは、ユーザーのプライバシーを保護することにコミットしています。このアプリは、個人を特定できる情報を収集、保存、または共有しません。すべてのフリップ記録とセッション統計は、ユーザーデバイスのブラウザローカルストレージにのみ保存されます。ユーザーのデータはデバイスから離れることはなく、当社または第三者によって収集、保存、共有されることはありません。ユーザーは、アプリ内の「ログをクリア」または「セッションをリセット」オプションを使用して、いつでもデータを完全に制御および削除できます。ブラウザを閉じたり、ブラウザのキャッシュをクリアしたりすると、このデータも削除される場合があります。このプライバシーポリシーは、アプリの変更または法的要件の変更を反映するために更新される場合があります。重要な変更はアプリ内でお知らせします。",
        "terms_of_service_title_modal": "利用規約",
        "terms_of_service_content_modal": "これは利用規約コンテンツのプレースホルダーです。実際の利用規約に置き換えてください。CoinFlipアプリをご利用いただきありがとうございます。このアプリは、エンターテイメントおよび簡単な意思決定支援のために提供されています。このアプリは「Web Crypto API」を使用して暗号学的に安全なランダムな結果を提供しますが、アプリの結果に基づく決定や結果については一切責任を負いません。重要な決定や深刻な事柄にはこのアプリを使用しないでください。このアプリのすべてのコンテンツおよび機能は、著作権法および関連法規によって保護されています。このアプリの無断複製、配布、または商業目的での使用は禁止されています。これらの規約は事前の通知なしに変更されることがあり、改訂された規約はアプリ内のお知らせを通じて有効になります。ユーザーは定期的に規約を確認する責任があります。",
        "contact_us_title_modal": "お問い合わせ",
        "contact_us_content_modal": "これはお問い合わせコンテンツのプレースホルダーです。実際の連絡先情報に置き換えてください。CoinFlipアプリに関するご質問、ご提案、または問題がございましたら、お気軽にお問い合わせください。現在、個別の問い合わせチャネルは運営しておりません。アプリストアのレビューを通じてフィードバックをいただくか、開発者に直接メールでお問い合わせください。開発者メール：developer@example.com (これは例示のメールアドレスです。実際のメールアドレスに変更してください。) ユーザーの皆様からの貴重なご意見は、アプリの改善に役立ちます。"
    },
    "de": { // German
        "app_title": "CoinFlip - Material Design",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "Menü",
        "home_menu": "Startseite",
        "settings_menu": "Einstellungen",
        "help_menu": "Hilfe",
        "language_select_label": "Sprache",
        "korean_lang": "Koreanisch",
        "english_lang": "Englisch",
        "japanese_lang": "Japanisch",
        "german_lang": "Deutsch",
        "spanish_lang": "Spanisch",
        "chinese_lang": "Chinesisch",
        "main_title": "Entscheidungen mit Zuversicht treffen",
        "main_description": "Ein fairer und einfacher Münzwurf für all Ihre schnellen Entscheidungen.",
        "about_title": "Über CoinFlip",
        "about_p1": "Das Leben ist voller Entscheidungen, von kleinen und einfachen bis hin zu lebensverändernden. CoinFlip ist ein wunderschön gestaltetes digitales Werkzeug, das Ihnen hilft, diese Entscheidungen mit Zuversicht und einem Hauch von Spaß zu treffen. Es ist mehr als nur eine App; es ist Ihr persönlicher Entscheidungshelfer, der bereit ist, Ihnen jederzeit eine klare, unvoreingenommene Antwort zu geben.",
        "about_p2": "Wir haben den klassischen Münzwurf für das moderne Zeitalter neu interpretiert. Statt 'Kopf' oder 'Zahl' geben wir ein eindeutiges 'Ja' oder 'Nein'. Diese einfache, aber leistungsstarke Änderung beseitigt Unklarheiten und hilft Ihnen, Ihre Fragen für ein klareres Ergebnis zu formulieren. Sollten Sie den neuen Job annehmen? Sind Sie an der Reihe, abzuwaschen? Stellen Sie Ihre Frage, werfen Sie die Münze und erhalten Sie eine direkte Antwort, die Sie befähigt, voranzukommen.",
        "about_p3": "Im Herzen von CoinFlip liegt das Bekenntnis zu absoluter Fairness. Wir verwenden keine einfachen, vorhersehbaren computergenerierten Zahlen. Stattdessen wird jeder Wurf durch die <strong>Web Crypto API</strong> angetrieben, einen hochsicheren Webstandard für kryptografische Operationen. Dies stellt sicher, dass jedes 'Ja' oder 'Nein'-Ergebnis wirklich zufällig und statistisch unvorhersehbar ist und eine Vertrauensbasis für Ihre wichtigsten Entscheidungen bildet.",
        "about_p4": "CoinFlip ist vollgepackt mit Funktionen, die Ihr Erlebnis verbessern:",
        "about_li1": "<strong>Sitzungsstatistiken:</strong> Gehen Sie über einen einzigen Wurf hinaus. Unsere Echtzeitstatistiken verfolgen die Gesamtzahl der Würfe Ihrer Sitzung, die Anzahl der 'Ja' und 'Nein' und die Quotenaufschlüsselungen, was einen unterhaltsamen Einblick in Ihre Entscheidungsmuster bietet.",
        "about_li2": "<strong>Detailliertes Wurflprotokoll:</strong> Jede Entscheidung wird in einem Zeitstempel-Protokoll aufgezeichnet. Dies ist perfekt, um Freunde für eine Wette zur Rechenschaft zu ziehen oder die Entscheidungen, die Sie im Laufe des Tages getroffen haben, zu überprüfen.",
        "about_li4": "<strong>Intuitive Benutzeroberfläche:</strong> Wir glauben, dass ein leistungsstarkes Werkzeug auch Freude bereiten sollte. Unser klares, minimalistisches Design, kombiniert mit flüssigen Animationen, sorgt für ein Erlebnis, das sowohl einfach als auch elegant ist.",
        "about_li5": "<strong>Mehrsprachige Unterstützung:</strong> CoinFlip wurde für ein globales Publikum entwickelt und ist in mehreren Sprachen verfügbar, damit es sich überall wie ein natives Werkzeug anfühlt.",
        "about_p5": "Egal, ob Sie eine freundliche Debatte beilegen, Ihre Hausarbeiten spielerisch gestalten oder einfach nur einen Moment zufälliger Orientierung suchen, CoinFlip ist zuverlässig, transparent und immer griffbereit. Es ist Entscheidungsfindung, vereinfacht.",
        "flip_now": "Münze werfen",
        "stats_title": "Sitzungsstatistiken",
        "total_flips_label": "Gesamtwürfe",
        "heads_label": "Ja", // German for "Yes"
        "tails_label": "Nein", // German for "No"
        "heads_ratio_label": "Ja",
        "tails_ratio_label": "Nein",
        "reset_session": "Sitzung zurücksetzen",
        "log_title": "Wurflprotokoll",
        "clear_log_btn": "Protokoll löschen",
        "no_flips_yet": "Noch keine Würfe.",
        "service_purpose_title": "Servicezweck und Verantwortungsbereich",
        "service_purpose_p1": "CoinFlip wurde als einfaches, ansprechendes Werkzeug entwickelt, um bei kleineren Entscheidungen zu helfen oder alltäglichen Szenarien ein Element des Zufalls hinzuzufügen. Es verwendet fortschrittliche kryptografische Zufälligkeit für Fairness, ist jedoch für Unterhaltung und leichte Entscheidungen gedacht, nicht für kritische oder hochriskante Entscheidungen.",
        "service_purpose_p2": "Benutzer sind allein für Entscheidungen verantwortlich, die auf den Ergebnissen von CoinFlip basieren. Wir ermutigen zur bewussten Nutzung und raten davon ab, dieses Tool für Situationen zu verwenden, die ernsthafte Überlegungen, professionelle Beratung oder erhebliche finanzielle/persönliche Auswirkungen erfordern.",
        "how_to_use_title": "Anleitung",
        "how_to_use_step1": "<strong>Ihre Frage, unsere Antwort:</strong> Formulieren Sie Ihre 'Ja' oder 'Nein'-Frage klar in Gedanken oder laut. Dies legt die Absicht für Ihren Wurf fest.",
        "how_to_use_step2": "<strong>Der Wurf:</strong> Tippen Sie auf die Schaltfläche 'Münze werfen'. Beobachten Sie, wie sich die digitale Münze dreht und einen realen Wurf nachahmt, wodurch Ihrer Entscheidungsfindung ein dynamisches visuelles Element hinzugefügt wird.",
        "how_to_use_step3": "<strong>Die Offenbarung:</strong> Die Münze landet entweder auf 'Ja' oder 'Nein' und liefert eine sofortige, unvoreingenommene Antwort auf Ihre Frage. Achten Sie auf die befriedigenden visuellen und auditiven Hinweise!",
        "use_cases_title": "Praktische Anwendungen",
        "use_case_menu_decision": "<strong>Restaurant-Roulette:</strong> Sie können sich nicht entscheiden, wo Sie essen sollen? Lassen Sie CoinFlip Ihr nächstes kulinarisches Abenteuer auswählen (z.B. 'Sollen wir Pizza bestellen?' 'Ja' oder 'Nein').",
        "use_case_team_consensus": "<strong>Faire Teamauswahl:</strong> Verwenden Sie CoinFlip, um Rollen fair zuzuweisen, Teams für ein Spiel auszuwählen oder zu entscheiden, wer bei einer Aktivität zuerst an der Reihe ist. Stellt jederzeit Unparteilichkeit sicher.",
        "use_case_order_setting": "<strong>Reihenfolge festlegen:</strong> Bestimmen Sie, wer bei Hausarbeiten, Spielen oder Präsentationen an der Reihe ist. Ein schneller Wurf löst Streitigkeiten und hält die Dinge reibungslos am Laufen.",
        "use_case_fair_random_choice": "<strong>Unvoreingenommener Tie-Breaker:</strong> Für jede Situation, die eine wirklich unvoreingenommene, zufällige Wahl erfordert, tritt CoinFlip als Ihr digitaler Schiedsrichter auf. Von kleinen Dilemmata bis zu wichtigen Entscheidungen erhalten Sie eine klare Antwort.",
        "data_log_title": "Daten- und Protokollbehandlung",
        "data_log_p1": "CoinFlip respektiert Ihre Privatsphäre. Alle Sitzungsdaten, einschließlich Ihrer Wurfhistorie und Statistiken, werden ausschließlich auf Ihrem Gerät im lokalen Speicher Ihres Browsers gespeichert. Das bedeutet, dass Ihre Daten Ihr Gerät niemals verlassen und von uns oder Dritten nicht gesammelt, gespeichert oder weitergegeben werden.",
        "data_log_p2": "Sie haben die volle Kontrolle über Ihre Daten. Sie können Ihr gesamtes Wurflprotokoll und Ihre Sitzungsstatistiken jederzeit über die Optionen 'Protokoll löschen' oder 'Sitzung zurücksetzen' in der Anwendung löschen. Das Schließen Ihres Browsers oder das Löschen des Browser-Caches kann diese Daten ebenfalls entfernen.",
        "tech_benefits_title": "Technologie- und Benutzervorteile",
        "tech_benefits_p1": "CoinFlip nutzt die leistungsstarke <strong>Web Crypto API</strong>, einen hochmodernen Webstandard für kryptografische Operationen. Dies stellt sicher, dass jedes Münzwurfergebnis mithilfe eines wirklich zufälligen, unvorhersehbaren und sicheren Prozesses generiert wird. Im Gegensatz zu einfacheren Zufallszahlengeneratoren garantiert unsere Methode ein unvoreingenommenes Ergebnis und bietet Ihnen bei jeder Entscheidung echte Fairness.",
        "tech_benefits_p2": "Der Vorteil für Sie ist das absolute Vertrauen in die Unparteilichkeit jedes Wurfes. Egal, ob es sich um eine ungezwungene Wahl oder einen entscheidenden Moment handelt, können Sie darauf vertrauen, dass das Ergebnis von CoinFlip rein zufällig ist, frei von erkennbaren Mustern oder Vorhersagbarkeit, genau wie ein realer Münzwurf mit verbesserter digitaler Integrität.",
        "guide_title": "Detaillierte Erklärung",
        "guide_p2": "<strong>Kryptografisch sichere Zufälligkeit:</strong> Im Kern basiert CoinFlip auf der robusten <strong>Web Crypto API</strong>, einem modernen Webstandard. Diese API generiert kryptografisch sichere Zufallszahlen, die weit über einfache Pseudo-Zufallsalgorithmen hinausgehen. Dies bedeutet, dass jeder einzelne Wurf wirklich unvorhersehbar und manipulationssicher ist, was absolute Fairness und Integrität selbst für Ihre wichtigsten Entscheidungen garantiert. Vertrauen Sie der wahren Zufälligkeit jedes 'Ja' oder 'Nein'.",
        "faq_title": "Häufig gestellte Fragen (FAQ)",
        "faq_q1": "Ist dieser Münzwurf wirklich zufällig?",
        "faq_a1": "Ja, absolut! CoinFlip verwendet die <strong>Web Crypto API</strong>, eine robuste Browserfunktion, die für sichere kryptografische Zufälligkeit entwickelt wurde. Dies stellt sicher, dass jeder Wurf wirklich unvorhersehbar und unvoreingenommen ist und die wahre Zufälligkeit eines physischen Münzwurfs widerspiegelt.",
        "faq_q2": "Funktioniert diese App offline?",
        "faq_a2": "Derzeit erfordert CoinFlip aufgrund externer Skriptabhängigkeiten (wie Tailwind CSS und Material Icons) eine Internetverbindung, um initial geladen zu werden. Obwohl wir zukünftig Offline-Funktionen anstreben, erfordert die Echtzeitfunktionalität Online-Zugriff.",
        "faq_q3": "Werden meine Daten gespeichert oder geteilt?",
        "faq_a3": "Nein. Ihre Wurfhistorie und Sitzungsstatistiken werden lokal im lokalen Speicher Ihres Browsers gespeichert. Diese Daten werden niemals an unsere Server übertragen oder an Dritte weitergegeben. Sie haben die volle Kontrolle, um sie jederzeit zu löschen.",
        "faq_q4": "Kann ich dieses Tool für ernsthafte Entscheidungen verwenden?",
        "faq_a4": "CoinFlip wurde zur Unterhaltung und zur Unterstützung kleinerer, alltäglicher Entscheidungen entwickelt. Obwohl es wirklich zufällige Ergebnisse liefert, empfehlen wir nicht, es für kritische Lebensentscheidungen, finanzielle Angelegenheiten oder Situationen zu verwenden, die professionellen Rat erfordern. Treffen Sie immer ein gutes Urteilsvermögen.",
        "faq_q5": "Warum fühlen sich die Ergebnisse manchmal streifig an (z. B. viele 'Ja' hintereinander)?",
        "faq_a5": "Dies ist ein häufiges psychologisches Phänomen! Selbst wirklich zufällige Sequenzen können 'Streifen' identischer Ergebnisse aufweisen. Jeder Münzwurf ist ein unabhängiges Ereignis mit einer 50/50-Chance, sodass eine Reihe von 'Ja'-Ergebnissen statistisch genauso wahrscheinlich ist wie ein wechselndes Muster. Es ist einfach die Natur der Zufälligkeit!",
        "privacy_policy": "Datenschutzbestimmungen",
        "terms_of_service": "Nutzungsbedingungen",
        "contact_us": "Kontakt",
        "footer_disclaimer": "Dieses Tool dient ausschließlich der Unterhaltung und Entscheidungsfindung. Wir sind nicht verantwortlich für Ergebnisse oder Entscheidungen, die mit dieser App getroffen werden.",
        "footer_copyright": "&copy; 2024 CoinFlip. Alle Rechte vorbehalten.",
        "heads_coin_face": "Ja", // Corrected German for "Yes"
        "tails_coin_face": "Nein", // Corrected German for "No"
        "view_history_menu": "Verlauf anzeigen",
        "history_modal_title": "Wurfverlauf",
        "no_history_yet": "Kein Verlauf verfügbar.",
        "clear_all_history_btn": "Gesamten Verlauf löschen",
        "confirm_clear_history": "Möchten Sie den gesamten Verlauf wirklich löschen?",
        "language_selection_hint": "Sprachauswahl kann über das Menü erfolgen.",
        "at_label": "um", // Translated "at" for German
        "privacy_policy_title_modal": "Datenschutzbestimmungen",
        "privacy_policy_content_modal": "Dies ist ein Platzhalter für den Inhalt der Datenschutzbestimmungen. Bitte ersetzen Sie diesen durch Ihre tatsächlichen Datenschutzbestimmungen. Die CoinFlip-App verpflichtet sich, Ihre Privatsphäre zu schützen. Diese App sammelt, speichert oder teilt keine persönlich identifizierbaren Informationen. Alle Wurfaufzeichnungen und Sitzungsstatistiken werden ausschließlich auf dem lokalen Speicher Ihres Browsers auf Ihrem Gerät gespeichert. Ihre Daten verlassen niemals Ihr Gerät und werden von uns oder Dritten nicht gesammelt, gespeichert oder weitergegeben. Sie haben die volle Kontrolle über Ihre Daten und können diese jederzeit über die Optionen „Protokoll löschen“ oder „Sitzung zurücksetzen“ in der App löschen. Das Schließen Ihres Browsers oder das Leeren des Browser-Caches kann diese Daten ebenfalls entfernen. Diese Datenschutzbestimmungen können aufgrund von App-Änderungen oder rechtlichen Anforderungen aktualisiert werden. Wichtige Änderungen werden innerhalb der App bekannt gegeben.",
        "terms_of_service_title_modal": "Nutzungsbedingungen",
        "terms_of_service_content_modal": "Dies ist ein Platzhalter für den Inhalt der Nutzungsbedingungen. Bitte ersetzen Sie diesen durch Ihre tatsächlichen Nutzungsbedingungen. Vielen Dank für die Nutzung der CoinFlip-App. Diese App dient der Unterhaltung und einfachen Entscheidungsfindung. Obwohl die App die „Web Crypto API“ verwendet, um kryptografisch sichere Zufallsergebnisse zu liefern, übernehmen wir keine Verantwortung für Entscheidungen oder Ergebnisse, die auf den Ergebnissen der App basieren. Verwenden Sie diese App nicht für wichtige Entscheidungen oder ernste Angelegenheiten. Alle Inhalte und Funktionen dieser App sind durch Urheberrechtsgesetze und verwandte Vorschriften geschützt. Unerlaubte Vervielfältigung, Verbreitung oder kommerzielle Nutzung dieser App ist verboten. Diese Bedingungen können ohne vorherige Ankündigung geändert werden, und die überarbeiteten Bedingungen treten durch Ankündigungen innerhalb der App in Kraft. Benutzer sind dafür verantwortlich, die Bedingungen regelmäßig zu überprüfen.",
        "contact_us_title_modal": "Kontakt",
        "contact_us_content_modal": "Dies ist ein Platzhalter für den Inhalt des Kontaktbereichs. Bitte ersetzen Sie diesen durch Ihre tatsächlichen Kontaktinformationen. Wenn Sie Fragen, Vorschläge oder Probleme bezüglich der CoinFlip-App haben, können Sie uns gerne kontaktieren. Derzeit betreiben wir keinen separaten Kontaktkanal. Wir freuen uns über Ihr Feedback über App-Store-Bewertungen oder indem Sie eine E-Mail direkt an den Entwickler senden. Entwickler-E-Mail: developer@example.com (Dies ist eine Beispiel-E-Mail. Bitte ändern Sie diese in eine tatsächliche E-Mail.) Ihr wertvolles Feedback hilft uns, die App zu verbessern."
    },
    "es": { // Spanish
        "app_title": "CoinFlip - Diseño Material",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "Menú",
        "home_menu": "Inicio",
        "settings_menu": "Configuración",
        "help_menu": "Ayuda",
        "language_select_label": "Idioma",
        "korean_lang": "Coreano",
        "english_lang": "Inglés",
        "japanese_lang": "Japonés",
        "german_lang": "Alemán",
        "spanish_lang": "Español",
        "chinese_lang": "Chino",
        "main_title": "Toma decisiones con confianza",
        "main_description": "Un lanzamiento de moneda justo y sencillo para todas tus decisiones rápidas.",
        "about_title": "Acerca de CoinFlip",
        "about_p1": "La vida está llena de elecciones, desde las pequeñas y sencillas hasta las que cambian la vida. CoinFlip es una herramienta digital bellamente diseñada creada para ayudarte a tomar esas decisiones con confianza y un toque de diversión. Es más que una simple aplicación; es tu compañero personal para la toma de decisiones, listo para brindarte una respuesta clara e imparcial cuando la necesites.",
        "about_p2": "Hemos reinventado el lanzamiento de moneda clásico para la era moderna. En lugar de 'Cara' o 'Cruz', ofrecemos un 'Sí' o un 'No' definitivo. Este cambio simple pero poderoso elimina la ambigüedad y ayuda a enmarcar tus preguntas para un resultado más claro. ¿Deberías aceptar ese nuevo trabajo? ¿Es tu turno de lavar los platos? Haz tu pregunta, lanza la moneda y recibe una respuesta directa, lo que te permitirá avanzar.",
        "about_p3": "En el corazón de CoinFlip reside un compromiso con la equidad absoluta. No utilizamos números generados por computadora simples y predecibles. En cambio, cada lanzamiento está impulsado por la <strong>API de Web Crypto</strong>, un estándar web altamente seguro utilizado para operaciones criptográficas. Esto garantiza que cada resultado de 'Sí' o 'No' sea verdaderamente aleatorio y estadísticamente impredecible, proporcionando una base de confianza para tus decisiones más importantes.",
        "about_p4": "CoinFlip está repleto de funciones para mejorar tu experiencia:",
        "about_li1": "<strong>Estadísticas de sesión:</strong> Ve más allá de un solo lanzamiento. Nuestras estadísticas en tiempo real rastrean el total de lanzamientos de tu sesión, los recuentos de 'Sí' y 'No', y los desgloses de proporciones, lo que ofrece una mirada divertida a tus patrones de toma de decisiones.",
        "about_li2": "<strong>Registro detallado de lanzamientos:</strong> Cada decisión se registra en un registro con marca de tiempo. Esto es perfecto para hacer que tus amigos rindan cuentas por una apuesta o para revisar las decisiones que has tomado a lo largo del día.",
        "about_li4": "<strong>Interfaz intuitiva:</strong> Creemos que una herramienta poderosa también debe ser un placer de usar. Nuestro diseño limpio y minimalista, combinado con animaciones suaves, garantiza una experiencia que es a la vez sencilla y elegante.",
        "about_li5": "<strong>Soporte multilingüe:</strong> CoinFlip está diseñado para una audiencia global y está disponible en varios idiomas para que se sienta como una herramienta nativa, sin importar dónde te encuentres.",
        "about_p5": "Ya sea que estés resolviendo un debate amistoso, gamificando tus tareas o simplemente buscando un momento de orientación aleatoria, CoinFlip está diseñado para ser confiable, transparente y siempre al alcance de tu mano. Es la toma de decisiones, simplificada.",
        "flip_now": "Lanzar moneda",
        "stats_title": "Estadísticas de sesión",
        "total_flips_label": "Total de lanzamientos",
        "heads_label": "Sí", // Spanish for "Yes"
        "tails_label": "No", // Spanish for "No"
        "heads_ratio_label": "Sí",
        "tails_ratio_label": "No",
        "reset_session": "Restablecer sesión",
        "log_title": "Registro de lanzamientos",
        "clear_log_btn": "Borrar registro",
        "no_flips_yet": "Aún no hay lanzamientos.",
        "service_purpose_title": "Propósito del servicio y alcance de la responsabilidad",
        "service_purpose_p1": "CoinFlip está diseñado como una herramienta sencilla y atractiva para ayudar con decisiones menores o para agregar un elemento de azar a los escenarios cotidianos. Utiliza una aleatoriedad criptográfica avanzada para la equidad, pero está destinado al entretenimiento y a la toma de decisiones desenfadada, no para decisiones críticas o de alto riesgo.",
        "service_purpose_p2": "Los usuarios son los únicos responsables de las decisiones tomadas en función de los resultados de CoinFlip. Fomentamos el uso consciente y desaconsejamos el uso de esta herramienta para situaciones que requieran una consideración seria, asesoramiento profesional o que tengan implicaciones financieras/personales significativas.",
        "how_to_use_title": "Cómo usar",
        "how_to_use_step1": "<strong>Tu pregunta, nuestra respuesta:</strong> Formula claramente tu pregunta de 'Sí' o 'No' en tu mente o en voz alta. Esto establece la intención de tu lanzamiento.",
        "how_to_use_step2": "<strong>El lanzamiento:</strong> Toca el botón 'Lanzar moneda'. Observa cómo gira la moneda digital, imitando un lanzamiento del mundo real, agregando un elemento visual dinámico a tu toma de decisiones.",
        "how_to_use_step3": "<strong>La revelación:</strong> La moneda caerá en 'Sí' o 'No', brindando una respuesta inmediata e imparcial a tu consulta. ¡Presta atención a las satisfactorias señales visuales y auditivas!",
        "use_cases_title": "Aplicaciones prácticas",
        "use_case_menu_decision": "<strong>Ruleta de restaurantes:</strong> ¿No puedes decidir dónde comer? Deja que CoinFlip elija tu próxima aventura culinaria (por ejemplo, '¿Deberíamos pedir pizza?' 'Sí' o 'No').",
        "use_case_team_consensus": "<strong>Selección justa de equipos:</strong> Usa CoinFlip para asignar roles de manera justa, elegir equipos para un juego o decidir quién va primero en cualquier actividad. Garantiza la imparcialidad en todo momento.",
        "use_case_order_setting": "<strong>Turno:</strong> Determina a quién le toca hacer las tareas, jugar o presentar. Un lanzamiento rápido resuelve disputas y mantiene las cosas en movimiento sin problemas.",
        "use_case_fair_random_choice": "<strong>Desempate imparcial:</strong> Para cualquier situación que requiera una elección aleatoria verdaderamente imparcial, CoinFlip interviene como tu árbitro digital. Desde pequeños dilemas hasta decisiones importantes, obtén una respuesta clara.",
        "data_log_title": "Manejo de datos y registros",
        "data_log_p1": "CoinFlip respeta tu privacidad. Todos los datos de la sesión, incluido tu historial de lanzamientos y estadísticas, se almacenan exclusivamente en tu dispositivo dentro del almacenamiento local de tu navegador. Esto significa que tus datos nunca salen de tu dispositivo y no son recopilados, almacenados ni compartidos por nosotros ni por terceros.",
        "data_log_p2": "Tienes control total sobre tus datos. Puedes borrar todo tu registro de lanzamientos y estadísticas de sesión en cualquier momento utilizando las opciones 'Borrar registro' o 'Restablecer sesión' dentro de la aplicación. Cerrar tu navegador o borrar la caché de tu navegador también puede eliminar estos datos.",
        "tech_benefits_title": "Tecnología y ventajas para el usuario",
        "tech_benefits_p1": "CoinFlip aprovecha la potente <strong>API de Web Crypto</strong>, un estándar web de última generación para operaciones criptográficas. Esto garantiza que cada resultado de lanzamiento de moneda se genere utilizando un proceso verdaderamente aleatorio, impredecible y seguro. A diferencia de los generadores de números aleatorios más simples, nuestro método garantiza un resultado imparcial, brindándote una verdadera equidad en cada decisión.",
        "tech_benefits_p2": "El beneficio para ti es la confianza absoluta en la imparcialidad de cada lanzamiento. Ya sea una elección casual o un momento decisivo, puedes confiar en que el resultado de CoinFlip es puramente por casualidad, libre de patrones o previsibilidad discernibles, al igual que un lanzamiento de moneda del mundo real con integridad digital mejorada.",
        "guide_title": "Explicación detallada",
        "guide_p2": "<strong>Aleatoriedad criptográficamente segura:</strong> En su esencia, CoinFlip se basa en la robusta <strong>API de Web Crypto</strong>, un estándar web moderno. Esta API genera números aleatorios criptográficamente seguros, mucho más allá de los algoritmos pseudoaleatorios simples. Esto significa que cada lanzamiento es verdaderamente impredecible e inmune a la manipulación, garantizando una equidad e integridad absolutas incluso para tus decisiones más cruciales. Confía en la verdadera aleatoriedad de cada 'Sí' o 'No'.",
        "faq_title": "Preguntas frecuentes (FAQ)",
        "faq_q1": "¿Este lanzamiento de moneda es realmente aleatorio?",
        "faq_a1": "Sí, ¡absolutamente! CoinFlip utiliza la <strong>API de Web Crypto</strong>, una sólida función del navegador diseñada para una aleatoriedad criptográfica segura. Esto garantiza que cada lanzamiento sea verdaderamente impredecible e imparcial, reflejando la verdadera aleatoriedad de un lanzamiento de moneda física.",
        "faq_q2": "¿Esta aplicación funciona sin conexión?",
        "faq_a2": "Actualmente, CoinFlip requiere una conexión a Internet para cargarse inicialmente debido a las dependencias de scripts externos (como Tailwind CSS y Material Icons). Si bien nuestro objetivo es una futura capacidad sin conexión, la funcionalidad en tiempo real requiere acceso en línea.",
        "faq_q3": "¿Se almacenan o comparten mis datos?",
        "faq_a3": "No. Tu historial de lanzamientos y estadísticas de sesión se almacenan localmente en el almacenamiento del navegador de tu dispositivo (localStorage). Estos datos nunca se transmiten a nuestros servidores o se comparten con terceros. Tienes control total para borrarlos en cualquier momento.",
        "faq_q4": "¿Puedo usar esta herramienta para decisiones serias?",
        "faq_a4": "CoinFlip está diseñado para el entretenimiento y para ayudar con decisiones menores y cotidianas. Si bien proporciona resultados verdaderamente aleatorios, no recomendamos usarlo para decisiones críticas de la vida, asuntos financieros o situaciones que requieran asesoramiento profesional. Siempre ejerce un buen juicio.",
        "faq_q5": "¿Por qué los resultados a veces parecen estar en racha (por ejemplo, muchos 'Sí' seguidos)?",
        "faq_a5": "¡Este es un fenómeno psicológico común! Incluso las secuencias verdaderamente aleatorias pueden tener 'rachas' de resultados idénticos. Cada lanzamiento de moneda es un evento independiente con un 50/50 de posibilidades, por lo que una serie de resultados de 'Sí' es estadísticamente tan probable como un patrón alterno. ¡Es simplemente la naturaleza de la aleatoriedad!",
        "privacy_policy": "Política de privacidad",
        "terms_of_service": "Términos de servicio",
        "contact_us": "Contáctanos",
        "footer_disclaimer": "Esta herramienta es solo para fines de entretenimiento y asistencia en la toma de decisiones. No somos responsables de los resultados o decisiones tomadas con esta aplicación.",
        "footer_copyright": "&copy; 2024 CoinFlip. Todos los derechos reservados.",
        "heads_coin_face": "Sí", // Corrected Spanish for "Yes"
        "tails_coin_face": "No", // Corrected Spanish for "No"
        "view_history_menu": "Ver historial",
        "history_modal_title": "Historial de lanzamientos",
        "no_history_yet": "No hay historial disponible.",
        "clear_all_history_btn": "Borrar todo el historial",
        "confirm_clear_history": "¿Estás seguro de que quieres borrar todo el historial?",
        "language_selection_hint": "La selección de idioma se puede hacer desde el menú.",
        "at_label": "a las", // Translated "at" for Spanish
        "privacy_policy_title_modal": "Política de privacidad",
        "privacy_policy_content_modal": "Este es un marcador de posición para el contenido de la Política de privacidad. Reemplace esto con su política de privacidad real. La aplicación CoinFlip se compromete a proteger su privacidad. Esta aplicación no recopila, almacena ni comparte ninguna información de identificación personal. Todos los registros de lanzamientos y estadísticas de sesión se almacenan únicamente en el almacenamiento local del navegador de su dispositivo. Sus datos nunca salen de su dispositivo y no son recopilados, almacenados ni compartidos por nosotros ni por terceros. Usted tiene control total sobre sus datos y puede eliminarlos en cualquier momento utilizando las opciones 'Borrar registro' o 'Restablecer sesión' dentro de la aplicación. Cerrar su navegador o borrar la caché de su navegador también puede eliminar estos datos. Esta Política de privacidad puede actualizarse para reflejar cambios en la aplicación o requisitos legales. Los cambios importantes se anunciarán dentro de la aplicación.",
        "terms_of_service_title_modal": "Términos de servicio",
        "terms_of_service_content_modal": "Este es un marcador de posición para el contenido de los Términos de servicio. Reemplace esto con sus términos de servicio reales. Gracias por usar la aplicación CoinFlip. Esta aplicación se proporciona para entretenimiento y asistencia sencilla en la toma de decisiones. Si bien la aplicación utiliza la 'API de Web Crypto' para proporcionar resultados aleatorios criptográficamente seguros, no somos responsables de las decisiones o resultados basados en los resultados de la aplicación. No use esta aplicación para decisiones importantes o asuntos serios. Todo el contenido y las características de esta aplicación están protegidos por las leyes de derechos de autor y las regulaciones relacionadas. La reproducción, distribución o uso comercial no autorizados de esta aplicación están prohibidos. Estos términos pueden modificarse sin previo aviso, y los términos revisados entrarán en vigro a través de anuncios dentro de la aplicación. Los usuarios son responsables de revisar los términos regularmente.",
        "contact_us_title_modal": "Contáctanos",
        "contact_us_content_modal": "Este es un marcador de posición para el contenido de Contáctanos. Reemplace esto con su información de contacto real. Si tiene alguna pregunta, sugerencia o problema con la aplicación CoinFlip, no dude en contactarnos. Actualmente, no operamos un canal de contacto separado. Agradecemos sus comentarios a través de las reseñas de la tienda de aplicaciones o enviando un correo electrónico directamente al desarrollador. Correo electrónico del desarrollador: developer@example.com (Este es un correo electrónico de ejemplo. Cámbielo por un correo electrónico real.) Sus valiosos comentarios nos ayudan a mejorar la aplicación."
    },
    "zh": { // Chinese
        "app_title": "CoinFlip - 材料设计",
        "app_name": "CoinFlip",
        "menu_sidebar_title": "菜单",
        "home_menu": "主页",
        "settings_menu": "设置",
        "help_menu": "帮助",
        "language_select_label": "语言",
        "korean_lang": "韩语",
        "english_lang": "英语",
        "japanese_lang": "日语",
        "german_lang": "德语",
        "spanish_lang": "西班牙语",
        "chinese_lang": "中文",
        "main_title": "自信地做出决定",
        "main_description": "一个公平简单的硬币翻转，帮助您快速做出所有决定。",
        "about_title": "关于 CoinFlip",
        "about_p1": "生活充满了选择，从微不足道的到改变人生的。CoinFlip是一款设计精美的数字工具，旨在帮助您自信地做出选择，并带有一丝乐趣。它不仅仅是一个应用程序；它是您个人的决策伙伴，随时准备在您需要时提供清晰、公正的答案。",
        "about_p2": "我们重新构想了现代的经典掷硬币。我们提供明确的“是”或“否”，而不是“正面”或“反面”。这种简单而强大的改变消除了歧义，并有助于为您的提问设定框架，以获得更清晰的结果。您应该接受那份新工作吗？轮到您洗碗了吗？提出您的问题，翻转硬币，然后收到直接的答案，使您能够向前迈进。",
        "about_p3": "CoinFlip的核心是对绝对公平的承诺。我们不使用简单、可预测的计算机生成数字。相反，每次翻转都由<strong>Web Crypto API</strong>提供支持，这是一种用于加密操作的高度安全的Web标准。这确保了每个“是”或“否”的结果都是真正随机且统计上不可预测的，为您的最重要决策提供了信任基础。",
        "about_p4": "CoinFlip充满了增强您体验的功能：",
        "about_li1": "<strong>会话统计：</strong> 超越一次翻转。我们的实时统计跟踪您会话的总翻转次数、“是”和“否”的计数以及比率细分，提供对您的决策模式的有趣观察。",
        "about_li2": "<strong>详细翻转日志：：</strong> 每个决定都记录在带有时间戳的日志中。这非常适合让朋友对赌注负责，或回顾您一天中做出的选择。",
        "about_li4": "<strong>直观的界面：</strong> 我们相信强大的工具也应该易于使用。我们简洁、简约的设计，结合流畅的动画，确保了既简单又优雅的体验。",
        "about_li5": "<strong>多语言支持：</strong> CoinFlip专为全球受众设计，并提供多种语言版本，无论您身在何处，都能感受到它是本地工具。",
        "about_p5": "无论您是解决友好的辩论，将家务游戏化，还是只是寻找随机指导的时刻，CoinFlip都旨在可靠、透明，并随时可用。它简化了决策过程。",
        "flip_now": "翻转硬币",
        "stats_title": "会话统计",
        "total_flips_label": "总翻转",
        "heads_label": "是", // Corrected Chinese for "Yes"
        "tails_label": "否", // Corrected Chinese for "No"
        "heads_ratio_label": "是",
        "tails_ratio_label": "否",
        "reset_session": "重置会话",
        "log_title": "翻转日志",
        "clear_log_btn": "清除日志",
        "no_flips_yet": "还没有翻转。",
        "service_purpose_title": "服务宗旨和责任范围",
        "service_purpose_p1": "CoinFlip旨在作为一种简单、引人入胜的工具，帮助做出 minor 决策或为日常场景增加偶然性元素。它使用先进的加密随机性来确保公平性，但旨在用于娱乐和轻松的决策，而不是用于关键或高风险的选择。",
        "service_purpose_p2": "用户对基于CoinFlip结果做出的决策负全部责任。我们鼓励有意识地使用，并建议不要将此工具用于需要认真考虑、专业建议或具有重大财务/个人影响的情况。",
        "how_to_use_title": "如何使用",
        "how_to_use_step1": "<strong>您的问题，我们的答案：</strong> 在您脑海中或大声地清晰地 формулируют 您的“是”或“否”问题。这设定了您翻转的意图。",
        "how_to_use_step2": "<strong>翻转：：</strong> 点击“翻转硬币”按钮。观察数字硬币旋转，模仿真实世界的抛掷，为您的决策过程添加动态视觉元素。",
        "how_to_use_step3": "<strong>揭示：：</strong> 硬币将落在“是”或“否”上，为您的查询提供即时、公正的答案。请注意令人满意的视觉和听觉提示！",
        "use_cases_title": "实际应用",
        "use_case_menu_decision": "<strong>餐厅轮盘：</strong> 无法决定在哪里吃饭？让CoinFlip选择您的下一个美食冒险（例如，“我们应该吃披萨吗？”“是”或“否”）。",
        "use_case_team_consensus": "<strong>公平的团队选择：</strong> 使用CoinFlip公平分配角色，选择游戏团队或决定谁在任何活动中首先进行。始终确保公正。",
        "use_case_order_setting": "<strong>轮流者：</strong> 确定谁轮流做家务、玩游戏或进行演示。快速翻转可解决争议并使事情顺利进行。",
        "use_case_fair_random_choice": "<strong>公正的决胜者：</strong> 对于任何需要真正公正、随机选择的情况，CoinFlip都会作为您的数字仲裁者。从小的困境到重要的选择，都能获得清晰的答案。",
        "data_log_title": "数据和日志处理",
        "data_log_p1": "CoinFlip尊重您的隐私。所有会话数据，包括您的翻转历史记录和统计信息，都独家存储在您设备浏览器本地存储中。这意味着您的数据永远不会离开您的设备，也不会被我们或任何第三方收集、存储或共享。",
        "data_log_p2": "您对数据拥有完全控制权。您可以随时使用应用程序中的“清除日志”或“重置会话”选项清除所有翻转日志和会话统计信息。关闭浏览器或清除浏览器缓存也可能删除这些数据。",
        "tech_benefits_title": "技术和用户优势",
        "tech_benefits_p1": "CoinFlip利用强大的<strong>Web Crypto API</strong>，这是一个用于加密操作的尖端Web标准。这确保了每个硬币翻转结果都是使用真正随机、不可预测和安全的过程生成的。与更简单的随机数生成器不同，我们的方法保证了公正的结果，为您在每个决策中提供真正的公平性。",
        "tech_benefits_p2": "对您来说的好处是，对每次翻转的公正性有绝对的信心。无论是随意选择还是决定性时刻，您都可以相信CoinFlip的结果纯粹是偶然的，没有可识别的模式或可预测性，就像具有增强数字完整性的真实掷硬币一样。",
        "guide_title": "详细说明",
        "guide_p2": "<strong>密码学安全随机性：</strong> CoinFlip的核心是基于强大的<strong>Web Crypto API</strong>构建的，这是一个现代Web标准。此API生成密码学安全随机数，远远超出简单的伪随机算法。这意味着每次翻转都是真正不可预测且不受操纵的，即使对于您最关键的决策，也能保证绝对的公平性和完整性。相信每个“是”或“否”的真장점随机性。",
        "faq_title": "常见问题 (FAQ)",
        "faq_q1": "这个硬币翻转真的是随机的吗？",
        "faq_a1": "是的，绝对是！CoinFlip使用<strong>Web Crypto API</strong>，这是一个强大的浏览器功能，专为安全的加密随机性而设计。这确保了每次翻转都是真正不可预测且公正的，反映了物理掷硬币的真实随机性。",
        "faq_q2": "这个应用程序可以离线工作吗？",
        "faq_a2": "目前，由于外部脚本依赖（如Tailwind CSS和Material Icons），CoinFlip最初加载需要互联网连接。虽然我们致力于未来的离线功能，但实时功能需要在线访问。",
        "faq_q3": "我的数据会被存储或共享吗？",
        "faq_a3": "不会。您的翻转历史记录和会话统计信息都本地存储在您设备的浏览器存储（localStorage）中。这些数据绝不会传输到我们的服务器或与任何第三方共享。您可以随时完全控制清除它们。",
        "faq_q4": "我可以用这个工具做严肃的决定吗？",
        "faq_a4": "CoinFlip旨在用于娱乐和协助日常小决策。虽然它提供真正随机的结果，但我们不建议将其用于关键的人生决策、财务事务或需要专业建议的情况。请始终做出明智的判断。",
        "faq_q5": "为什么结果有时会感觉连续出现（例如，连续多次“是”）？",
        "faq_a5": "这是一个常见的心理现象！即使是真正随机的序列也可能出现相同的“连续”结果。每次掷硬币都是一个独立的事件，有50/50的机会，因此一系列“是”的结果在统计上与交替模式一样可能。这只是随机性的本质！",
        "privacy_policy": "隐私政策",
        "terms_of_service": "服务条款",
        "contact_us": "联系我们",
        "footer_disclaimer": "此工具仅用于娱乐和决策辅助。我们不对使用此应用程序做出的任何结果或决定负责。",
        "footer_copyright": "&copy; 2024 CoinFlip. 版权所有。",
        "heads_coin_face": "是", // Corrected Chinese for "Yes"
        "tails_coin_face": "否", // Corrected Chinese for "No"
        "view_history_menu": "查看历史记录",
        "history_modal_title": "翻转历史记录",
        "no_history_yet": "没有历史记录。",
        "clear_all_history_btn": "清除所有历史记录",
        "confirm_clear_history": "您确定要清除所有历史记录吗？",
        "language_selection_hint": "可以在菜单中选择语言。",
        "at_label": "在", // Translated "at" for Chinese
        "privacy_policy_title_modal": "隐私政策",
        "privacy_policy_content_modal": "这是隐私政策内容的占位符。请用您的实际隐私政策替换此内容。CoinFlip应用程序致力于保护您的隐私。此应用程序不收集、存储或共享任何个人身份信息。所有翻转记录和会话统计信息仅存储在您设备的浏览器本地存储中。您的数据永远不会离开您的设备，并且不会由我们或任何第三方收集、存储或共享。您对您的数据拥有完全控制权，可以随时使用应用程序中的“清除日志”或“重置会话”选项删除数据。关闭浏览器或清除浏览器缓存也可能删除此数据。本隐私政策可能会更新以反映应用程序更改或法律要求。重要更改将在应用程序内公布。",
        "terms_of_service_title_modal": "服务条款",
        "terms_of_service_content_modal": "这是服务条款内容的占位符。请用您的实际服务条款替换此内容。感谢您使用CoinFlip应用程序。此应用程序旨在提供娱乐和简单的决策辅助。尽管此应用程序使用“Web Crypto API”提供加密安全的随机结果，但我们对基于应用程序结果的任何决定或结果概不负责。请勿将此应用程序用于重要决策或严肃事项。此应用程序的所有内容和功能均受版权法和相关法规的保护。禁止未经授权复制、分发或商业使用此应用程序。这些条款可能会在不另行通知的情况下更改，修订后的条款将通过应用程序内的公告生效。用户有责任定期审查条款。",
        "contact_us_title_modal": "联系我们",
        "contact_us_content_modal": "这是联系我们内容的占位符。请用您的实际联系信息替换此内容。如果您对CoinFlip应用程序有任何疑问、建议或问题，请随时与我们联系。目前，我们不运营单独的联系渠道。我们感谢您通过应用商店评论提供反馈或直接向开发者发送电子邮件。开发者电子邮件：developer@example.com (这是一个示例电子邮件。请更改为实际电子邮件。) 您的宝贵反馈有助于我们改进应用程序。"
    }
};

// Current language (default to English if not set)
let currentLang = localStorage.getItem('lang') || 'en';

// Functions
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    translatePage();
    updateLanguageButtons();
}

function translatePage() {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            // Special handling for HTML content like bold tags or line breaks
            // Also include the new modal content keys for innerHTML
            if (key.includes('p') || key.includes('li') || key.includes('description') || key.includes('guide_p') || key.includes('use_case_') || key === 'footer_copyright' || key.includes('faq_a') || key.includes('service_purpose') || key.includes('tech_benefits') || key.includes('data_log') || key.includes('language_selection_hint') || key.includes('_content_modal')) {
                element.innerHTML = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        if (button.dataset.lang === currentLang) {
            button.classList.remove('bg-background', 'text-onBackground', 'border', 'border-gray-300');
            button.classList.add('bg-primary', 'text-onPrimary', 'shadow-md-light');
        } else {
            button.classList.remove('bg-primary', 'text-onPrimary', 'shadow-md-light');
            button.classList.add('bg-background', 'text-onBackground', 'border', 'border-gray-300');
        }
    });
}

// Coin flip logic
let totalFlips = parseInt(localStorage.getItem('totalFlips')) || 0;
let headsCount = parseInt(localStorage.getItem('headsCount')) || 0;
let tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0;
let logEntries = JSON.parse(localStorage.getItem('logEntries')) || [];

const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');
const headsRatioBar = document.getElementById('heads-ratio-bar');
const headsRatioPercent = document.getElementById('heads-ratio-percent');
const tailsRatioBar = document.getElementById('tails-ratio-bar');
const tailsRatioPercent = document.getElementById('tails-ratio-percent');
const resetButton = document.getElementById('reset-button');
const logContainer = document.getElementById('log-container');
const clearLogButton = document.getElementById('clear-log-button');

// History Modal elements
const viewHistoryButton = document.getElementById('view-history-button');
const historyModalContainer = document.getElementById('history-modal-container');
const closeHistoryModalButton = document.getElementById('close-history-modal');
const historyList = document.getElementById('history-list');
const clearAllHistoryButton = document.getElementById('clear-all-history');

// New declarations for the missing elements
const noFlipsYetMessage = document.getElementById('no-flips-yet-message');
const noHistoryYetMessage = document.getElementById('no-history-yet-message');

// Generic Content Modal elements
const genericContentModalContainer = document.getElementById('generic-content-modal-container');
const genericContentModalTitle = document.getElementById('generic-content-modal-title');
const genericContentModalBody = document.getElementById('generic-content-modal-body');
const closeGenericContentModalButton = document.getElementById('close-generic-content-modal');

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;

    const headsRatio = totalFlips === 0 ? 0 : (headsCount / totalFlips) * 100;
    const tailsRatio = totalFlips === 0 ? 0 : (tailsCount / totalFlips) * 100;

    headsRatioBar.style.width = `${headsRatio}%`;
    headsRatioPercent.textContent = `${headsRatio.toFixed(0)}%`;
    tailsRatioBar.style.width = `${tailsRatio}%`;
    tailsRatioPercent.textContent = `${tailsRatio.toFixed(0)}%`;

    renderLog();
    renderHistory();

    if (noFlipsYetMessage) {
        if (totalFlips > 0) {
            noFlipsYetMessage.classList.add('hidden');
        } else {
            noFlipsYetMessage.classList.remove('hidden');
        }
    }

    if (noHistoryYetMessage) {
        if (logEntries.length > 0) {
            noHistoryYetMessage.classList.add('hidden');
        } else {
            noHistoryYetMessage.classList.remove('hidden');
        }
    }
}

function flipCoin() {
    // Disable button during flip
    flipButton.disabled = true;
    flipButton.classList.add('opacity-50', 'cursor-not-allowed');

    // Reset coin animation classes
    coin.classList.remove('heads-result', 'tails-result');
    void coin.offsetWidth; // Trigger reflow to restart animation
    coin.classList.add('is-flipping');

    const randomBytes = new Uint8Array(1);
    window.crypto.getRandomValues(randomBytes);
    const result = randomBytes[0] % 2; // 0 for heads, 1 for tails

    const outcome = result === 0 ? 'Heads' : 'Tails'; // Outcome determined here

    setTimeout(() => {
        coin.classList.remove('is-flipping');
        requestAnimationFrame(() => { // Introduce a microtask delay for smoother transition
            if (outcome === 'Heads') { // Using the 'outcome' variable
                coin.classList.add('heads-result');
                headsCount++;
            } else {
                coin.classList.add('tails-result');
                tailsCount++;
            }
            totalFlips++;
            addLogEntry(outcome); // 'outcome' passed to log
            saveState();
            updateDisplay();
            showConfetti(outcome); // Show confetti after flip animation
            flipButton.disabled = false;
            flipButton.classList.remove('opacity-50', 'cursor-not-allowed');
        });
    }, 1000); // Duration of the flip animation in CSS
}

function addLogEntry(outcome) {
    const now = new Date();
    const timeString = now.toLocaleString(currentLang, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
    // Keep logEntries to a reasonable length, e.g., last 20 flips
    if (logEntries.length >= 20) {
        logEntries.pop(); // Remove the oldest entry
    }
    logEntries.unshift({ timestamp: timeString, outcome: outcome }); // Add new entry to the beginning
}

function renderLog() {
    logContainer.innerHTML = ''; // Clear current log
    if (logEntries.length === 0) {
        if (noFlipsYetMessage) {
            noFlipsYetMessage.classList.remove('hidden');
        }
    } else {
        if (noFlipsYetMessage) {
            noFlipsYetMessage.classList.add('hidden');
        }
        logEntries.forEach(entry => {
            const logItem = document.createElement('div');
            logItem.classList.add('flex', 'items-center', 'space-x-2', 'p-2', 'bg-background', 'rounded-md', 'shadow-sm');

            const icon = document.createElement('span');
            icon.classList.add('material-icons', 'text-lg', entry.outcome === 'Heads' ? 'text-secondary' : 'text-primaryLight');
            icon.textContent = entry.outcome === 'Heads' ? 'savings' : 'pets';

            const text = document.createElement('span');
            text.classList.add('text-onBackground', 'text-sm', 'flex-1', 'flex', 'justify-between', 'items-baseline'); // Updated classes
            // Use translations for outcome display
            const translatedOutcome = entry.outcome === 'Heads' ? translations[currentLang].heads_coin_face : translations[currentLang].tails_coin_face;
            text.innerHTML = `<strong>${translatedOutcome}</strong> <span class="whitespace-nowrap">${translations[currentLang].at_label || 'at'} ${entry.timestamp}</span>`; // New span for date

            logItem.appendChild(icon);
            logItem.appendChild(text);
            logContainer.appendChild(logItem); // Append to show newest first due to unshift
        });
    }
}

function renderHistory() {
    historyList.innerHTML = ''; // Clear current history
    if (logEntries.length === 0) {
        noHistoryYetMessage.classList.remove('hidden');
    } else {
        noHistoryYetMessage.classList.add('hidden');
        logEntries.forEach((entry, index) => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('flex', 'items-center', 'space-x-2', 'p-2', 'bg-background', 'rounded-md', 'shadow-sm');

            const icon = document.createElement('span');
            icon.classList.add('material-icons', 'text-lg', entry.outcome === 'Heads' ? 'text-secondary' : 'text-primaryLight');
            icon.textContent = entry.outcome === 'Heads' ? 'savings' : 'pets';

            const text = document.createElement('span');
            text.classList.add('text-onBackground', 'text-sm', 'flex-1', 'flex', 'justify-between', 'items-baseline'); // Updated classes
            const translatedOutcome = entry.outcome === 'Heads' ? translations[currentLang].heads_coin_face : translations[currentLang].tails_coin_face;
            text.innerHTML = `<strong>${translatedOutcome}</strong> <span class="whitespace-nowrap">${translations[currentLang].at_label || 'at'} ${entry.timestamp}</span>`; // New span for date

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('p-1', 'rounded-full', 'hover:bg-red-100', 'text-red-500');
            deleteButton.innerHTML = `<span class="material-icons text-sm">delete</span>`;
            deleteButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent modal close when deleting item
                deleteHistoryEntry(index);
            });

            historyItem.appendChild(icon);
            historyItem.appendChild(text);
            historyItem.appendChild(deleteButton);
            historyList.appendChild(historyItem); // Append to show newest first due to unshift
        });
    }
}

function deleteHistoryEntry(index) {
    logEntries.splice(index, 1); // Remove the entry at the specific index
    saveState();
    updateDisplay();
    // If modal is open, re-render history
    if (!historyModalContainer.classList.contains('hidden')) {
        renderHistory();
    }
}


function resetSession() {
    // Removed the confirm alert
    totalFlips = 0;
    headsCount = 0;
    tailsCount = 0;
    logEntries = [];
    saveState();
    updateDisplay();
}

function clearLog() {
    logEntries = [];
    saveState();
    updateDisplay();
}

function clearAllHistory() {
    if (confirm(translations[currentLang].confirm_clear_history || 'Are you sure you want to clear all history?')) {
        logEntries = [];
        saveState();
        updateDisplay();
        closeHistoryModal();
    }
}

function saveState() {
    localStorage.setItem('totalFlips', totalFlips);
    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);
    localStorage.setItem('logEntries', JSON.stringify(logEntries));
}

function showConfetti(outcome) {
    if (outcome === 'Heads' || outcome === 'Tails') { // Trigger confetti for any valid outcome
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            colors: ['#BB86FC', '#03DAC6', '#6200EE', '#FFFFFF'],
            shapes: ['star', 'circle'],
            scalar: 0.8
        };

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 30,
                scalar: 1.2,
                shapes: ['star']
            });

            confetti({
                ...defaults,
                particleCount: 20,
                scalar: 0.75,
                shapes: ['circle']
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 100);
        setTimeout(shoot, 200);
    }
}

// History Modal Functions
function openHistoryModal() {
    historyModalContainer.classList.remove('hidden');
    renderHistory();
}

function closeHistoryModal() {
    historyModalContainer.classList.add('hidden');
}

// Generic Content Modal Functions
function openGenericModal(titleKey, contentKey) {
    if (translations[currentLang] && translations[currentLang][titleKey]) {
        genericContentModalTitle.textContent = translations[currentLang][titleKey];
    } else {
        genericContentModalTitle.textContent = titleKey; // Fallback
    }

    if (translations[currentLang] && translations[currentLang][contentKey]) {
        genericContentModalBody.innerHTML = translations[currentLang][contentKey];
    } else {
        genericContentModalBody.innerHTML = `No content available for ${contentKey}`; // Fallback
    }
    genericContentModalContainer.classList.remove('hidden');
}

function closeGenericModal() {
    genericContentModalContainer.classList.add('hidden');
    genericContentModalTitle.textContent = '';
    genericContentModalBody.innerHTML = '';
}


// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initial setup for default language
    setLanguage(currentLang);

    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    if (menuToggle && closeMenu && sidebarMenu && sidebarOverlay) {
        function toggleSidebar() {
            sidebarMenu.classList.toggle('translate-x-full');
            sidebarOverlay.classList.toggle('hidden');
        }

        menuToggle.addEventListener('click', toggleSidebar);
        closeMenu.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
    }

    // Language selection event listeners
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    const aboutToggle = document.getElementById('about-toggle');
    const aboutContent = document.getElementById('about-content');
    const aboutIcon = document.getElementById('about-icon');

    if (aboutToggle && aboutContent && aboutIcon) {
        aboutToggle.addEventListener('click', () => {
            const isHidden = aboutContent.classList.contains('max-h-0');

            if (isHidden) {
                aboutContent.classList.remove('max-h-0', 'opacity-0');
                aboutContent.classList.add('max-h-unlimited', 'opacity-100'); // Use max-h-screen for smooth transition
                aboutIcon.style.transform = 'rotate(180deg)';
            } else {
                aboutContent.classList.remove('max-h-unlimited', 'opacity-100');
                aboutContent.classList.add('max-h-0', 'opacity-0');
                aboutIcon.style.transform = 'rotate(0deg)';
            }
        });
    }

    // Initialize display and retrieve state on load
    updateDisplay();

    // Event Listeners
    if (flipButton) flipButton.addEventListener('click', flipCoin);
    if (resetButton) resetButton.addEventListener('click', resetSession);
    if (clearLogButton) clearLogButton.addEventListener('click', clearLog);


    // History Modal Event Listeners
    if (viewHistoryButton) viewHistoryButton.addEventListener('click', openHistoryModal);
    if (closeHistoryModalButton) closeHistoryModalButton.addEventListener('click', closeHistoryModal);
    if (historyModalContainer) historyModalContainer.addEventListener('click', (e) => {
        if (e.target === historyModalContainer) { // Close if clicked outside modal content
            closeHistoryModal();
        }
    });
    if (clearAllHistoryButton) clearAllHistoryButton.addEventListener('click', clearAllHistory);

    // Footer Legal Links Modal
    const privacyPolicyLink = document.querySelector('[data-key="privacy_policy"]');
    const termsOfServiceLink = document.querySelector('[data-key="terms_of_service"]');
    const contactUsLink = document.querySelector('[data-key="contact_us"]');

    if (privacyPolicyLink) {
        privacyPolicyLink.addEventListener('click', (e) => {
            e.preventDefault();
            openGenericModal('privacy_policy_title_modal', 'privacy_policy_content_modal');
        });
    }
    if (termsOfServiceLink) {
        termsOfServiceLink.addEventListener('click', (e) => {
            e.preventDefault();
            openGenericModal('terms_of_service_title_modal', 'terms_of_service_content_modal');
        });
    }
    if (contactUsLink) {
        contactUsLink.addEventListener('click', (e) => {
            e.preventDefault();
            openGenericModal('contact_us_title_modal', 'contact_us_content_modal');
        });
    }

    if (closeGenericContentModalButton) {
        closeGenericContentModalButton.addEventListener('click', closeGenericModal);
    }
    if (genericContentModalContainer) {
        genericContentModalContainer.addEventListener('click', (e) => {
            if (e.target === genericContentModalContainer) {
                closeGenericModal();
            }
        });
    }


    // Scroll and Back-to-Top functionality
    const backToTopButton = document.getElementById('back-to-top');
    const scrollProgress = document.getElementById('scroll-progress');

    const updateScrollProgress = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        // Show/hide back-to-top button
        if (scrollTop > 200) {
            backToTopButton.classList.remove('invisible', 'opacity-0');
            backToTopButton.classList.add('visible', 'opacity-100');
        } else {
            backToTopButton.classList.remove('visible', 'opacity-100');
            backToTopButton.classList.add('invisible', 'opacity-0');
        }
    };

    window.addEventListener('scroll', updateScrollProgress);
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    updateDisplay(); // Initial display update
});