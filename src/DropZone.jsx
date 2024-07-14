import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({onDrop}) => {
  const [value, setValue] = useState('');
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'item',
    drop: (item) => {

    onDrop(item);
      setValue(item.name);
      
      
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));



  return (
    <div
      ref={drop}
     >
    <input type="text" value={value} style={{background:'#cceeff',border:'none', width:"200px"}} />
      
    </div>
  );
};

export default DropZone;

