import React, { useState } from 'react';
import ReactJson from 'react-json-view';

const MyComponent = () => {
  const [jsonData, setJsonData] = useState({
    name: 'John Doe',
    age: 30,
    gender: 'male',
    hobbies: ['Reading', 'Gardening'],
    favoriteColor: 'blue'
  });

  const handleNameChange = (e) => {
    setJsonData({ ...jsonData, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    setJsonData({ ...jsonData, age: parseInt(e.target.value) });
  };

  const handleGenderChange = (e) => {
    setJsonData({ ...jsonData, gender: e.target.value });
  };

  const handleHobbiesChange = (e) => {
    const selectedHobbies = Array.from(e.target.selectedOptions, option => option.value);
    setJsonData({ ...jsonData, hobbies: selectedHobbies });
  };

  const handleColorChange = (e) => {
    setJsonData({ ...jsonData, favoriteColor: e.target.value });
  };

  return (
    <div>
      <h2>JSON Data</h2>
      <ReactJson
        src={jsonData}
        theme="monokai"
        displayDataTypes={false}
        displayObjectSize={false}
        enableClipboard={false}
        onDelete={(newData) => setJsonData(newData.updated_src)}
        onAdd={(newData) => setJsonData(newData.updated_src)}
        onEdit={(newData) => setJsonData(newData.updated_src)}
        name={null}
        iconStyle="circle"
        indentWidth={2}
        collapsed={1}
        sortKeys
      />
      <form>
        <label>Name:</label>
        <input type="text" value={jsonData.name} onChange={handleNameChange} />

        <label>Age:</label>
        <input type="number" value={jsonData.age} onChange={handleAgeChange} />

        <label>Gender:</label>
        <select value={jsonData.gender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label>Hobbies:</label>
        <select multiple value={jsonData.hobbies} onChange={handleHobbiesChange}>
          <option value="Reading">Reading</option>
          <option value="Gardening">Gardening</option>
          <option value="Cooking">Cooking</option>
        </select>

        <label>Favorite Color:</label>
        <select value={jsonData.favoriteColor} onChange={handleColorChange}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </form>
    </div>
  );
};

export default MyComponent;
