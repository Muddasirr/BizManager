import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import {
    AppBar,
    Toolbar,
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '12px',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const CardData = () => {
    const [data, setData] = useState([]);
    const [filters, setFilters] = useState({
        productName: '',
        type: '',
        generic: '',
        color: '',
        shape: '',
        weight: '',
        width: '',
        height: '',
    });

    useEffect(() => {
        fetch('/data.xlsx')
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const workbook = XLSX.read(buffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setData(jsonData);
            })
            .catch(error => console.error('Error fetching the Excel file:', error));
    }, []);

    const handleFilterChange = (event, key) => {
        const { value } = event.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: value,
        }));
    };

    const filteredData = data.filter(row => {
        for (let key in filters) {
            if (filters[key] !== '' && !row[key].toString().toLowerCase().includes(filters[key].toLowerCase())) {
                return false;
            }
        }
        return true;
    });

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <img src="/download.png" alt="Company Logo" style={{ marginRight: '16px', height: '40px' }} />
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                      
                  
                    </Grid>
                    {/* Add similar TextField components for other filters as needed */}
                </Grid>
            </div>
            <Grid container spacing={2} style={{ padding: '16px' }}>
                {filteredData.map((row, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard variant="outlined">
                            <CardContent>
                                <Typography variant="h6">{row['Product Name']}</Typography>
                                <Typography variant="body1">Type: {row['Type']}</Typography>
                                <Typography variant="body1">Generic: {row['Generic']}</Typography>
                                <Typography variant="body1">Color: {row['Color']}</Typography>
                                <Typography variant="body1">Shape: {row['Shape']}</Typography>
                                <Typography variant="body1">Weight (mg): {row['Weight (mg)']}</Typography>
                                <Typography variant="body1">Width (mm): {row['Width (mm)']}</Typography>
                                <Typography variant="body1">Height (mm): {row['Height (mm)']}</Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CardData;
