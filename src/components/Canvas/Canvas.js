import React from 'react';
import './Canvas.scss';
import Draggable from '../Draggable/Draggable';

const Canvas = () => {

  return (
    <section className="text-light">
      <div className='bg-grey bg-opacity-10 border-opacity-25 border border-3 border-grey mx-3 mt-3'>
        <h1 className='ms-3 mt-2'>Canvas - Work in Progress</h1>
        <p className='fs-5 text-light text-opacity-75 ms-3 mt-2 mb-2'>Here's a canvas with draggable elements</p>
      </div>
      <div>
        <Draggable className='bg-grey bg-opacity-10 border-opacity-25 border border-3 border-grey mx-3 mt-3 h-100'>
          <p>Component</p>
        </Draggable>
      </div>
    </section>
  );
};

export default Canvas;
