// Drawing Lots Logic

const translations = {
    "en": {
        "app_title": "Drawing Lots - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Exciting Drawing Lots",
        "main_description": "Find the hidden lucky slips.",
        "setup_title": "Settings",
        "winner_count_label": "Number of Winners",
        "start_btn": "Shuffle Slips",
        "reset_btn": "Reset",
        "reveal_btn": "Show Results",
        "turn_text": "It's <b>{name}</b>'s turn! Pick a slip.",
        "all_picked_text": "All slips picked! Check the results.",
        "winner_reveal_msg": "🎉 Winners: <b>{names}</b>",
        "result_summary_title": "Full Results Summary",
        "winner_text": "WINNER!",
        "fail_text": "FAIL",
        "player_placeholder": "Ex) Player",
        "error_empty_name": "Please enter all participant names.",
        "error_duplicate_name": "Participant names cannot be duplicated.",
        "fortune_disclaimer": "※ Please enjoy the results for entertainment purposes only.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service"
    },
    "ko": {
        "app_title": "제비뽑기 - Zeze Hub",
        "app_name": "Drawing Lots",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "두근두근 제비뽑기",
        "main_description": "숨겨진 행운의 제비를 찾아보세요.",
        "setup_title": "설정",
        "winner_count_label": "당첨 인원",
        "start_btn": "제비 섞기",
        "reset_btn": "다시 설정",
        "reveal_btn": "결과 확인",
        "turn_text": "<b>{name}</b> 님 차례입니다! 제비를 골라주세요.",
        "all_picked_text": "제비를 모두 골랐습니다! 결과를 확인하세요.",
        "winner_reveal_msg": "🎉 당첨자: <b>{names}</b>",
        "result_summary_title": "전체 결과 요약",
        "winner_text": "당첨!",
        "fail_text": "꽝",
        "player_placeholder": "예) 참가자",
        "error_empty_name": "모든 참가자의 이름을 입력해주세요.",
        "error_duplicate_name": "중복된 참가자 이름이 있습니다.",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다.",
        "footer_copyright": "© 2024 Zeze Decision Hub.",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let playerCount = 4;
let winnerCount = 1;
let players = [];
let lots = []; // {isWinner: boolean, playerIndex: number | null, isRevealed: boolean}
let currentTurnIndex = 0;
let isAnimating = false;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const winnerCountDisplay = document.getElementById('winner-count');
const lotsContainer = document.getElementById('lots-container');
const turnIndicatorContainer = document.getElementById('turn-indicator');
const turnIndicator = document.getElementById('current-turn-text');
const revealBtn = document.getElementById('reveal-btn');
const finalResultSection = document.getElementById('final-result-section');
const resultList = document.getElementById('result-list');

function init() {
    renderInputs();
    applyTranslations();
    setupEventListeners();
}

function renderInputs() {
    playerInputsContainer.innerHTML = '';
    for (let i = 0; i < playerCount; i++) {
        const div = document.createElement('div');
        div.className = 'player-input-group flex items-center gap-2 animate-fadeIn';
        div.innerHTML = `
            <span class="w-6 h-6 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">${i + 1}</span>
            <input type="text" class="player-name-input flex-1 p-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all text-sm" 
                placeholder="${translations[currentLang].player_placeholder} ${i + 1}">
        `;
        playerInputsContainer.appendChild(div);
    }
    playerCountDisplay.textContent = playerCount;
    winnerCountDisplay.textContent = winnerCount;
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

function setupEventListeners() {
    // Player Count
    document.getElementById('player-plus').addEventListener('click', () => {
        if (playerCount < 24) {
            playerCount++;
            renderInputs();
        }
    });
    document.getElementById('player-minus').addEventListener('click', () => {
        if (playerCount > 2) {
            playerCount--;
            if (winnerCount >= playerCount) winnerCount = playerCount - 1;
            renderInputs();
        }
    });

    // Winner Count
    document.getElementById('winner-plus').addEventListener('click', () => {
        if (winnerCount < playerCount - 1) {
            winnerCount++;
            winnerCountDisplay.textContent = winnerCount;
        }
    });
    document.getElementById('winner-minus').addEventListener('click', () => {
        if (winnerCount > 1) {
            winnerCount--;
            winnerCountDisplay.textContent = winnerCount;
        }
    });

    document.getElementById('start-btn').addEventListener('click', setupGame);
    document.getElementById('reset-btn').addEventListener('click', () => {
        setupSection.classList.remove('hidden');
        gameStage.classList.add('hidden');
        finalResultSection.classList.add('hidden');
    });
    revealBtn.addEventListener('click', revealAllResults);

    // Sidebar & Language
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.remove('translate-x-full');
        document.getElementById('sidebar-overlay').classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem('lang', currentLang);
            applyTranslations();
            renderInputs();
        });
    });
}

