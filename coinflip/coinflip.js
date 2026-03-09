// 3D Coin Flip Logic

const translations = {
    "en": {
        "app_title": "3D Coin Flip - Zeze Hub",
        "app_name": "3D Coin Flip",
        "menu_sidebar_title": "Menu",
        "language_select_label": "Language",
        "main_title": "3D Coin Flip",
        "main_description": "Will it be Heads or Tails?",
        "prediction_label": "Predict the result",
        "heads_label": "Heads",
        "tails_label": "Tails",
        "win_label": "Prediction Win!",
        "lose_label": "Prediction Failed",
        "flip_btn": "Flip Coin",
        "stat_total": "Total Flips",
        "stat_heads": "Heads",
        "stat_tails": "Tails",
        "save_img_btn": "Save Image",
        "copy_link_btn": "Copy Link",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "HEADS",
        "tails_text": "TAILS",
        "advice_heads": "A positive sign! Luck is on your side.",
        "advice_tails": "The flip says tails. Maybe wait a bit?",
        "guide_title": "User Guide",
        "privacy_policy": "Privacy Policy",
        "terms_of_service": "Terms of Service",
        "skin_label": "Choose Coin Skin",
        "streak_label": "Streak"
    },
    "ko": {
        "app_title": "3D 동전 던지기 - Zeze Hub",
        "app_name": "3D Coin Flip",
        "menu_sidebar_title": "메뉴",
        "language_select_label": "언어",
        "main_title": "3D 동전 던지기",
        "main_description": "운명은 앞면일까요, 뒷면일까요?",
        "prediction_label": "결과를 예측해보세요",
        "heads_label": "앞면",
        "tails_label": "뒷면",
        "win_label": "예측 성공!",
        "lose_label": "예측 실패...",
        "flip_btn": "동전 던지기",
        "stat_total": "총 던진 횟수",
        "stat_heads": "앞면",
        "stat_tails": "뒷면",
        "save_img_btn": "저장",
        "copy_link_btn": "복사",
        "footer_copyright": "© 2024 Zeze Studio Decision Hub.",
        "heads_text": "앞면 (Heads)",
        "tails_text": "뒷면 (Tails)",
        "advice_heads": "긍정적인 신호입니다! 행운이 따르겠네요.",
        "advice_tails": "뒷면이 나왔습니다. 조금 더 신중해볼까요?",
        "guide_title": "사용 가이드",
        "privacy_policy": "개인정보처리방침",
        "terms_of_service": "서비스 약관",
        "skin_label": "동전 스킨 선택",
        "streak_label": "연승 기록"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';
let selectedPrediction = null;
let currentSkin = localStorage.getItem('coin_skin') || 'gold';

// State
let totalFlips = parseInt(localStorage.getItem('coin_total')) || 0;
let headsCount = parseInt(localStorage.getItem('coin_heads')) || 0;
let tailsCount = parseInt(localStorage.getItem('coin_tails')) || 0;
let currentStreak = 0;

// DOM
const coin = document.getElementById('coin');
const flipButton = document.getElementById('flip-button');
const resultOverlay = document.getElementById('coin-result-overlay');
const resultText = document.getElementById('result-text');
const resultAdvice = document.getElementById('result-advice');
const winBadge = document.getElementById('win-badge');
const shareButtons = document.getElementById('share-buttons');
const streakCounter = document.getElementById('streak-counter');
const streakValue = document.getElementById('streak-value');

const totalFlipsDisplay = document.getElementById('total-flips');
const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');

// 🎵 Sound Manager
const SoundManager = {
    ctx: null,
    muted: false,
    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    toggleMute() {
        this.muted = !this.muted;
        document.getElementById('sound-icon').textContent = this.muted ? 'volume_off' : 'volume_up';
    },
    playFlip() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.5);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.5);
    },
    playWin() {
        if (this.muted) return;
        this.init();
        [523.25, 659.25, 783.99].forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.frequency.value = f;
            gain.gain.setValueAtTime(0, this.ctx.currentTime + i * 0.1);
            gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + i * 0.1 + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.3);
            osc.connect(gain); gain.connect(this.ctx.destination);
            osc.start(this.ctx.currentTime + i * 0.1); osc.stop(this.ctx.currentTime + i * 0.1 + 0.3);
        });
    },
    playLose() {
        if (this.muted) return;
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(100, this.ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
        osc.connect(gain); gain.connect(this.ctx.destination);
        osc.start(); osc.stop(this.ctx.currentTime + 0.4);
    }
};

function init() {
    applyLanguage();
    updateDisplay();
    applySkin(currentSkin);
    setupEventListeners();
}

function updateDisplay() {
    totalFlipsDisplay.textContent = totalFlips;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;
    
    if (currentStreak > 0) {
        streakCounter.classList.remove('opacity-0');
        streakValue.textContent = currentStreak;
    } else {
        streakCounter.classList.add('opacity-0');
    }
}

