import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Pagination,
  Stepper,
  Step,
  StepLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import Navbar from './NavBar';
import { CheckBoxOutlineBlank } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';



const ValidationComponent = () => {
  const steps = ['Earnings and Memos', 'Deduction', 'Taxes'];
  const options = [
    { label: 'E_Regular_Hours', value: 'E_Regular_Hours' },
    { label: 'E_Regular_Amount', value: 'E_Regular_Amount' },
   
  ];
  return (
    <Box alignItems="center" justifyContent="center">
      <Navbar />
      <Box px={32} py={6}>
        <Box sx={{ maxWidth: '400px', margin: 'auto' }}>
          <Stepper alternativeLabel activeStep={0}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        

        <Box width='100%' display= 'flex' justifyContent='space-between' alignItems='center'  mb={4} >
          <Box justifyContent='center' alignItems='center' display='flex'>
            <Typography variant="h6" fontSize='Large' fontFamily='Inter' fontWeight='600' >
          Validation - 
          </Typography>
          
          <Typography variant="h6" fontSize='Large' fontFamily='Inter' fontWeight='600' sx={{ color: '#2F39B6' }}> Earnings and Memos
        </Typography></Box>
        <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      bgcolor='#E7E8F4'
      p={1}
      borderRadius='8px'
      sx={{ border: '1px solid #2F39B6' }}
    >
      <Box display='flex' alignItems='center' mx={2}>
        <Box sx={{ width: 16, height: 16, backgroundColor: 'white', border: '1px solid #000', borderRadius: '4px', marginRight: '8px' }} />
        <Typography>Mapped</Typography>
      </Box>

      <Box display='flex' alignItems='center' mx={2}>
        <Box sx={{ width: 16, height: 16, backgroundColor: '#ABE6C5', border: '1px solid #000', borderRadius: '4px', marginRight: '8px' }} />
        <Typography>Predicted</Typography>
      </Box>

      <Box display='flex' alignItems='center' mx={2}>
        <Box sx={{ width: 16, height: 16, backgroundColor: '#FFD5DA', border: '1px solid #000', borderRadius: '4px', marginRight: '8px' }} />
        <Typography>Unmapped</Typography>
      </Box>
    </Box>

        </Box>
        <Table>
  <TableHead sx={{background:'#f6f6f6',borderRadius:8}}>
    <TableRow sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <TableCell sx={{ textAlign: 'left', flex: 1, padding: '4px 8px' }}><Typography fontWeight={600}>Extracted Header</Typography></TableCell>
      <TableCell sx={{ textAlign: 'right', flex: 1, padding: '4px 8px' }}><Typography fontWeight={600}>Final Mapped Hours</Typography></TableCell>
    </TableRow>
  </TableHead>
  <TableBody >
    {[
      { header: 'Payments_regular_hours', status: 'mapped' },
      { header: 'Payments_regular_amount', status: 'unmapped' },
      { header: 'Payments_personal_hours', status: 'predicted' },
      { header: 'Payments_holidays_hours', status: 'mapped' },
    ].map((row, index) => (
      <TableRow
        key={index}
        sx={{
          
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor:
            row.status === 'mapped' ? 'white' :
            row.status === 'unmapped' ? '#FFD5DA' :
            row.status === 'predicted' ? '#ABE6C5' : 'white',
        }}
      >
        <TableCell sx={{ textAlign: 'left', }}><Typography fontWeight={600} >{row.header}</Typography></TableCell>
        <TableCell sx={{ textAlign: 'right'  }}>
        {/* <Select
  defaultValue="E_Regular_Hours"
  size='small'
  
  sx={{
    height:'5vh',
    width:'12.5vw',
    borderRadius:'8px',
    border: '1px',
    background:'white',
    
  }}
>
            <MenuItem value="E_Regular_Hours">E_Regular_Hours</MenuItem>
            <MenuItem value="E_Regular_Amount">E_Regular_Amount</MenuItem>
            </Select> */}
           
          <Autocomplete
      options={options}
      defaultValue={options[0]}
      size="small"
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          sx={{
            
            width: '12.5vw',
            borderRadius: '8px',
            background: 'white',
          }}
        />
      )}
      sx={{
        height: '5vh',
        width: '12.5vw',
        borderRadius: '8px',
        background: 'white',
      }}
    />
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginY: '20px' }}>
          <Pagination count={6} page={1} color="primary" />
        </Box>

        <Box  gap={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained"
         sx={{ background:'#E7E8F4',borderRadius:'24px',color:'black',textTransform:'none'}}>Back</Button>
          <Button  variant="contained" sx={{ backgroundColor: '#2F39B6',borderRadius:'24px',textTransform:'none' }}>Next Section</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ValidationComponent;
