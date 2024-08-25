import React from 'react';
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

const MyStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: 'Client',
      content: (
        <Box sx={{ p: 3, width: '100%',background:'#F6F6F6', maxWidth: 500,borderRadius:3 }}>
          <Typography variant="h6" gutterBottom align="center">
            Create New Client
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom align="center">
            Here you will tell us the client and provider for the new company.
          </Typography>

          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              select
              label="Client Name"
              variant="outlined"
              required
              margin="normal"
            >
              <MenuItem value="">
                <em>Select Client</em>
              </MenuItem>
            </TextField>

            <TextField
              fullWidth
              select
              label="Select Provider"
              variant="outlined"
              required
              margin="normal"
            >
              <MenuItem value="">
                <em>Select Provider</em>
              </MenuItem>
            </TextField>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: '#B0C4DB', mr: 1 }}>
                Add Company
              </Button>
              <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: '#2F39B6', ml: 1 }}>
                Add Files
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
        <Box sx={{ p: 3, width: '100%', maxWidth: 500 }}>
          <Typography variant="h6" gutterBottom align="center">
            Select File Type
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom align="center">
            Here you will select the file type and upload the necessary files.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#EBECF2', borderColor: '#EBECF2', mr: 1 }}>
              Client 1
            </Button>
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#EBECF2', borderColor: '#EBECF2', ml: 1 }}>
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
          >
            <MenuItem value="">
              <em>Select File Type</em>
            </MenuItem>
          </TextField>

          <Box sx={{ mt: 2, p: 2, border: '1px dashed grey', textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              Click to upload or drag and drop
            </Typography>
            <Typography variant="caption" color="textSecondary">
              PDFs (max. 800x400px)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button fullWidth variant="outlined" sx={{ backgroundColor: '#B0C4DB', borderColor: '#B0C4DB', mr: 1 }}>
              Back
            </Button>
            <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: '#2F39B6', ml: 1 }}>
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
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 5,background:'white' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
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
  );
};

export default MyStepper;
