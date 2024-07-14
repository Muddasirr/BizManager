import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import DragItem from './DragItem';
import DropZone from './DropZone';

const initialResponse = {
  mappings: [
    { source: "deduction_dental", target: "Deductions_Target_Header_1" },
    { source: "deduction_life_insurance", target: "" },
    { source: "deduction_medical_family", target: "" },
    { source: "deduction_medical_employe", target: "" }
  ],
  available: [
    "Deductions_Target_Header_1",
    "Deductions_Target_Header_2",
    "Deductions_Target_Header_3",
    "Deductions_Target_Header_4"
  ]
};

const HeaderMappings = () => {
  const [response, setResponse] = useState(initialResponse);

  const handleDrop = (item, index) => {
    setResponse(prevResponse => {
      const newMappings = [...prevResponse.mappings];
      newMappings[index].target = item.name;

      return {
        ...prevResponse,
        mappings: newMappings
      };
    });
 };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Header Mappings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Extracted Headers</TableCell>
              <TableCell>Mapped ISolved Headers</TableCell>
              <TableCell>Available ISolved Headers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {response.mappings.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ backgroundColor: '#ffcccc', padding: 1, borderRadius: 1 }}>
                    {row.source}
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ backgroundColor: '#cceeff', padding: 1, borderRadius: 1 }}>
                    <DropZone onDrop={(item) => handleDrop(item, index)} />
                    
                  </Box>
                </TableCell>
                <TableCell>
                <DragItem name={response.available[index]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HeaderMappings;
