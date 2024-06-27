import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop, value }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [inputValue, setInputValue] = useState('');

  React.useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      ref={drop}
      style={{
        border: `1px dashed ${isOver ? 'green' : 'black'}`,
        padding: '10px',
      }}>
      <label>Drop Here</label>
      <input type="text" value={inputValue} readOnly />
    </div>
  );
};

export default DropZone;
