import React, { useState } from 'react';
import './ShakingImage.css';

function ShakingImage({ emoji, speed = 1 }) {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    setScale(scale + 0.5);
    setTimeout(() => setScale(1), 300);
  };

  return (
    <div
      className="shaking-image"
      onClick={handleClick}
      style={{
        animationDuration: `${speed}s`,
        transform: `scale(${scale})`,
      }}
    >
      {emoji}
    </div>
  );
}

export default ShakingImage;
