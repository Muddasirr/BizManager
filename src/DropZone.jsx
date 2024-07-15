import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Box, Typography, TableCell } from '@mui/material';
import { hex } from 'chroma-js';

const DropZone = ({ onDrop, name }) => {
  const [value, setValue] = useState(name);

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

  const style = (value) => ({
    backgroundColor: value === "" ? 'white' : '#cceeff',
    borderRadius: 1,
    textAlign: 'center'});

  return (


    <Box ref={drop} sx={


      style(value)}>
      <TableCell >{value}</TableCell>
    </Box>

  );
};

export default DropZone;

