import React, { useState } from "react";
import s from './ParallaxCard.module.scss'

const ParallaxCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setMousePosition({ x: pageX, y: pageY });
  };

  return (
    <div className="card" onMouseMove={handleMouseMove}>
      <div
        className="card-image"
        style={{
          transform: `translate(-${mousePosition.x / 50}px, -${mousePosition.y / 50}px)`,
        }}
      ></div>
      <div className={s.card_content}>
        <h3>Title</h3>
        <p>Description</p>
      </div>
    </div>
  );
};

export default ParallaxCard;
