import React, { useState } from 'react';
import './CrazyButton.css';

function CrazyButton() {
  const [text, setText] = useState('НАЖМИ НА МЕНЯ');
  const [size, setSize] = useState(1);
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    setSize(Math.random() * 2 + 0.5);

    const texts = [
      'СПАСИБО!',
      'ЕЩЁ РАЗ!',
      'ТЫ СЕРЬЁЗНО?',
      'ХВАТИТ!',
      'ПОСЛЕДНИЙ РАЗ!',
      'Я УСТАЛ...',
      '😭',
      'ПОЧЕМУ?',
      'ОСТАВЬ МЕНЯ!',
      'ПОМОГИТЕ!'
    ];

    setText(texts[Math.min(clicks, texts.length - 1)]);

    if (clicks > 15) {
      alert('ТЫ ПОБЕДИЛ КНОПКУ! 🏆 (Поздравляю, наверное...)');
      setClicks(0);
      setText('НАЖМИ НА МЕНЯ');
      setSize(1);
    }
  };

  return (
    <button
      className="crazy-button"
      onClick={handleClick}
      style={{
        transform: `scale(${size}) rotate(${clicks * 36}deg)`,
        background: `hsl(${clicks * 36}, 100%, 50%)`
      }}
    >
      {text}
    </button>
  );
}

export default CrazyButton;
