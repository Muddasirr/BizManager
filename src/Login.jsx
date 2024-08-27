import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const LoginForm = () => {
  return (
    <Box display="flex" height="100vh">
     
      <Box
        bgcolor="#AED1E1"
        sx={{
          borderTopRightRadius: '10%',
          borderBottomRightRadius: '10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between', // Ensures spacing between the top, middle, and bottom
          alignItems: 'center',
          width: '30vw',
          padding: 4,
          paddingTop: 8, // Added padding to give some space at the top
          paddingBottom: 8, // Added padding to give some space at the bottom
        }}
      >
       
        <Box textAlign="center">
          <Typography variant="h4" color="textPrimary">
            Welcome to
          </Typography>
        </Box>

       <Box bgcolor='white' width='50%' height='50%' borderRadius='50%' textAlign='center' alignContent={'center'} justifyContent='center'>
        <Box
        width={'80%'}
        height='50%'
          component="img"
          src="logo.png"
          alt="Blue Ocean Logo"
         
        />
        </Box>

        
        <Box textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © 2024 Axiom
          </Typography>
        </Box>
      </Box>

      
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="70vw"
        height="100vh"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="40%"
        >
          <Box width='100%' textAlign="left" mb={4}>
            <Typography fontWeight='600' variant="h4">
              Welcome
            </Typography>
            <Typography color='#8C8C8C' variant="body1">
              Login through email and password
            </Typography>
          </Box>
          <Box width="100%" mb={4}>
            <TextField
              fullWidth
              InputProps={{
                sx: {
                  height: 40,
                  fontSize: 14,
                  borderRadius:2

                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: 14,

                },
              }}

              label="Enter Your Email"
              variant="outlined"

            />
          </Box>
          <Box width="100%" mb={2}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              InputProps={{
                sx: {
                  height: 40,
                  fontSize: 14,
                  borderRadius:2

                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: 14,

                },
              }}
            />
          </Box>
          <Box width="100%" textAlign="right" mb={2}>
            <Typography fontWeight='500'  variant="body2">
              Forgot password?
            </Typography>
          </Box>
          <Box width="100%">
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                borderRadius: '24px',
                backgroundColor: '#2F39B6',
                
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
