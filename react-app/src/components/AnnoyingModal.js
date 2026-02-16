import React, { useState, useEffect } from 'react';
import './AnnoyingModal.css';

function AnnoyingModal({ onClose }) {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [showFakeClose, setShowFakeClose] = useState(true);

  const messages = [
    '🎉 ПОЗДРАВЛЯЕМ!',
    '💰 ВЫ ВЫИГРАЛИ 1000000$!',
    '⚠️ ВАШ КОМПЬЮТЕР В ОПАСНОСТИ!',
    '📧 ПОДПИШИТЕСЬ НА РАССЫЛКУ!',
    '🎁 ПОЛУЧИТЕ БЕСПЛАТНЫЙ АЙФОН!',
    '🚨 СРОЧНОЕ ОБНОВЛЕНИЕ!',
    '👑 ВЫ СТАЛИ КОРОЛЁМ ИНТЕРНЕТА!'
  ];

  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleFakeCloseHover = () => {
    setAttempts(attempts + 1);
    const maxX = 300;
    const maxY = 200;

    setButtonPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2
    });

    if (attempts > 8) {
      setShowFakeClose(false);
    }
  };

  const handleRealClose = () => {
    alert('НАКОНЕЦ-ТО! Хорошая попытка! 😅');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="annoying-modal">
        <div className="modal-header">
          <h2 className="modal-title">{message}</h2>
          {showFakeClose && (
            <button
              className="fake-close-btn"
              style={{
                transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
              }}
              onMouseEnter={handleFakeCloseHover}
            >
              ❌
            </button>
          )}
        </div>

        <div className="modal-body">
          <p className="modal-text">
            {attempts < 5
              ? 'Нажмите на крестик, чтобы закрыть это окно!'
              : attempts < 9
              ? 'Почти получилось! Ещё чуть-чуть!'
              : 'Хорошо, теперь используй НАСТОЯЩУЮ кнопку ниже 👇'}
          </p>

          <div className="modal-content">
            <p>Попыток закрыть окно: {attempts}</p>
            {attempts > 3 && (
              <p className="hint">
                Подсказка: крестик убегает от вас! 🏃
              </p>
            )}
          </div>

          {!showFakeClose && (
            <button className="real-close-btn" onClick={handleRealClose}>
              НАСТОЯЩАЯ КНОПКА ЗАКРЫТЬ
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnnoyingModal;
