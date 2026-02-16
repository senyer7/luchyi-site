import React, { useState, useEffect } from 'react';
import './RandomPopups.css';

function RandomPopups() {
  const [popups, setPopups] = useState([]);

  const popupMessages = [
    { title: '🎉 ПОЗДРАВЛЯЕМ!', text: 'Вы 999999-й посетитель!', color: 'yellow' },
    { title: '⚠️ ВНИМАНИЕ!', text: 'Cookies уже съедены!', color: 'orange' },
    { title: '📢 НОВОСТЬ!', text: 'React хуки захватили мир!', color: 'cyan' },
    { title: '💾 СОХРАНЕНИЕ...', text: 'Ваши данные никуда не сохраняются', color: 'lime' },
    { title: '🔔 УВЕДОМЛЕНИЕ!', text: 'У вас 0 новых сообщений', color: 'pink' },
    { title: '🎁 ПОДАРОК!', text: 'Вы получили... ничего!', color: 'purple' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6 && popups.length < 3) {
        const randomPopup = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        const id = Date.now();
        setPopups(prev => [...prev, { ...randomPopup, id }]);

        // Автоматически закрываем через 5 секунд
        setTimeout(() => {
          closePopup(id);
        }, 5000);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [popups]);

  const closePopup = (id) => {
    setPopups(prev => prev.filter(popup => popup.id !== id));

    // После закрытия одного попапа, может появиться другой
    if (Math.random() > 0.7) {
      setTimeout(() => {
        const randomPopup = popupMessages[Math.floor(Math.random() * popupMessages.length)];
        const newId = Date.now();
        setPopups(prev => [...prev, { ...randomPopup, id: newId }]);
      }, 1000);
    }
  };

  return (
    <div className="random-popups-container">
      {popups.map((popup, index) => (
        <div
          key={popup.id}
          className="random-popup"
          style={{
            backgroundColor: popup.color,
            top: `${20 + index * 120}px`,
            right: `${20 + Math.random() * 100}px`,
          }}
        >
          <div className="popup-header">
            <h3>{popup.title}</h3>
            <button className="popup-close" onClick={() => closePopup(popup.id)}>
              ❌
            </button>
          </div>
          <p>{popup.text}</p>
        </div>
      ))}
    </div>
  );
}

export default RandomPopups;
