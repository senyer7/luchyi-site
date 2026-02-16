// Курсор-преследователь
const cursorFollower = document.querySelector('.cursor-follower');
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Попапы появляются случайно
const popups = ['popup1', 'popup2', 'popup3'];
let popupInterval;

function showRandomPopup() {
    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
    document.getElementById(randomPopup).classList.add('active');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('active');
    // После закрытия показываем другой попап через случайное время
    setTimeout(showRandomPopup, Math.random() * 5000 + 3000);
}

// Показываем первый попап через 2 секунды
setTimeout(showRandomPopup, 2000);

// Кнопка "НАЖМИ МЕНЯ" убегает
const runawayBtn = document.getElementById('runaway-btn');
let runawayCount = 0;

runawayBtn.addEventListener('mouseenter', () => {
    runawayCount++;
    const maxX = window.innerWidth - runawayBtn.offsetWidth;
    const maxY = window.innerHeight - runawayBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    runawayBtn.style.position = 'fixed';
    runawayBtn.style.left = randomX + 'px';
    runawayBtn.style.top = randomY + 'px';

    if (runawayCount > 10) {
        runawayBtn.textContent = 'ХВАТИТ УЖЕ! 😭';
    }
});

runawayBtn.addEventListener('click', () => {
    alert('ТЫ МЕНЯ ПОЙМАЛ!!! 🎉 (Но зачем?..)');
    runawayCount = 0;
    runawayBtn.textContent = 'НАЖМИ МЕНЯ';
});

// Кнопка побега
const escapeBtn = document.getElementById('escape-btn');
let escapeCount = 0;

escapeBtn.addEventListener('mouseenter', (e) => {
    escapeCount++;
    const rect = escapeBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - btnCenterY, e.clientX - btnCenterX);
    const distance = 200;

    const newX = btnCenterX - Math.cos(angle) * distance;
    const newY = btnCenterY - Math.sin(angle) * distance;

    escapeBtn.style.position = 'fixed';
    escapeBtn.style.left = newX + 'px';
    escapeBtn.style.top = newY + 'px';

    if (escapeCount > 5) {
        escapeBtn.textContent = 'Я УХОЖУ! 🏃';
    }
});

escapeBtn.addEventListener('click', () => {
    alert('НЕВОЗМОЖНО! Ты гений! 🏆');
    escapeCount = 0;
    escapeBtn.textContent = 'Поймай меня!';
});

// Секретное сообщение
function showSecretMessage() {
    const secrets = [
        'Секрет: Этот сайт создан, чтобы раздражать! 😈',
        'Секрет: Никто не читает эти сообщения',
        'Секрет: Ты уже потратил 5 минут на этом сайте',
        'Секрет: У меня нет секретов',
        'Секрет: Дизайнер этого сайта плакал при его создании'
    ];
    alert(secrets[Math.floor(Math.random() * secrets.length)]);
}

// Раздражающий звук
function playSound() {
    // Создаем синтезатор звука
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'square';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);

    alert('Приятного звука! 🔊');
}

// Случайные алерты
setInterval(() => {
    if (Math.random() > 0.95) {
        const messages = [
            '⚠️ ВАШ CAPS LOCK ВКЛЮЧЕН! (может быть)',
            '🎁 Вы выиграли iPhone! (нет)',
            '⏰ Время провести на сайте: слишком много',
            '💾 Ваши данные сохраняются... Шутка, мы ничего не сохраняем',
            '🚨 ВНИМАНИЕ! Это просто тест вашего терпения'
        ];
        alert(messages[Math.floor(Math.random() * messages.length)]);
    }
}, 10000);

// Изменение заголовка страницы
const titles = [
    'НЕ УХОДИ!',
    'ВЕРНИСЬ!',
    'ЭЙ!',
    '👀 Я ВИЖУ ТЕБЯ',
    'ЛУЧШИЙ САЙТ!!!',
    'КЛИКНИ СЮДА!'
];

let titleIndex = 0;
setInterval(() => {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}, 2000);

// "Улучшенный" скролл
let scrollHijackEnabled = false;
const scrollSection = document.querySelector('.scroll-hijack');

window.addEventListener('scroll', () => {
    const rect = scrollSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (Math.random() > 0.7) {
            window.scrollBy(0, Math.random() * 100 - 50);
        }
    }
});

// Форма с сюрпризами
const form = document.querySelector('.annoying-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ошибка 404: Кнопка отправки не найдена... хотя вы только что на нее нажали 🤔');
});

// Пароль показывается всем
const passwordInput = document.querySelector('.password-revealer');
passwordInput.addEventListener('input', () => {
    passwordInput.type = Math.random() > 0.5 ? 'text' : 'password';
});

// Случайная вибрация страницы
setInterval(() => {
    if (Math.random() > 0.9) {
        document.body.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
        setTimeout(() => {
            document.body.style.transform = 'translate(0, 0)';
        }, 100);
    }
}, 3000);

// При попытке выделить текст
document.addEventListener('selectstart', (e) => {
    if (Math.random() > 0.7) {
        e.preventDefault();
        alert('Копирование запрещено! (на самом деле нет, но мы хотели вас напугать)');
    }
});

// Правый клик
document.addEventListener('contextmenu', (e) => {
    if (Math.random() > 0.5) {
        e.preventDefault();
        alert('Правый клик отключен! Потому что мы можем! 😎');
    }
});

// Приветствие
window.addEventListener('load', () => {
    setTimeout(() => {
        alert('🎉 Добро пожаловать на самый раздражающий сайт в интернете! 🎉\n\nПриятного пользования! (или нет)');
    }, 500);
});

console.log('Если ты видишь это в консоли, то ты слишком умный для этого сайта 🧠');
