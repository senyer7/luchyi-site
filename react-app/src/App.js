import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import CrazyButton from './components/CrazyButton';
import EscapingButton from './components/EscapingButton';
import AnnoyingModal from './components/AnnoyingModal';
import DisappearingForm from './components/DisappearingForm';
import RandomPopups from './components/RandomPopups';
import InvisibleCursor from './components/InvisibleCursor';
import ShakingImage from './components/ShakingImage';

function App() {
  const [bgColor, setBgColor] = useState('#ff0000');
  const [fontSize, setFontSize] = useState(16);
  const [rotation, setRotation] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [showVirus, setShowVirus] = useState(false);
  const [pageTitle, setPageTitle] = useState('НЕ ЗАКРЫВАЙ МЕНЯ!');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const titles = [
    '⚠️ ВЕРНИСЬ!',
    '😱 НЕ УХОДИ!',
    '🚨 ЭКСТРЕННОЕ СООБЩЕНИЕ!',
    '💰 ТЫ ВСЁ ВЫИГРАЛ!',
    '👀 Я СМОТРЮ НА ТЕБЯ',
    '🎉 КЛИКНИ СЮДА!'
  ];

  // Случайная смена цвета фона
  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Случайное изменение размера шрифта
  useEffect(() => {
    const interval = setInterval(() => {
      setFontSize(Math.random() * 10 + 14);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Случайный поворот страницы
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(Math.random() * 20 - 10);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Модалка появляется случайно
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [showModal]);

  // Смена заголовка страницы
  useEffect(() => {
    const interval = setInterval(() => {
      setPageTitle(titles[Math.floor(Math.random() * titles.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  // Фейковый вирус
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVirus(true);
      setTimeout(() => setShowVirus(false), 5000);
    }, 15000);
    return () => clearTimeout(timeout);
  }, [showVirus]);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks > 10) {
      alert('ХВАТИТ УЖЕ КЛИКАТЬ! 🛑');
      setClicks(0);
    }
  };

  const handleMouseMove = (e) => {
    if (Math.random() > 0.95) {
      document.body.style.cursor = 'none';
      setTimeout(() => {
        document.body.style.cursor = 'auto';
      }, 1000);
    }
  };

  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(${rotation}deg, ${bgColor}, ${colors[(colors.indexOf(bgColor) + 1) % colors.length]})`,
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.5s ease'
      }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <InvisibleCursor />
      <RandomPopups />

      {showVirus && (
        <div className="virus-alert">
          <h1>⚠️ ВНИМАНИЕ! ВИРУС ОБНАРУЖЕН! ⚠️</h1>
          <p>Загрузка антивируса... 99% 😈</p>
          <div className="fake-progress"></div>
        </div>
      )}

      <header className="App-header">
        <h1 className="glitch-title" style={{ fontSize: `${fontSize * 2}px` }}>
          REACT ВЕРСИЯ - ЕЩЁ БОЛЕЕ УЖАСНАЯ!
        </h1>
        <div className="marquee-container">
          <div className="marquee">
            ✨ ДОБРО ПОЖАЛОВАТЬ В АД REACT ✨ ХУКИ ПОВСЮДУ ✨ STATE МЕНЕДЖМЕНТ ХАОС ✨
          </div>
        </div>
      </header>

      <main className="content">
        <section className="interactive-section">
          <h2 style={{ fontSize: `${fontSize * 1.5}px` }}>
            Интерактивные элементы (которые вас бесят)
          </h2>

          <div className="button-container">
            <CrazyButton />
            <EscapingButton />
          </div>

          <div className="stats">
            <p className="click-counter">
              Вы кликнули на странице: {clicks} раз (зачем?)
            </p>
          </div>
        </section>

        <section className="form-section">
          <h2>Попробуй заполнить эту форму 😈</h2>
          <DisappearingForm />
        </section>

        <section className="gallery-section">
          <h2 className="rotating-text">Галерея ужасов</h2>
          <div className="image-grid">
            <ShakingImage emoji="🤡" speed={0.5} />
            <ShakingImage emoji="💀" speed={1} />
            <ShakingImage emoji="👻" speed={0.7} />
            <ShakingImage emoji="🎪" speed={0.3} />
          </div>
        </section>

        <section className="chaos-section">
          <h2>Зона хаоса</h2>
          <div className="chaos-box">
            <p className="crazy-text">
              Этот текст использует useState для изменения каждую секунду
            </p>
            <button className="useless-button" onClick={() => alert('Эта кнопка ничего не делает!')}>
              НЕ НАЖИМАЙ
            </button>
            <button className="useless-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Скролл наверх (медленно)
            </button>
            <button className="useless-button" onClick={() => window.location.reload()}>
              Перезагрузить (НЕ НАДО!)
            </button>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p className="upside-down">© 2024 Худший React Сайт. Создан с помощью хуков и боли.</p>
        <p className="tiny-text">
          Этот сайт использует React {React.version}. Прости, React, за это...
        </p>
      </footer>

      {showModal && <AnnoyingModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
