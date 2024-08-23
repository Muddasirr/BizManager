import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const LoginForm = () => {
 
  return (
    <Box display='flex'>
      <Box bgcolor='#AED1E1' sx={{borderTopRightRadius:'100px',borderBottomRightRadius:'100px'}}  height='100vh' width={'30vw'}>
        
      </Box>
      <Box   width={'70vw'} height='100vh' >
        <Box m={20}  alignItems='center' justifyContent='center'width='35vw' height='50vh'>
        <Box textAlign="center" mb={2}>
          <Typography variant="h5">
            Welcome
          </Typography>
        </Box>
        <Box textAlign="center" mb={2}>
          <Typography variant="body1">
            Login through email and password
          </Typography>
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            
          />
        </Box>
        <Box textAlign="right" mb={2}>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Box>
        <Box>
          <Button
            fullWidth
            variant="contained"
            type="submit"
           
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
