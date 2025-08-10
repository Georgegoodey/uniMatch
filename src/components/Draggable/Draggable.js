import React, { useState, useRef } from 'react';
import './Draggable.scss'

const Draggable = ({ children }) => {
  const [position, setPosition] = useState({ x: 300, y: 200 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = (e) => {
    dragging.current = false;
  };

  return (
    <div className='bg-grey bg-opacity-10 border-opacity-25 border border-3 border-grey mx-3 mt-3 px-3 py-3'
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '20%',
        height: '15%',
        cursor: 'move',
        resize: 'both',
        overflow: 'auto',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      draggable={true}
    >
      {children}
    </div>
  );
};

export default Draggable;
