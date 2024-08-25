import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import Sidebar from './Sidebar';

const Navbar = ()=> {

  return (
    <AppBar position="sticky" sx={{background:'white',color:'black'}} >
      <Toolbar>
      <Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
  <Box display='flex' alignItems='center' sx={{ flexBasis: 'auto' }}>
    <Sidebar />
    <Typography variant="h6" component="div" sx={{ ml: 2 }}>
      Page Name
    </Typography>
  </Box>

  <Box display='flex' gap={2} alignItems='center'>
    <IconButton color="inherit">
      <Badge badgeContent={4} color="error">
        <NotificationsNoneIcon />
      </Badge>
    </IconButton>
    <IconButton sx={{ p: 0 }}>
      <Avatar />
    </IconButton>
    <TextField
      variant="standard"
      select
      defaultValue={'ClientName1'}
      InputProps={{
        disableUnderline: true,
        
      }}
    >
      <MenuItem value="ClientName1">ClientName1</MenuItem>
      <MenuItem value="ClientName2">ClientName2</MenuItem>
    </TextField>
  </Box>
</Box>


      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
