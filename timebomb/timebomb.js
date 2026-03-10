// Time Bomb Game Logic - Multiplayer Version

const translations = {
    "en": {
        "app_title": "Time Bomb - Zeze Hub",
        "app_name": "TIME BOMB",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "Bomb Defusal",
        "setup_desc": "Enter participants and set the order.",
        "label_players": "Participants",
        "add_player": "Add Player",
        "start_btn": "Start Mission",
        "turn_suffix": "'s turn!",
        "win_title": "SUCCESS!",
        "win_desc": "Miraculous! You successfully defused the bomb. Everyone is safe.",
        "lose_text": "BOOM!",
        "lose_desc_suffix": " triggered the bomb and failed the mission.",
        "reset_btn": "Restart Mission",
        "new_game_btn": "New Operation",
        "error_min_players": "At least 2 players are needed.",
        "error_empty_name": "Please enter all names.",
        "player_placeholder": "Player ",
        "privacy_policy": "Privacy Policy",
        "fortune_disclaimer": "※ Please enjoy the results for fun only."
    },
    "ko": {
        "app_title": "시한 폭탄 돌리기 - Zeze Hub",
        "app_name": "TIME BOMB",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "공포의 시한 폭탄",
        "setup_desc": "참여자를 입력하고 순서를 정하세요.",
        "label_players": "참여자 명단",
        "add_player": "참여자 추가",
        "start_btn": "작전 시작하기",
        "turn_suffix": "님 차례입니다!",
        "win_title": "해체 성공!",
        "win_desc": "운이 좋으시군요! 폭탄 제거에 성공하셨습니다. 모두가 안전합니다.",
        "lose_text": "BOOM!",
        "lose_desc_suffix": "님이 폭탄을 해제하지 못하고 터트려버렸습니다.",
        "reset_btn": "다시 시작하기",
        "new_game_btn": "새 작전 시작",
        "error_min_players": "최소 2명의 참여자가 필요합니다.",
        "error_empty_name": "모든 이름을 입력해주세요.",
        "player_placeholder": "참여자 ",
        "privacy_policy": "개인정보처리방침",
        "fortune_disclaimer": "※ 본 서비스의 결과는 재미로만 즐겨주시기 바랍니다."
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let players = ["", ""];
let currentPlayerIndex = 0;
let trapWireIndex = -1;
let isGameOver = false;
let totalWires = 8;
let timerInterval = null;
let remainingWiresCount = 0;

// DOM Elements
const setupSection = document.getElementById('setup-section');
const gameStage = document.getElementById('game-stage');
const playerInputsContainer = document.getElementById('player-inputs');
const playerCountDisplay = document.getElementById('player-count');
const currentPlayerNameDisplay = document.getElementById('current-player-name');
const bomb = document.getElementById('bomb');
const digitalTimer = document.getElementById('digital-timer');
const wiresGrid = document.getElementById('wires-panel');
const resultBanner = document.getElementById('result-banner');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

function init() {
    applyTranslations();
    renderPlayerInputs();
    setupEventListeners();
}

function applyTranslations() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang] && translations[currentLang][key]) {
            // Check if it's a suffix/prefix part or a standalone element
            if (key === 'turn_suffix') {
                el.textContent = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
    
    // Update ongoing game messages if game is over
    if (isGameOver) {
        if (remainingWiresCount === 1) {
            resultTitle.textContent = translations[currentLang].win_title;
            resultDesc.textContent = translations[currentLang].win_desc;
        } else {
            resultTitle.textContent = translations[currentLang].lose_text;
            resultDesc.innerHTML = `<span class="text-white font-bold">${players[currentPlayerIndex]}</span>${translations[currentLang].lose_desc_suffix}`;
        }
    }
}

function saveCurrentNames() {
    const inputs = document.querySelectorAll('.player-name-input');
    inputs.forEach((input, index) => {
        if (players[index] !== undefined) {
            players[index] = input.value;
        }
    });
}

function renderPlayerInputs() {
    playerInputsContainer.innerHTML = '';
    
    players.forEach((name, index) => {
        const div = document.createElement('div');
        div.className = 'flex gap-2 items-center animate-fadeIn';
        div.innerHTML = `
            <input type="text" class="player-name-input flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all" 
                placeholder="${translations[currentLang].player_placeholder}${index + 1}" value="${name}">
            ${players.length > 2 ? `<button class="remove-player-btn text-gray-600 hover:text-primary transition-colors" data-index="${index}"><span class="material-icons">remove_circle</span></button>` : ''}
        `;
        playerInputsContainer.appendChild(div);
    });
    playerCountDisplay.textContent = `${players.length}/8`;
}

function startGame() {
    saveCurrentNames();
    const names = players.map(n => n.trim()).filter(n => n !== "");
    
    if (names.length < 2) {
        alert(translations[currentLang].error_min_players);
        return;
    }
    
    players = names;
    currentPlayerIndex = 0;
    isGameOver = false;
    
    // Dynamic wire count: 2 wires per player, min 6, max 12
    totalWires = Math.max(6, Math.min(players.length * 2, 12));
    remainingWiresCount = totalWires;
    trapWireIndex = Math.floor(Math.random() * totalWires);
    
    setupSection.classList.add('hidden');
    gameStage.classList.remove('hidden');
    
    resetUI();
    updateTurnDisplay();
    startTimerAnimation();
    renderWires();
}

function resetUI() {
    bomb.classList.remove('exploded');
    document.body.classList.remove('screen-shake');
    resultBanner.style.opacity = '0';
    resultBanner.classList.add('scale-90');
    resultTitle.classList.remove('text-success');
    resultTitle.classList.add('text-primary');
}

function updateTurnDisplay() {
    currentPlayerNameDisplay.textContent = players[currentPlayerIndex];
}

function renderWires() {
    wiresGrid.innerHTML = '';
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'white', 'red', 'blue', 'green', 'yellow'];
    
    for (let i = 0; i < totalWires; i++) {
        const wireRow = document.createElement('div');
        wireRow.className = 'wire-row';
        wireRow.dataset.color = colors[i % colors.length];
        wireRow.innerHTML = `
            <div class="connector left"></div>
            <div class="wire-cable"></div>
            <div class="connector right"></div>
        `;
        
        wireRow.addEventListener('click', () => handleWireClick(i, wireRow));
        wiresGrid.appendChild(wireRow);
    }
}

