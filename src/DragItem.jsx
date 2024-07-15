//DragItem.js

import React from 'react';
import { useDrag } from 'react-dnd';

const DragItem = ({ name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        
        cursor: 'move',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '5px',
        margin: '5px',
        backgroundColor: 'lightblue',
        opacity: 1
      }}>
      {name}
    </div>
  );
};

export default DragItem;
