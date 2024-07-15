import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import DragItem from './DragItem';
import DropZone from './DropZone';

const initialResponse = {
  mappings: [
    { source: "deduction_dental", target: "Deductions_Target_Header_1" },
    { source: "deduction_life_insurance", target: "" },
    { source: "deduction_medical_family", target: "" },
    { source: "deduction_medical_employe", target: "" },
    { source: "deduction_medical_nonemploye", target: "" },
    { source: "deduction_medical_xyz", target: "" }
  ],
  available: [
    "Deductions_Target_Header_1",
    "Deductions_Target_Header_2",
    "Deductions_Target_Header_3",
    "Deductions_Target_Header_4",
    "Deductions_Target_Header_5",
    "Deductions_Target_Header_6",
    "Deductions_Target_Header_8",
  ]
};

const HeaderMappings = () => {
  const [response, setResponse] = useState(initialResponse);

  const handleDrop = (item, index) => {
    console.log(response.mappings);
    setResponse(prevResponse => {
      const newMappings = [...prevResponse.mappings];
      newMappings[index].target = item.name;
      console.log(newMappings);
      return {
        ...prevResponse,
        mappings: newMappings
      };
    });
  };

  // Determine the maximum length to render all rows
  const maxLength = Math.max(response.mappings.length, response.available.length);

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
            {[...Array(maxLength)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  {response.mappings[index] ? (
                    <Box sx={{ backgroundColor: '#ffcccc', padding: 1, borderRadius: 1 }}>
                      {response.mappings[index].source}
                    </Box>
                  ) : null}
                </TableCell>
                <TableCell>
                  {response.mappings[index] ? (
                    
                   
                      <DropZone  name={response.mappings[index].target} onDrop={(item) => handleDrop(item, index)} />
                
                  ) : null}
                </TableCell>
                <TableCell>
                  {response.available[index] ? (
                    <DragItem name={response.available[index]} />
                  ) : null}
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
