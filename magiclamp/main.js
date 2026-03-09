// Translations data
const translations = {
    "en": {
        "app_title": "Magic Lamp - Decision Hub",
        "app_name": "Magic Lamp",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Mystical Magic Lamp",
        "main_description": "Rub the lamp to reveal your destiny.",
        "ask_lamp": "Rub the Lamp",
        "total_flips_label": "Total Asks",
        "heads_label": "Positive",
        "tails_label": "Negative",
        "log_title": "Answer Log",
        "clear_log_btn": "Clear Log",
        "view_history_menu": "View History",
        "footer_copyright": "© 2024 MagicLamp Decision Hub.",
    },
    "ko": {
        "app_title": "요술 램프 - Zeze Hub",
        "app_name": "Magic Lamp",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "신비로운 요술 램프",
        "main_description": "램프를 문지르면 당신의 운명이 나타납니다.",
        "ask_lamp": "램프 문지르기",
        "total_flips_label": "총 질문 횟수",
        "heads_label": "긍정",
        "tails_label": "부정",
        "log_title": "해답 기록",
        "clear_log_btn": "기록 지우기",
        "view_history_menu": "히스토리 보기",
        "footer_copyright": "© 2024 요술램프 Decision Hub.",
    }
};

const adviceDB = {
    food: [
        { type: "positive", answer: "무조건 고!", text: "맛있게 먹으면 0칼로리입니다.", funFact: "💡 과학적 사실: 뇌는 새로운 결정을 내릴 때 엄청난 에너지를 씁니다. 램프가 에너지를 아껴드렸으니 남은 에너지는 소화하는 데 쓰세요!" },
        { type: "positive", answer: "최고의 선택", text: "당신의 직감을 믿으세요. 최고의 맛집일 거예요!", funFact: "💡 램프의 통찰: 가끔은 첫 번째 떠오른 생각이 정답입니다. 고민할수록 배만 더 고파질 뿐이죠." },
        { type: "positive", answer: "당장 드세요", text: "배고픔은 기다려주지 않습니다. 지금 바로!", funFact: "💡 인체의 신비: 혈당이 떨어지면 짜증이 늘어납니다. 평화를 위해 지금 당장 탄수화물을 투여하세요." },
        { type: "positive", answer: "먹고 죽자!", text: "다이어트는 내일부터! 오늘 밤은 위장에 축제를 열어주세요.", funFact: "💡 심리학: 금지된 음식일수록 더 맛있게 느껴지는 '로미오와 줄리엣 효과'가 있습니다. 맘 편히 드세요!" },
        { type: "negative", answer: "오늘은 참으세요", text: "내일 더 맛있게 먹기 위해 양보하세요!", funFact: "💡 램프의 조언: 지금 참으면 내일 아침 거울 속 붓기 없는 내 얼굴을 보며 칭찬하게 될 것입니다." },
        { type: "negative", answer: "집밥 어때요?", text: "바깥 음식은 잠시 쉬고 건강을 생각하세요.", funFact: "💡 통계의 진실: 외식을 한 번 줄일 때마다 당신의 위장과 지갑은 동시에 평화를 얻습니다." },
        { type: "negative", answer: "냉장고 확인", text: "잠시만요, 냉장고에 남은 음식이 있을지도 몰라요.", funFact: "💡 환경 보호: 냉장고 파먹기는 지구를 구하는 가장 맛있고 쉬운 방법 중 하나입니다." },
        { type: "negative", answer: "물이나 드세요", text: "가짜 배고픔에 속지 마세요. 시원한 물 한 잔 마시고 주무세요.", funFact: "💡 생물학: 뇌는 종종 갈증을 배고픔으로 착각합니다. 당신은 지금 목마른 상태입니다." }
    ],
    love: [
        { type: "positive", answer: "완벽한 타이밍", text: "마음이 가는 대로 하세요. 사랑은 용기 있는 자의 것입니다.", funFact: "💡 연애 심리학: 사람들은 한 일보다 '하지 않은 일'을 2배 더 길게 후회한다고 합니다. 일단 질러보세요!" },
        { type: "positive", answer: "직진하세요", text: "망설일 필요 없습니다. 고백하세요!", funFact: "💡 램프의 예언: 오늘 당신의 매력 지수가 평소보다 150% 높게 측정되었습니다. 자신감을 가지세요." },
        { type: "positive", answer: "그린라이트", text: "상대방도 당신의 진심을 기다리고 있을지도 몰라요.", funFact: "💡 호감의 법칙: 당신이 누군가를 많이 생각할수록, 무의식적으로 그 사람에게 호감을 주는 행동을 하게 됩니다." },
        { type: "positive", answer: "우주가 돕는 중", text: "별들의 위치가 당신의 사랑을 응원하고 있습니다. 오늘이 그날입니다!", funFact: "💡 피그말리온 효과: 사랑이 이루어질 것이라 굳게 믿으면, 상대방을 대하는 태도가 긍정적으로 변해 실제로 이루어질 확률이 높아집니다." },
        { type: "negative", answer: "신중하세요", text: "조금 더 시간을 두고 지켜보는 것이 좋겠습니다.", funFact: "💡 램프의 경고: 핑크빛 렌즈가 너무 두꺼워진 상태입니다. 며칠 뒤에 안경을 벗고 맨눈으로 다시 상황을 보세요." },
        { type: "negative", answer: "나를 먼저 사랑할 때", text: "지금은 연애보다 나 자신에게 집중할 시기입니다.", funFact: "💡 자존감 수업: 스스로를 멋지다고 생각할 때 가장 매력적인 사람이 나타나는 법입니다. 오늘은 나에게 집중!" },
        { type: "negative", answer: "때를 기다리세요", text: "인연은 억지로 만들어지는 것이 아닙니다.", funFact: "💡 타이밍의 마법: 가장 좋은 인연은 내가 전혀 예상하지 못한 순간에 문을 두드리는 경우가 많습니다." },
        { type: "negative", answer: "철벽 방어", text: "지금 다가가면 튕겨져 나올 확률이 높습니다. 물러서세요.", funFact: "💡 밀당의 과학: 인간은 쉽게 얻을 수 있는 것보다 약간의 노력이 필요한 대상에게 더 큰 가치를 느낍니다." }
    ],
    money: [
        { type: "positive", answer: "나를 위한 선물", text: "가치 있는 투자입니다. 결제하세요!", funFact: "💡 경제학(?)의 원리: 돈은 쓰라고 있는 것입니다. 스트레스 해소 비용을 미리 낸다고 생각하세요." },
        { type: "positive", answer: "기회입니다", text: "기회는 왔을 때 잡는 법! 현명한 선택입니다.", funFact: "💡 쇼핑의 지혜: 3일 내내 머릿속에 떠올랐다면, 그건 사야만 완치되는 불치병입니다." },
        { type: "positive", answer: "후회보다 지름", text: "나중에 품절되어 후회하는 것보다 지금 사는 게 낫습니다.", funFact: "💡 램프의 격언: '살까 말까 할 때는 사라'는 옛 성현(쇼핑몰 VIP)들의 지혜를 따르십시오." },
        { type: "positive", answer: "돈쭐 내줍시다", text: "당신의 통장이 허락하는 한, 최고의 행복을 누리세요.", funFact: "💡 도파민 샤워: 카드 결제 알림 문자가 울릴 때 인간의 뇌는 엄청난 행복 호르몬을 분비합니다." },
        { type: "negative", answer: "지갑 닫으세요", text: "충동구매일 확률이 99%입니다.", funFact: "💡 뇌과학: 결제 버튼을 누르기 직전, 도파민이 가장 많이 분비됩니다. 당신은 물건이 아니라 그 쾌감을 원하는 걸지도 몰라요." },
        { type: "negative", answer: "정말 필요한가요?", text: "장바구니에 넣고 3일만 더 고민해 보세요.", funFact: "💡 3일의 법칙: 장바구니에 담아두고 72시간을 버티면 70% 이상의 구매 욕구가 사라진다고 합니다." },
        { type: "negative", answer: "잔고 위험", text: "통장 요정이 당신에게 강한 경고를 보내고 있습니다.", funFact: "💡 잔고의 진실: 다음 달의 당신이 과거의 당신을 멱살 잡고 싶어 할 수도 있습니다. 멈추세요!" },
        { type: "negative", answer: "파산의 징조", text: "이걸 사면 다음 달 내내 라면만 먹어야 할지도 모릅니다.", funFact: "💡 더닝-크루거 효과: 사람들은 종종 자신의 상환 능력을 과대평가하는 경향이 있습니다. 다시 계산해 보세요." }
    ],
    study: [
        { type: "positive", answer: "지금 시작하세요", text: "늦었다고 생각할 때가 진짜 늦...기 전에 빨리 하세요!", funFact: "💡 5분의 기적: 딱 5분만 책상에 앉아보세요. 관성의 법칙 때문에 계속 공부하게 될 확률이 높습니다." },
        { type: "positive", answer: "성공 예감", text: "노력은 배신하지 않습니다. 목표에 가까워졌어요.", funFact: "💡 뇌 가소성: 무언가를 배울 때마다 당신의 뇌 신경망은 실제로 물리적인 형태를 바꾸며 성장하고 있습니다." },
        { type: "positive", answer: "조금만 더!", text: "하나만 더 보고 쉬는 건 어떨까요? 할 수 있습니다!", funFact: "💡 피크엔드 법칙: 마지막 경험이 전체의 기억을 지배합니다. 지금 잘 마무리하면 오늘 공부가 뿌듯하게 기억될 거예요." },
        { type: "positive", answer: "천재 모드 온", text: "지금 당신의 뇌는 스펀지입니다! 무조건 흡수하세요.", funFact: "💡 몰입(Flow): 지금 시작하면 시간 가는 줄 모르는 '몰입' 상태에 빠질 확률이 아주 높습니다." },
        { type: "negative", answer: "15분 휴식", text: "잠깐의 휴식이 더 큰 효율을 가져옵니다.", funFact: "💡 뽀모도로 테크닉: 25분 집중 후 5분 휴식하는 것이 뇌의 과부하를 막고 기억력을 높이는 최고의 방법입니다." },
        { type: "negative", answer: "산책 권장", text: "머리가 너무 무거워요. 바람 좀 쐬고 오세요.", funFact: "💡 램프의 처방: 가벼운 걷기는 뇌에 산소를 공급하여 창의력과 문제 해결 능력을 60% 이상 높여줍니다." },
        { type: "negative", answer: "양보다 질", text: "지금은 억지로 붙잡고 있어도 안 들어옵니다. 내일 하세요.", funFact: "💡 수면의 중요성: 잠을 자는 동안 뇌는 오늘 배운 정보를 단기 기억에서 장기 기억으로 이동시킵니다. 주무세요!" },
        { type: "negative", answer: "뇌 파업 선언", text: "당신의 뇌가 더 이상의 정보 입력을 거부하고 있습니다. 무조건 쉬세요.", funFact: "💡 휴식의 미학: 아무것도 하지 않고 멍 때리는 시간이 사실은 뇌가 정보를 재조합하는 가장 바쁜 시간입니다." }
    ],
    life: [
        { type: "positive", answer: "새로운 도전", text: "새로운 변화를 시도해 보세요. 긍정적인 결과가 올 거예요.", funFact: "💡 심리적 유연성: 늘 가던 길을 벗어나는 아주 작은 시도만으로도 뇌는 젊어지고 스트레스 저항력이 커집니다." },
        { type: "positive", answer: "소확행", text: "작은 실천이 큰 행복을 가져다줍니다. 진행하세요.", funFact: "💡 행복의 비밀: 행복은 강도가 아니라 '빈도'입니다. 오늘 이 작은 결정이 당신의 하루를 행복하게 만들 거예요." },
        { type: "positive", answer: "자신감을 가지세요", text: "당신의 선택이 옳습니다. 밀고 나가세요.", funFact: "💡 플라시보 효과: 스스로 잘될 거라고 믿고 시작하면, 무의식적으로 결과가 좋아지는 방향으로 행동하게 됩니다." },
        { type: "positive", answer: "갓생 살아보자", text: "이불 밖은 위험하지만, 오늘은 나가서 갓생을 살아봅시다!", funFact: "💡 도파민 선순환: 작은 목표를 하나 달성하면 도파민이 분비되어 다음 목표를 달성할 힘을 줍니다." },
        { type: "negative", answer: "현상 유지", text: "때로는 익숙한 것에 머무르는 것도 지혜입니다.", funFact: "💡 램프의 철학: 모든 에너지를 변화에 쏟을 필요는 없습니다. 평온한 일상을 유지하는 것도 대단한 능력입니다." },
        { type: "negative", answer: "에너지 절약", text: "쉬어갈 때입니다. 무리한 일정은 취소하세요.", funFact: "💡 번아웃 경고: 아무것도 하지 않는 시간(Default Mode Network)은 뇌가 창의적인 아이디어를 정리하는 가장 중요한 시간입니다." },
        { type: "negative", answer: "내일의 나에게", text: "오늘 굳이 결정하지 않아도 됩니다. 미루세요.", funFact: "💡 전략적 미루기: 즉각적인 결정보다 하룻밤 자고 일어나서 내린 결정이 훨씬 더 이성적일 확률이 높습니다." },
        { type: "negative", answer: "이불 밖은 위험해", text: "안전이 최고입니다. 방바닥과 혼연일체가 되십시오.", funFact: "💡 홈캉스 효과: 때로는 철저한 고립이 외부의 스트레스로부터 몸과 마음을 보호하는 강력한 백신이 됩니다." }
    ],
    etc: [
        { type: "positive", answer: "우주의 기운", text: "온 우주가 당신을 돕고 있습니다. 진행하세요!", funFact: "💡 확률의 장난: 이 희박한 확률 속에서 램프가 '네'라고 답했습니다. 이것 자체가 행운의 징조 아닐까요?" },
        { type: "positive", answer: "일단 고", text: "고민할 시간에 한 발짝 더 나아가는 게 좋습니다.", funFact: "💡 램프의 직언: 10분 이상 고민해도 답이 안 나오는 문제는 사실 어느 쪽을 선택해도 비슷한 결과가 나오는 경우가 많습니다." },
        { type: "positive", answer: "확실한 네", text: "의심의 여지가 없습니다. 망설이지 마세요.", funFact: "💡 결정의 힘: 결정을 내리는 순간 불안의 70%가 사라집니다. 이제 실행만 남았습니다!" },
        { type: "positive", answer: "느낌이 좋아요", text: "램프에서 나오는 연기의 빛깔이 아주 좋습니다. 찬성합니다.", funFact: "💡 마법의 원리: 당신이 이 답변을 보고 미소를 지었다면, 그것이 바로 당신이 진짜로 원하던 답이었다는 증거입니다." },
        { type: "negative", answer: "절대 안 됨", text: "지금은 때가 아닙니다. 멈추고 생각하세요.", funFact: "💡 제동 장치: 자동차에 브레이크가 있는 이유는 빨리 달리기 위해서입니다. 지금은 브레이크를 밟아야 할 때!" },
        { type: "negative", answer: "플랜 B 찾기", text: "다른 길을 찾아보는 건 어떨까요? 더 좋은 대안이 있습니다.", funFact: "💡 터널 시야 현상: 한 가지 생각에 몰두하면 다른 좋은 대안들이 보이지 않습니다. 한 발짝 물러서서 크게 보세요." },
        { type: "negative", answer: "직감을 믿으세요", text: "어딘가 찜찜하다면 안 하는 게 맞습니다.", funFact: "💡 직감의 과학: 직감은 비이성적인 것이 아니라, 뇌가 과거의 모든 경험 데이터를 순식간에 처리해서 보내는 경고등입니다." },
        { type: "negative", answer: "요정 파업 중", text: "요정들도 워라밸이 중요합니다. 내일 다시 물어보세요.", funFact: "💡 램프의 변명: 사실 운명은 당신의 손에 있습니다. 저에게 책임을 떠넘기지 마세요!" }
    ]
};

