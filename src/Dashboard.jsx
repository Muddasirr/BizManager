import React from 'react';
import { Container, Box, Grid, Paper, Typography, IconButton,Button } from '@mui/material';
import { AccountBox, Group, FolderOpen, Logout, } from '@mui/icons-material';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <Box >
      <Box display="flex" justifyContent='space-between'>
        
        <Sidebar/>

       
        <Box width={'80vw'} flex={1} p={3}>
          <Typography variant="h6" fontFamily={'sans-serif'} fontWeight={'600'} mb={2}>CTR File Migration Process</Typography>
          
          <Box display="flex" gap={3}>
      <Box flex={1}>
        <Button
          style={{
            width: '370px',
            height: '152px',
            backgroundColor: '#EAEBF8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <AccountBox style={{ fontSize: 40, color: '#2F39B6' }} />
          <Typography variant="h6" mt={2}>New Client</Typography>
        </Button>
      </Box>
      <Box flex={1}>
        <Button
          style={{
            width: '370px',
            height: '152px',
            backgroundColor: '#f3f5fc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <Group style={{ fontSize: 40, color: '#3f51b5' }} />
          <Typography variant="h6" mt={2}>View Clients</Typography>
        </Button>
      </Box>
      <Box flex={1}>
        <Button
          style={{
            width: '370px',
            height: '152px',
            backgroundColor: '#f3f5fc',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <FolderOpen style={{ fontSize: 40, color: '#3f51b5' }} />
          <Typography variant="h6" mt={2}>View Files</Typography>
        </Button>
      </Box>
    </Box>

          <Grid container spacing={3} mt={3}>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Payrolls</Typography>
                <Typography variant="h4" mt={1}>47</Typography>
                <Typography variant="body2" mt={1} color="green">+15% last mth</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Files</Typography>
                <Typography variant="h4" mt={1}>$1,280</Typography>
                <Typography variant="body2" mt={1} color="green">+15% last mth</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Clients</Typography>
                <Typography variant="h4" mt={1}>$1,280</Typography>
                <Typography variant="body2" mt={1} color="green">+15% last mth</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper style={{ padding: '20px' }}>
                <Typography variant="h6">Total Profit</Typography>
                <Typography variant="h4" mt={1}>$1,280</Typography>
                <Typography variant="body2" mt={1} color="green">+15% last mth</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Paper style={{ padding: '20px' }}>
              <Typography variant="h6">Sales report</Typography>
              
              <Box mt={3}>
                <Typography>12 months</Typography>
                <Box height="200px" bgcolor="#e0e0e0" />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
