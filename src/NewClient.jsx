import React from 'react';
import Sidebar from './Sidebar';
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
  TextField,
  MenuItem,
} from '@mui/material';
import { AccountBox, Group, FolderOpen, Logout,ArrowUpwardOutlined,CircleRounded, CircleOutlined } from '@mui/icons-material';
import Navbar from './NavBar';

const MyStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: 'Client',
      content: (
        <Box sx={{ pt:5,pb:10,pr:10,pl:10, width: '100%',background:'#F6F6F6', maxWidth: 500,borderRadius:3 }}>
          <Typography variant="h6" fontWeight='600' gutterBottom align="center">
            Create New Client
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom align="center">
            Here you will tell us the client and provider for the new company.
          </Typography>

          <Box  sx={{ mt: 2 }}>
            <TextField
              fullWidth
              
              label="Client Name"
              variant="outlined"
              required
              margin="normal" 
              InputProps={{
                sx: {
                  height: 40,
                  fontSize: 14,
                  borderRadius:2,
                  background:'white'

                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: 14,

                },
              }}/>
              
            

            <TextField
              fullWidth
              select
              label="Select Provider"
              variant="outlined"
              required
              margin="normal"
              InputProps={{
                sx: {
                  height: 40,
                  fontSize: 14,
                  borderRadius:2,
                  background:'white'

                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: 14,

                },}}
            >
              <MenuItem value="">
                content
              </MenuItem>
            </TextField>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
              <Button  fullWidth variant="contained"  sx={{ background: '#AED1E1', mr: 1,textTransform:'none',borderRadius:5 }}>
               <Typography fontSize='small' color='black'>Add Company</Typography> 
              </Button>
              <Button fullWidth variant="contained"  sx={{ backgroundColor: '#2F39B6', ml: 1,textTransform:'none',borderRadius:5 }}>
              <Typography fontSize='small' >Add Files</Typography> 
              </Button>
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      label: 'Company',
      content: (
        <Typography>
          {/* Step 2 is intentionally left empty */}
        </Typography>
      ),
    },
    {
      label: 'File Type',
      content: (
        <Box sx={{ p: 3, width: '100%', maxWidth: 500,background:'#F6F6F6' }}>
          <Typography variant="h6" fontWeight='bold' gutterBottom align="center">
            Select File Type
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom align="center">
            Here you will select the file type and upload the necessary files.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#EBECF2', borderColor: '#EBECF2', mr: 1,p:3,textTransform:'none' }}>
              Client 
            </Button>
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#EBECF2', borderColor: '#EBECF2', ml: 1,p:3,textTransform:'none' }}>
              Test Company
            </Button>
          </Box>

          <TextField
            fullWidth
            select
            label="Select File Type"
            variant="outlined"
            required
            margin="normal"
            sx={{ mt: 2 }}
            InputProps={{
                sx: {
                  height: 40,
                  fontSize: 14,
                  borderRadius:2,
                  background:'white'

                },
              }}
              InputLabelProps={{
                sx: {
                  fontSize: 14,

                },}}
          >
            <MenuItem value="">
              <em>Select File Type</em>
            </MenuItem>
          </TextField>

          <Box sx={{ mt: 2, p: 2, background:'white', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              Click to upload or drag and drop
            </Typography>
            <Typography variant="caption" color="textSecondary">
              PDFs (max. 800x400px)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#E7E8F4',textTransform:'none', borderColor: '#B0C4DB', mr: 1,borderRadius:5 }}>
              Back
            </Button>
            <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: '#2F39B6', ml: 1,textTransform:'none',borderRadius:5 }}>
              Start Process
            </Button>
          </Box>
        </Box>
      ),
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <Box display='flex'>

      <Box>
        <Sidebar/>
      </Box>
<Box width='100%'>
  <Navbar/>
    <Box sx={{  width:'50%',margin: 'auto', mt: 5,background:'F' }}>
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel >{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px',
          mt: 2,
        }}
      >
        {steps[activeStep].content}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mt: 1, mr: 1 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ mt: 1, mr: 1 }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, mt: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    </Box>
    </Box>
    
  );
};

export default MyStepper;
