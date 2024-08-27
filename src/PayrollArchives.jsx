import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Paper,
  Button
} from '@mui/material';
import { ArrowBackOutlined, CloudDownload as CloudDownloadIcon } from '@mui/icons-material';
import Navbar from './NavBar';

const PayrollArchives = () => {
  const rawFiles = [
    'Payroll Register 01_02.pdf',
    'Payroll Register 01_02.pdf',
    'Payroll Register 01_02.pdf',
    'Payroll Register 01_02.pdf',
  ];

  const processedFiles = [
    'Pellman Payroll 01_02.xls',
    'Pellman Payroll 01_02.xls',
  ];

  return (
  <Box>
    <Navbar/>
    <Box p={3}>
      <Box mb={3}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Payroll Archives
        </Typography>
        <Button
        
        sx={{
            background: '#E7E8F4',
            borderRadius:'24px',
          py:1,
          px:2

        }}
        >
            <ArrowBackOutlined />
            Back</Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          mt={2}
          sx={{
            background: '#E7E8F4',
            width:'30%',
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Box>
            <Box display='flex' >
            <Typography textAlign={'left'} variant="body1">Payroll Month: </Typography>
            <Typography textAlign={'right'}>January</Typography>
            </Box>
            <Box display='flex'>
            <Typography variant="body1">Payroll Month:</Typography>
            <Typography variant="body1">January</Typography>
            </Box>
            <Box display='flex'>
            <Typography variant="body1">Payroll Month:</Typography>
            <Typography variant="body1">January</Typography>
            </Box>
            
          </Box>
        </Box>
      </Box>

      <Box mb={3}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Raw Files
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>Select All</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rawFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{file}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <CloudDownloadIcon color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Processed Files
        </Typography>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table>
            <TableBody>
              {processedFiles.map((file, index) => (
                <TableRow key={index}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>{file}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <CloudDownloadIcon color="primary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </Box>
  );
};

export default PayrollArchives;
