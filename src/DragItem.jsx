import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name }) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'item',
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <>
     
      <div
        ref={drag}
        style={{
          display: 'inline-block',
        
        }}
      >
        <div
          style={{
            opacity: 1, 
            cursor: 'move',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '5px',
            margin: '5px',
            backgroundColor: 'lightblue',
            width: '150%',
          }}
        >
          <b>{name}</b>
        </div>
      </div>
    </>
  );
};

export default DragItem;
