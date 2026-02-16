import React, { useState, useRef } from 'react';
import './EscapingButton.css';

function EscapingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapes, setEscapes] = useState(0);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    setEscapes(escapes + 1);

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setPosition({ x: newX, y: newY });

    if (escapes > 20) {
      alert('ХОРОШО, ТЫ ВЫИГРАЛ! Я УСТАЛ УБЕГАТЬ! 😓');
      setPosition({ x: 0, y: 0 });
      setEscapes(0);
    }
  };

  const handleClick = () => {
    alert('КАК ТЫ МЕНЯ ПОЙМАЛ?! 🤯 Ты слишком быстр!');
    setPosition({ x: 0, y: 0 });
    setEscapes(0);
  };

  return (
    <button
      ref={buttonRef}
      className="escaping-button"
      style={{
        position: escapes > 0 ? 'fixed' : 'relative',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 1000
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {escapes === 0 ? 'ПОЙМАЙ МЕНЯ!' : escapes < 10 ? '🏃 БЕГИ!' : escapes < 20 ? '😰 ПОМОГИТЕ!' : '🥵 Я УСТАЛ!'}
    </button>
  );
}

export default EscapingButton;
