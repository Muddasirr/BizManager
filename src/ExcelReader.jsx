import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import ColorPaletteBuilder from './colorcreator';
import ProductTable from './Product-Table';

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
    Container,
    Box,
    Button,
    Dialog,
    DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { styled } from '@mui/system';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
 
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
        
            <ProductTable products={filteredData} />
        </div>
    );
};

export default ExcelReader;