let currentLang = localStorage.getItem('lang') || 'ko';
let selectedCategory = 'food';

// State
let totalFlips = parseInt(localStorage.getItem('totalFlips')) || 0;
let headsCount = parseInt(localStorage.getItem('headsCount')) || 0; 
let tailsCount = parseInt(localStorage.getItem('tailsCount')) || 0; 
let logEntries = JSON.parse(localStorage.getItem('logEntries')) || [];
let questionCache = JSON.parse(localStorage.getItem('questionCache')) || {};

// DOM Elements
const magicLampContainer = document.getElementById('magic-lamp-container');
const askButton = document.getElementById('ask-button');
const questionInput = document.getElementById('question-input');
const smokePuffs = document.querySelectorAll('.smoke-puff');
const answerReveal = document.getElementById('answer-reveal');
const answerText = document.getElementById('answer-text');
const answerAdvice = document.getElementById('answer-advice');
const answerFunfact = document.getElementById('answer-funfact');
const categoryButtons = document.querySelectorAll('.cat-btn');

const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');

const logContainer = document.getElementById('log-container');
const clearLogButton = document.getElementById('clear-log-button');

const sidebarMenu = document.getElementById('sidebar-menu');
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const sidebarOverlay = document.getElementById('sidebar-overlay');

// Similarity Algorithms
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
    return (maxLength - dist) / maxLength >= 0.75 || dist <= 2;
}

