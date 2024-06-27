import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropZone from './DropZone';

const App = () => {
  const [Json, setJson] = useState({
    name: "String",
    F: {
      name: "String",
      age: "int",
    },
    age: "int",
    address: "String",
    DOB: "Date",
  });

  const [droppedItems, setDroppedItems] = useState([]);
  const [value, setValue] = useState('');

  const handleDrop = (item) => {
   
    setValue(item.name);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}>
        <div style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '5px'
        }}>
          <h1>Drag and Drop Example</h1>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            <div style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px'
            }}>
              <h2>Drag Items</h2>
              {Object.keys(Json).map((key, index) => (
                <DragItem name={key} key={index} />
              ))}
            </div>
            <div style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px'
            }}>
              <h2>Drop Zone</h2>
              <DropZone onDrop={handleDrop} value={value} />
              <DropZone onDrop={handleDrop} value={value} />
              <DropZone onDrop={handleDrop} value={value} />
              <DropZone onDrop={handleDrop} value={value} />
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
