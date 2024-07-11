import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColorPaletteBuilder from './colorcreator'
import {
    AppBar,
    Toolbar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
 
}));



const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
        backgroundColor: theme.palette.action.selected,
    },
}));

const ExcelReader = () => {
    const [query, setQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/getproducts');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setQuery(value);
        setFilteredData(data.filter(item => 
            item.product_name.toLowerCase().includes(value) ||
            item.type.toLowerCase().includes(value) ||
            item.generic.toLowerCase().includes(value) ||
            item.color.toLowerCase().includes(value)
        ));
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <img src="/download.png" alt="Company Logo" style={{ marginRight: '16px', height: '40px' }} />
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <input 
                    style={{width: '100%', padding: '10px', margin: '10px'}}
                    type="text" 
                    value={query}
                    onChange={handleSearch}
                    placeholder="Search by Product Name, Type, or Generic" 
                />
            </div>
            <ColorPaletteBuilder />
            <StyledTableContainer component={Paper}>
                <Table>
                    
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Generic</TableCell>
                            <TableCell>Color</TableCell>
                            <TableCell>Shape</TableCell>
                            <TableCell>Weight (mg)</TableCell>
                            <TableCell>Width (mm)</TableCell>
                            <TableCell>Height (mm)</TableCell>
                        </TableRow>
                   
                    <TableBody>
                        {filteredData.map((row, index) => (
                            <StyledTableRow key={index}>
                                <TableCell>{row.product_name}</TableCell>
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.generic}</TableCell>
                                <TableCell>{row.color}</TableCell>
                                <TableCell>{row.shape}</TableCell>
                                <TableCell>{row.weight_mg}</TableCell>
                                <TableCell>{row.width_mm}</TableCell>
                                <TableCell>{row.height_mm}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </div>
    );
};

export default ExcelReader;