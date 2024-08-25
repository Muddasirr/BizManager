import React from 'react';
import { Container, Box, Grid, Paper, Typography, IconButton, Button } from '@mui/material';
import { AccountBox, Group, FolderOpen, Logout,ArrowUpwardOutlined } from '@mui/icons-material';
import Sidebar from './Sidebar';
import SalesReportChart from './SalesReportChart';
import Navbar from './NavBar';





const Dashboard = () => {
  
  const ButtonStyles = {
    textTransform: 'none',
    width: '100%',
    height: '152px',
    backgroundColor: '#EAEBF8',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  }
  return (
    <Box >
      <Box display="flex" justifyContent='space-between'>

        


        <Box  flex={1} >
          <Navbar/>
          <Box p={3} flex={1}>

          <Typography variant="h6" fontFamily={'sans-serif'} fontWeight={'600'} mb={2}>CTR File Migration Process</Typography>

          <Box display="flex" gap={3}>
            <Box width={'33%'} flex={1}>
              <Button
                style={ButtonStyles}
              >
                <AccountBox style={{ fontSize: 40, color: '#2F39B6' }} />
                <Typography variant="h6" mt={2}>New Client</Typography>
              </Button>
            </Box>
            <Box width={'33%'} flex={1}>
              <Button
                style={ButtonStyles}
              >
                <Group style={{ fontSize: 40, color: '#3f51b5' }} />
                <Typography variant="h6" mt={2}>View Clients</Typography>
              </Button>
            </Box>
            <Box width={'33%'} flex={1}>
              <Button
                style={ButtonStyles}
              >
                <FolderOpen style={{ fontSize: 40, color: '#3f51b5' }} />
                <Typography variant="h6" mt={2}>View Files</Typography>
              </Button>
            </Box>
          </Box>

          <Grid container spacing={3} mt={1}>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Payrolls</Typography>
                <Typography variant="h6" fontWeight='bold' mt={1}>47</Typography>
                <Box  display='flex' justifyContent='left' mt={1} alignItems='center'> <ArrowUpwardOutlined fontSize='small' sx={{color:'#12B76A'}}/> <Typography variant="body2"  color="#027A48">+15% last mth</Typography></Box>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Files</Typography>
                <Typography variant="h6" fontWeight='bold' mt={1}>$1,280</Typography>
                <Box  display='flex' justifyContent='left'mt={1} alignItems='center'> <ArrowUpwardOutlined fontSize='small' sx={{color:'#12B76A'}}/> <Typography variant="body2"  color="#027A48">+15% last mth</Typography></Box>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Clients</Typography>
                <Typography  variant="h6" fontWeight='bold' mt={1}>$1,280</Typography>
                <Box  display='flex' justifyContent='left'mt={1} alignItems='center'> <ArrowUpwardOutlined fontSize='small' sx={{color:'#12B76A'}}/> <Typography variant="body2"  color="#027A48">+15% last mth</Typography></Box>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Profit</Typography>
                <Typography variant="h6" fontWeight='bold' mt={1}>$1,280</Typography>
              <Box  display='flex' justifyContent='left'mt={1} alignItems='center'> <ArrowUpwardOutlined fontSize='small' sx={{color:'#12B76A'}}/> <Typography variant="body2"  color="#027A48">+15% last mth</Typography></Box>
              </Paper>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Paper style={{ padding: '20px' }}>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography  fontWeight='bold' variant="h6">Sales report</Typography>
              <Button   sx={{background:'white',border:' 1px #D0D5DD solid', color:'#344054',textTransform:'none',borderRadius:'10px'}}>View report</Button>
              </Box>
              <Box mt={3}>
                
                <Box height='50%'  >
                  <SalesReportChart/>
                  </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default Dashboard;