function setupGame() {
    const inputs = document.querySelectorAll('.player-name-input');
    const nameValues = Array.from(inputs).map(input => input.value.trim());
    
    // Validation: Check if any name is empty
    if (nameValues.some(name => name === '')) {
        alert(translations[currentLang].error_empty_name);
        return;
    }

    // Validation: Check for duplicates
    const uniqueNames = new Set(nameValues);
    if (uniqueNames.size !== nameValues.length) {
        alert(translations[currentLang].error_duplicate_name);
        return;
    }

    players = nameValues;
    
    lots = [];
    for (let i = 0; i < playerCount; i++) {
        lots.push({ isWinner: i < winnerCount, playerIndex: null, isRevealed: false });
    }
    
    // Shuffle hidden values
    for (let i = lots.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lots[i].isWinner, lots[j].isWinner] = [lots[j].isWinner, lots[i].isWinner];
    }

    currentTurnIndex = 0;
    renderSlips();
    updateTurnIndicator();
    
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    revealBtn.classList.add('hidden');
    finalResultSection.classList.add('hidden');
    turnIndicatorContainer.classList.add('bg-primary', 'animate-pulse');
    turnIndicatorContainer.classList.remove('bg-secondary');
}

function renderSlips() {
    lotsContainer.innerHTML = '';
    // Adjust columns
    if (playerCount <= 6) lotsContainer.className = 'grid grid-cols-2 gap-4 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100';
    else if (playerCount <= 12) lotsContainer.className = 'grid grid-cols-3 gap-3 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100';
    else lotsContainer.className = 'grid grid-cols-4 gap-2 w-full p-4 bg-white rounded-3xl shadow-inner border border-gray-100';

    lots.forEach((_, index) => {
        const div = document.createElement('div');
        div.className = 'lot-item';
        div.innerHTML = `
            <div class="lot-inner">
                <div class="lot-front"></div>
                <div class="lot-back flex flex-col items-center justify-center p-2 text-center">
                    <span class="player-name text-xs text-primary font-bold mb-1 leading-tight break-all"></span>
                    <span class="result-text font-black text-lg hidden leading-none"></span>
                </div>
            </div>
        `;
        div.addEventListener('click', () => handleSlipClick(index, div));
        lotsContainer.appendChild(div);
    });
}

function handleSlipClick(index, element) {
    if (lots[index].playerIndex !== null || currentTurnIndex >= players.length || isAnimating) return;

    lots[index].playerIndex = currentTurnIndex;
    const player = players[currentTurnIndex];
    
    const backName = element.querySelector('.player-name');
    backName.textContent = player;
    
    element.classList.add('flipped');
    
    currentTurnIndex++;
    updateTurnIndicator();

    if (currentTurnIndex >= players.length) {
        revealBtn.classList.remove('hidden');
        turnIndicatorContainer.classList.remove('animate-pulse');
    }
}

function updateTurnIndicator() {
    if (currentTurnIndex < players.length) {
        turnIndicator.innerHTML = translations[currentLang].turn_text.replace('{name}', players[currentTurnIndex]);
    } else {
        turnIndicator.textContent = translations[currentLang].all_picked_text;
    }
}

async function revealAllResults() {
    revealBtn.disabled = true;
    revealBtn.style.opacity = '0.5';
    
    const items = document.querySelectorAll('.lot-item');
    const winners = [];

    for (let i = 0; i < lots.length; i++) {
        const slip = items[i];
        const lotData = lots[i];
        const resText = slip.querySelector('.result-text');
        
        lotData.isRevealed = true;
        resText.classList.remove('hidden');
        resText.textContent = lotData.isWinner ? translations[currentLang].winner_text : translations[currentLang].fail_text;
        
        const back = slip.querySelector('.lot-back');
        if (lotData.isWinner) {
            back.classList.add('winner');
            winners.push(players[lotData.playerIndex]);
        } else {
            back.classList.add('fail');
        }
        
        await sleep(100);
    }

    // Update Top Indicator with Winners
    turnIndicatorContainer.classList.remove('bg-primary');
    turnIndicatorContainer.classList.add('bg-secondary');
    turnIndicator.innerHTML = translations[currentLang].winner_reveal_msg.replace('{names}', winners.join(', '));

    confetti({ particleCount: 150, spread: 100, origin: { y: 0.7 } });
    renderFinalSummary();
    revealBtn.disabled = false;
    revealBtn.style.opacity = '1';
    revealBtn.classList.add('hidden'); // Hide after showing results
}

function renderFinalSummary() {
    finalResultSection.classList.remove('hidden');
    resultList.innerHTML = '';
    
    const playerResults = lots
        .filter(l => l.playerIndex !== null)
        .sort((a, b) => a.playerIndex - b.playerIndex);

    playerResults.forEach(res => {
        const div = document.createElement('div');
        div.className = `flex justify-between items-center p-4 rounded-2xl border ${res.isWinner ? 'bg-secondary/5 border-secondary/20' : 'bg-white border-gray-100'}`;
        div.innerHTML = `
            <span class="font-bold ${res.isWinner ? 'text-secondary' : 'text-gray-700'}">${players[res.playerIndex]}</span>
            <span class="text-xs font-black ${res.isWinner ? 'text-secondary' : 'text-gray-300'}">${res.isWinner ? translations[currentLang].winner_text : translations[currentLang].fail_text}</span>
        `;
        resultList.appendChild(div);
    });
    
    finalResultSection.scrollIntoView({ behavior: 'smooth' });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', init);