function applySkin(skin) {
    currentSkin = skin;
    localStorage.setItem('coin_skin', skin);
    
    // Update coin class
    coin.className = `coin skin-${skin}`;
    
    // Update icons based on skin
    const frontIcon = coin.querySelector('.front .coin-icon');
    const backIcon = coin.querySelector('.back .coin-icon');
    
    if (skin === 'gold') {
        frontIcon.textContent = 'face';
        backIcon.textContent = 'toll';
    } else if (skin === 'bitcoin') {
        frontIcon.textContent = 'currency_bitcoin';
        backIcon.textContent = 'savings';
    } else if (skin === 'heart') {
        frontIcon.textContent = 'favorite';
        backIcon.textContent = 'favorite_border';
    } else if (skin === 'cat') {
        frontIcon.textContent = 'pets';
        backIcon.textContent = 'catching_pokemon';
    }

    // Update active button
    document.querySelectorAll('.skin-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.skin === skin);
    });
}

function flipCoin() {
    if (flipButton.disabled) return;
    
    const coinContainer = document.getElementById('coin-container');
    flipButton.disabled = true;
    resultOverlay.classList.remove('answer-visible');
    resultOverlay.classList.add('opacity-0', 'scale-50');
    shareButtons.classList.add('opacity-0');
    
    // Random Result
    const isHeads = Math.random() < 0.5;
    
    // Animation Logic
    coinContainer.classList.remove('is-jumping');
    void coinContainer.offsetWidth; // reflow
    coinContainer.classList.add('is-jumping');

    // Rotation Logic
    const currentRotationY = getRotationY(coin);
    const extraSpins = (Math.floor(Math.random() * 5) + 5) * 360;
    const targetRotationY = isHeads ? 0 : 180;
    const finalRotationY = currentRotationY + extraSpins + (targetRotationY - (currentRotationY % 360));
    
    // Add some random X rotation for variety, but ensure it ends at a multiple of 360
    const finalRotationX = (Math.floor(Math.random() * 5) + 5) * 360;
    
    coin.style.transform = `rotateY(${finalRotationY}deg) rotateX(${finalRotationX}deg)`;
    SoundManager.playFlip();

    setTimeout(() => {
        // Show Results
        const t = translations[currentLang];
        resultText.textContent = isHeads ? t.heads_text : t.tails_text;
        resultAdvice.textContent = isHeads ? t.advice_heads : t.advice_tails;
        
        totalFlips++;
        if (isHeads) headsCount++; else tailsCount++;
        
        // Check Prediction
        if (selectedPrediction) {
            const isWin = selectedPrediction === (isHeads ? 'heads' : 'tails');
            if (isWin) {
                currentStreak++;
                winBadge.textContent = t.win_label;
                winBadge.className = "inline-block px-3 py-1 bg-yellow-500 text-[#050c1d] text-[10px] font-black rounded-full mb-3 uppercase tracking-tighter";
                winBadge.classList.remove('hidden');
                SoundManager.playWin();
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
            } else {
                currentStreak = 0;
                winBadge.textContent = t.lose_label;
                winBadge.className = "inline-block px-3 py-1 bg-gray-600 text-white text-[10px] font-black rounded-full mb-3 uppercase tracking-tighter opacity-70";
                winBadge.classList.remove('hidden');
                SoundManager.playLose();
            }
        } else {
            winBadge.classList.add('hidden');
        }

        resultOverlay.classList.remove('opacity-0', 'scale-50');
        resultOverlay.classList.add('answer-visible');
        shareButtons.classList.remove('opacity-0');
        
        updateDisplay();
        saveState();
        flipButton.disabled = false;
    }, 1500);
}

function getRotationY(el) {
    const st = window.getComputedStyle(el, null);
    const tr = st.getPropertyValue("transform");
    if (tr === "none") return 0;
    
    const values = tr.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    const c = values[2];
    const d = values[3];
    
    // This is for 2D matrix. For 3D matrix (matrix3d), it's more complex.
    // However, since we only use rotateY, we can just track it in a variable or parse style.transform
    const transformStr = el.style.transform;
    if (transformStr && transformStr.includes('rotateY')) {
        const match = transformStr.match(/rotateY\((.+?)deg\)/);
        if (match) return parseFloat(match[1]);
    }
    return 0;
}

function saveState() {
    localStorage.setItem('coin_total', totalFlips);
    localStorage.setItem('coin_heads', headsCount);
    localStorage.setItem('coin_tails', tailsCount);
}

function applyLanguage() {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyLanguage();
}

// Image Capture
async function saveImage() {
    const card = document.querySelector('#coin-result-overlay > div');
    const canvas = await html2canvas(card, { backgroundColor: '#050c1d', scale: 2 });
    const link = document.createElement('a');
    link.download = `Zeze_CoinFlip_${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function setupEventListeners() {
    flipButton.addEventListener('click', flipCoin);
    document.getElementById('sound-toggle').addEventListener('click', () => SoundManager.toggleMute());
    document.getElementById('save-img-btn').addEventListener('click', saveImage);
    
    document.querySelectorAll('.predict-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.predict-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPrediction = btn.dataset.predict;
        });
    });

    document.querySelectorAll('.skin-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applySkin(btn.dataset.skin);
        });
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Sidebar
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    document.getElementById('menu-toggle').addEventListener('click', () => {
        sidebarMenu.classList.remove('translate-x-full');
        sidebarOverlay.classList.remove('hidden');
    });
    document.getElementById('close-menu').addEventListener('click', () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', init);