function handleWireClick(index, element) {
    if (isGameOver || element.classList.contains('cut')) return;
    
    element.classList.add('cut');
    remainingWiresCount--;
    
    if (index === trapWireIndex) {
        explode();
    } else if (remainingWiresCount === 1) {
        win();
    } else {
        if ("vibrate" in navigator) navigator.vibrate(20);
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        updateTurnDisplay();
    }
}

function explode() {
    isGameOver = true;
    clearInterval(timerInterval);
    
    bomb.classList.add('exploded');
    document.body.classList.add('screen-shake');
    
    setTimeout(() => document.body.classList.remove('screen-shake'), 500);
    
    setTimeout(() => {
        resultTitle.textContent = translations[currentLang].lose_text;
        resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-primary";
        resultDesc.innerHTML = `<span class="text-white font-bold">${players[currentPlayerIndex]}</span>${translations[currentLang].lose_desc_suffix}`;
        
        resultBanner.style.opacity = '1';
        resultBanner.classList.remove('scale-90');
        
        if ("vibrate" in navigator) navigator.vibrate([100, 50, 200, 50, 300]);
        
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.5 },
            colors: ['#FF3D00', '#FFD600', '#FFFFFF', '#444444']
        });
    }, 200);
}

function win() {
    isGameOver = true;
    clearInterval(timerInterval);
    
    resultTitle.textContent = translations[currentLang].win_title;
    resultTitle.className = "text-4xl font-black mb-2 tracking-tighter text-success";
    resultDesc.textContent = translations[currentLang].win_desc;
    
    resultBanner.style.opacity = '1';
    resultBanner.classList.remove('scale-90');
    
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#00E676', '#FFFFFF', '#FFD600']
    });
}

function startTimerAnimation() {
    timerInterval = setInterval(() => {
        if (isGameOver) return;
        const ms = Math.floor(Math.random() * 99).toString().padStart(2, '0');
        const sec = Math.floor(Math.random() * 60).toString().padStart(2, '0');
        digitalTimer.textContent = `00:${sec}:${ms}`;
    }, 85);
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    renderPlayerInputs();
}

function setupEventListeners() {
    document.getElementById('add-player-btn').addEventListener('click', () => {
        if (players.length < 8) {
            saveCurrentNames();
            players.push("");
            renderPlayerInputs();
        }
    });

    playerInputsContainer.addEventListener('click', (e) => {
        if (e.target.closest('.remove-player-btn')) {
            saveCurrentNames();
            const index = parseInt(e.target.closest('.remove-player-btn').dataset.index);
            players.splice(index, 1);
            renderPlayerInputs();
        }
    });

    playerInputsContainer.addEventListener('input', (e) => {
        if (e.target.classList.contains('player-name-input')) {
            saveCurrentNames();
        }
    });

    document.getElementById('start-game-btn').addEventListener('click', startGame);
    
    document.getElementById('reset-btn').addEventListener('click', () => {
        gameStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
    });

    document.getElementById('reset-game-menu').addEventListener('click', () => {
        gameStage.classList.add('hidden');
        setupSection.classList.remove('hidden');
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });

    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.remove('translate-x-full');
        document.getElementById('sidebar-overlay').classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });
    document.getElementById('sidebar-overlay').addEventListener('click', () => {
        document.getElementById('sidebar-menu').classList.add('translate-x-full');
        document.getElementById('sidebar-overlay').classList.add('hidden');
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', init);
