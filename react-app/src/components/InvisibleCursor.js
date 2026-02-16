import React, { useState, useEffect } from 'react';
import './InvisibleCursor.css';

function InvisibleCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [emoji, setEmoji] = useState('👁️');

  const emojis = ['👁️', '👀', '🤡', '👻', '💀', '🎪', '🌈', '🔥', '⭐', '💥'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="invisible-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {emoji}
    </div>
  );
}

export default InvisibleCursor;