// 🛡️ 이상한 질문 필터링 로직
function validateQuestion(q, currentCat) {
    const text = q.trim();
    
    // 1. 너무 짧은 경우
    if (text.length < 2) return "질문이 너무 짧습니다. 좀 더 구체적으로 물어보세요.";
    
    // 2. 숫자만 이루어진 경우
    if (/^[0-9\s?]+$/.test(text)) return "램프는 수수께끼가 아닌 의미 있는 문장을 원합니다.";

    // 3. 자음/모음만 이루어진 경우 (ㅋㅋㅋ, ㅎㅎㅎ 등)
    if (/^[ㄱ-ㅎㅏ-ㅣ\s!@#$%^&*()_+?]+$/.test(text)) return "램프의 요정은 완성된 인간의 언어만 이해할 수 있습니다.";
    
    // 4. 무의미한 반복 (아아아아, 1111 등 4번 이상 연속 반복)
    if (/(.)\1{3,}/.test(text)) return "장난치지 마세요! 요정은 진지한 고민만 들어줍니다.";
    
    // 5. 금칙어
    const badWords = ['죽고', '자살', '씨발', '개새', '병신', '지랄', '존나', '미친'];
    for (let word of badWords) {
        if (text.includes(word)) return "램프는 긍정적이고 건전한 질문에만 답을 내어줍니다. 바른 말을 사용해 주세요.";
    }

    // 6. 🔍 카테고리 오용 감지 (키워드 매칭)
    const categoryKeywords = {
        food: ['먹을', '맛있', '배고파', '치킨', '피자', '음식', '메뉴', '디저트', '식사', '야식'],
        love: ['고백', '사랑', '썸', '연애', '남친', '여친', '남자친구', '여자친구', '데이트', '좋아해'],
        money: ['살까', '쇼핑', '투자', '주식', '코인', '지름', '결제', '비싸', '돈', '잔고', '사도'],
        study: ['공부', '시험', '성적', '학업', '숙제', '강의', '전공', '자격증', '취업'],
        life: ['운동', '산책', '청소', '일상', '습관', '여행', '약속', '빨래']
    };

    // 현재 선택한 카테고리가 아닌 다른 카테고리의 키워드가 강력하게 의심될 때
    for (const [cat, keywords] of Object.entries(categoryKeywords)) {
        if (cat !== currentCat) {
            for (const keyword of keywords) {
                if (text.includes(keyword)) {
                    const catNames = { food: '음식', love: '연애', money: '금전', study: '학업', life: '일상' };
                    return `이 고민은 '${catNames[cat]}' 카테고리에 더 잘 어울리는 것 같아요! 카테고리를 바꿔서 다시 물어봐 줄래요?`;
                }
            }
        }
    }

    return null; // 정상적인 질문
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
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;
    renderLog();
}

function renderLog() {
    logContainer.innerHTML = '';
    logEntries.forEach(entry => {
        const item = document.createElement('div');
        item.className = 'flex flex-col p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm';
        const colorClass = entry.type === 'positive' ? 'text-secondary' : 'text-pink-400';
        item.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="text-[10px] text-gray-500">${entry.timestamp}</span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-gray-400">${entry.category}</span>
            </div>
            <div class="text-sm font-medium text-gray-200 mb-1">"${entry.question}"</div>
            <div class="text-lg font-black ${colorClass}">${entry.answer}</div>
            <div class="text-[11px] text-gray-400 mt-1">${entry.advice}</div>
        `;
        logContainer.prepend(item); 
    });
}

function askLamp() {
    const question = questionInput.value.trim();
    if (!question) {
        questionInput.classList.add('animate-shake');
        alert(currentLang === 'ko' ? "램프에게 물어볼 고민을 입력해주세요!" : "Please enter your question for the lamp!");
        setTimeout(() => questionInput.classList.remove('animate-shake'), 400);
        return;
    }

    const validationError = validateQuestion(question, selectedCategory);

    // Reset UI
    askButton.disabled = true;
    answerReveal.classList.remove('answer-visible', 'pointer-events-auto');
    answerReveal.classList.add('opacity-0', 'scale-50');
    magicLampContainer.classList.remove('lamp-dimmed');
    
    // Reset Smoke
    smokePuffs.forEach(puff => {
        puff.classList.remove('active', 'hidden');
        void puff.offsetWidth; // trigger reflow
    });

    // 1. Lamp starts shaking intensely
    magicLampContainer.classList.add('lamp-shaking');
    
    setTimeout(() => {
        // 2. Smoke bursts out
        smokePuffs.forEach(puff => puff.classList.add('active'));
        
        let fateData;
        let isNewQuestion = true;
        let matchedKey = null;

        if (validationError) {
            fateData = {
                type: "error",
                answer: "응답 거부",
                text: validationError,
                funFact: "💡 램프의 규칙: 요정은 진지하고 명확한 질문에만 올바른 운명을 보여줍니다."
            };
            isNewQuestion = false; // 에러일 때는 캐시나 통계에 추가하지 않음
        } else {
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

            if (!isNewQuestion && matchedKey) {
                fateData = questionCache[matchedKey];
            } else {
                const pool = adviceDB[selectedCategory];
                const randomValues = new Uint8Array(1);
                window.crypto.getRandomValues(randomValues);
                fateData = pool[randomValues[0] % pool.length];
                
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
        }
        
        // Setup Result UI
        answerText.textContent = fateData.answer;
        answerText.style.fontSize = fateData.answer.length > 5 ? '2.5rem' : '3.75rem';
        
        // Change gradient based on result type
        if(fateData.type === 'positive') {
            answerText.className = "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primaryLight to-secondary tracking-tight mb-4 block break-keep drop-shadow-[0_0_15px_rgba(3,218,198,0.5)] py-4 leading-normal";
        } else if(fateData.type === 'negative') {
            answerText.className = "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 tracking-tight mb-4 block break-keep drop-shadow-[0_0_15px_rgba(244,114,182,0.5)] py-4 leading-normal";
        } else {
            answerText.className = "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 tracking-tight mb-4 block break-keep drop-shadow-[0_0_15px_rgba(156,163,175,0.5)] py-4 leading-normal";
        }

        answerAdvice.textContent = fateData.text;
        answerFunfact.textContent = fateData.funFact || "";
        
        setTimeout(() => {
            // 3. Lamp stops shaking, dims down, and answer appears cleanly on top
            magicLampContainer.classList.remove('lamp-shaking');
            magicLampContainer.classList.add('lamp-dimmed');
            
            answerReveal.classList.remove('opacity-0', 'scale-50');
            answerReveal.classList.add('answer-visible', 'pointer-events-auto');
            
            // Show share buttons
            const shareBtns = document.getElementById('share-buttons');
            if (shareBtns) {
                shareBtns.classList.remove('opacity-0');
                shareBtns.classList.add('opacity-100');
            }
            
            saveState();
            updateDisplay();
            if(fateData.type !== 'error') showParticles(fateData.type);
            askButton.disabled = false;
        }, 800); // Time to wait for smoke to get thick before revealing

    }, 800); // Time spent rubbing/shaking before smoke
}

function saveState() {
    localStorage.setItem('totalFlips', totalFlips);
    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);
    localStorage.setItem('logEntries', JSON.stringify(logEntries));
}

function showParticles(type) {
    const colors = type === 'positive' ? ['#03DAC6', '#BB86FC', '#FFFFFF'] : ['#F472B6', '#EF4444', '#FFFFFF'];
    confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.5 },
        colors: colors,
        ticks: 200
    });
}

function setupEventListeners() {
    askButton.addEventListener('click', askLamp);
    
    // Hide answer and reset lamp if user types a new question
    questionInput.addEventListener('input', () => {
        if(answerReveal.classList.contains('answer-visible')) {
            answerReveal.classList.remove('answer-visible', 'pointer-events-auto');
            answerReveal.classList.add('opacity-0', 'scale-50');
            
            const shareBtns = document.getElementById('share-buttons');
            if (shareBtns) {
                shareBtns.classList.add('opacity-0');
                shareBtns.classList.remove('opacity-100');
            }
            
            magicLampContainer.classList.remove('lamp-dimmed');
        }
    });

    const placeholders = {
        food: "오늘 치킨을 시켜 먹을까요?...",
        love: "그 사람에게 먼저 연락해 볼까요?...",
        money: "장바구니에 담아둔 옷을 결제할까요?...",
        study: "지금 30분만 푹 자고 일어날까요?...",
        life: "내일 아침 일찍 조깅을 하러 나갈까요?...",
        etc: "이 계획을 지금 바로 실행에 옮길까요?..."
    };

    const hints = {
        food: "음식에 대해 예/아니오로 답할 수 있는 질문을 적어주세요. (예: 오늘 치킨 먹을까?)",
        love: "연애에 대해 예/아니오로 답할 수 있는 질문을 적어주세요. (예: 먼저 연락할까?)",
        money: "금전에 대해 예/아니오로 답할 수 있는 질문을 적어주세요. (예: 이거 지금 살까?)",
        study: "학업에 대해 예/아니오로 답할 수 있는 질문을 적어주세요. (예: 1시간만 잘까?)",
        life: "일상에 대해 예/아니오로 답할 수 있는 질문을 적어주세요. (예: 오늘 운동 갈까?)",
        etc: "기타 고민에 대해 예/아니오로 답할 수 있는 질문을 적어주세요."
    };

    const questionHint = document.getElementById('question-hint');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            
            // Update placeholder and hint
            questionInput.placeholder = placeholders[selectedCategory];
            if (questionHint) {
                questionHint.textContent = hints[selectedCategory];
            }

            // Hide answer on category change
            answerReveal.classList.remove('answer-visible', 'pointer-events-auto');
            answerReveal.classList.add('opacity-0', 'scale-50');
            
            const shareBtns = document.getElementById('share-buttons');
            if (shareBtns) {
                shareBtns.classList.add('opacity-0');
                shareBtns.classList.remove('opacity-100');
            }
            
            magicLampContainer.classList.remove('lamp-dimmed');
        });
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