import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Typography,
  InputBase
} from '@mui/material';
import Navbar from './NavBar';
import FolderIcon from '@mui/icons-material/Folder';
import { FolderOutlined } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';
import { SearchOutlined } from '@mui/icons-material';

const steps = ['Year', 'Month', 'Client', 'Company', 'File Type'];
const years = [2019, 2020, 2021, 2022, 2023];

const YearSelectionWithStepper = () => {
  

  return (<Box>
    <Navbar/>
    <Box sx={{ width: '100%', mt: 5, textAlign: 'center' }}>
      <Box sx={{ width: '60%', margin: 'auto' }}>
        <Stepper  alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ margin: 'auto', mt: 3 }}>
        <Box ml={3} display='flex' justifyContent='space-between' alignItems='center'><Typography textAlign={'left'} fontSize={24} fontWeight={600}>Select Year</Typography>
        
        { <Box
      
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        borderRadius: '50px',
        backgroundColor: ' #F6F6F6',
        boxShadow: 'none',
      }}
    >
      <SearchOutlined sx={{ p: '10px', color: '#686868' }} />
      <InputBase
        sx={{ ml: 1, flex: 1, color: '#686868' }}
        placeholder="Search for month"
        inputProps={{ 'aria-label': 'search for month' }}
      />
    </Box>}</Box> 
        <TableContainer component={Paper}>
          <Table aria-label="year selection table">
            <TableBody>
              <TableRow>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Checkbox
                       
                        inputProps={{ 'aria-label': 'Select all years' }}
                        sx={{
                          color: '#686868',
                        }}
                      />
                    }
                    label="Select All"
                    sx={{
                      color: '#686868',
                      fontWeight: 'bold',
                      marginLeft: 0,
                    }}
                  />
                </TableCell>
              </TableRow>
              {years.map((year) => (
                <TableRow
                  key={year}
                  hover
                 
                  sx={{
                    cursor: 'pointer',
                   
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Checkbox
                       
                      />
                      <FolderOutlined
                        sx={{
                       color: '#2F39B6',
                        marginRight: 1,
                        background:'#E7E8F4',
                        padding:1,
                        borderRadius:8
                        }}
                      />
                      <Box
                        component="span"
                        sx={{
                          color: '#686868',
                          fontWeight:  'bold' 
                        }}
                      >
                        {year}
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3,p:2 }}>
          <Button
            
            sx={{
              color: '#686868',
            }}
          >
            Back
          </Button>
          <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                backgroundColor: '#2F39B6',
                color: '#FFFFFF',
                borderRadius:'24px',
                textTransform:'none'
              }}
            >
              Download
            </Button>
        </Box>
        
      </Box>
    </Box>
    </Box>
  );
};

export default YearSelectionWithStepper;
