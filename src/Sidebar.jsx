import React, { useState } from 'react';
import { Box, Typography, styled, Drawer, IconButton } from '@mui/material';
import { AccountBoxOutlined, GroupOutlined, FolderOpenOutlined, LogoutOutlined, Menu as MenuIcon, ArrowLeftOutlined } from '@mui/icons-material';

const SidebarTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 600,
}));

const SidebarBox = styled(Box)(({ theme, active }) => ({
  height: '2vh',
  display: 'flex',
  gap: theme.spacing(1),
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  cursor: 'pointer',
  backgroundColor: active ? 'white' : 'transparent',
  color: active ? '#2F39B6' : 'white',
  borderRadius: active ? 10 : 0,
  '& svg': {
    color: active ? '#2F39B6' : 'white',
  },
  '&:hover': {
    backgroundColor: active ? 'white' : '#3C4EC0',
  },
}));

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <AccountBoxOutlined /> },
    { name: 'New Client', icon: <AccountBoxOutlined /> },
    { name: 'View Clients', icon: <GroupOutlined /> },
    { name: 'View Files', icon: <FolderOpenOutlined /> },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>

      <IconButton onClick={toggleDrawer} sx={{ color: 'black'}}>
        <MenuIcon />
       
      </IconButton>

      <Drawer
      onClick={()=>{}}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: { width: '20vw', bgcolor: '#2F39B6' },
        }}
      >
        <Box display="flex" flexDirection="column" height="100vh">
          <Box  bgcolor="white" alignItems='center' justifyContent='space-between' height='10%'> 
          <img src="/logo.png" alt="Logo" style={{ maxWidth: '100%',height:'100%' }} />
          
          </Box>
          <Box mt={4}>
            {menuItems.map((item) => (
              <SidebarBox
                key={item.name}
                active={activeItem === item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  toggleDrawer();
                }}
              >
                {item.icon}
                <SidebarTypography variant="h6">{item.name}</SidebarTypography>
              </SidebarBox>
            ))}
          </Box>
          <SidebarBox sx={{ mt: 'auto' }} onClick={() => setActiveItem('Login')}>
            <LogoutOutlined fontSize={'12px'} sx={{ color: 'white' }} />
            <SidebarTypography variant="h6">Login</SidebarTypography>
          </SidebarBox>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
