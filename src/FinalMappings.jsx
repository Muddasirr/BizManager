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
    Paper,
    Pagination,
    Button
} from '@mui/material';
import Navbar from './NavBar';

const ValidationFinalMappings = () => {
    const earningAndMemosData = [
        { extractedHeader: 'taxes_fed_income', finalMappedHours: 'taxes_fed_income' },
        { extractedHeader: 'taxes_social_security', finalMappedHours: 'taxes_social_security' },
        { extractedHeader: 'taxes_medical_care', finalMappedHours: 'taxes_medical_care' },
        { extractedHeader: 'taxes_state_income', finalMappedHours: 'taxes_state_income' },
        { extractedHeader: 'taxes_state_special_pa8053_city', finalMappedHours: 'taxes_state_special_pa8053_city' },
       
    ];

    const deductionsData = [
        { extractedHeader: 'deduction_retirement_401k', finalMappedHours: 'D_401k' },
        { extractedHeader: 'deduction_retirement_401k', finalMappedHours: 'D_401k' },
       
    ];

    const taxesData = [
        { extractedHeader: 'taxes_fed_income', finalMappedHours: 'T_FEDWIT' },
        { extractedHeader: 'taxes_social_security', finalMappedHours: 'T_SOCSCEE' },
      
    ];

    return (
        <Box>
            <Navbar/>
        <Box sx={{ padding: '24px' }}>
            <Typography variant="h6" fontWeight="bold">Validation - <Typography component="span" sx={{ color: '#2F39B6' }}>Final Mappings</Typography></Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
                Validate the Final Header Mappings for all the sections and click approve to generate your excel file.
            </Typography>

            
            <Box sx={{ marginBottom: '24px' }}>
                <TableContainer component={Paper}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ padding: '16px' }}>Earning And Memos</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Extracted Header</TableCell>
                                <TableCell>Final Mapped Hours</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {earningAndMemosData.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.extractedHeader}</TableCell>
                                    <TableCell>{row.finalMappedHours}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box justifyContent='center' alignItems='center' width='100%'>
                <Pagination  count={6} color="primary" />
                </Box>
            </Box>

          
            <Box sx={{ marginBottom: '24px' }}>
                <TableContainer component={Paper}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ padding: '16px' }}>Deductions</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Extracted Header</TableCell>
                                <TableCell>Final Mapped Hours</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {deductionsData.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.extractedHeader}</TableCell>
                                    <TableCell>{row.finalMappedHours}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            
            <Box sx={{ marginBottom: '24px' }}>
                <TableContainer component={Paper}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ padding: '16px' }}>Taxes</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Extracted Header</TableCell>
                                <TableCell>Final Mapped Hours</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {taxesData.map((row, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{row.extractedHeader}</TableCell>
                                    <TableCell>{row.finalMappedHours}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            
            <Box display="flex" justifyContent="flex-end" alignItems="center" marginY={2}>
               
                <Box>
                    <Button variant="contained" sx={{ marginRight: '8px',background:'black',borderRadius:'8px' }}>Generate Excel</Button>
                    <Button variant="outlined" sx={{ marginRight: '8px',background:'#E7E8F4',borderRadius:'8px' }}>Go Back to Edit</Button>
                    <Button variant="contained" sx={{background:'#2F39B6',borderRadius:'8px'}}>Approve</Button>
                </Box>
            </Box>
        </Box>
        </Box>
    );
};

export default ValidationFinalMappings;
