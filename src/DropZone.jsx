import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropZone = () => {
  const [value, setValue] = useState('');
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => {
      console.log('item', item)
      setValue(item.name);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));



  return (
    <div
      ref={drop}
      style={{
        border: `1px dashed ${isOver ? 'green' : 'black'}`,
        padding: '10px',
      }}>
      <label>Drop Here</label>
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default DropZone;

