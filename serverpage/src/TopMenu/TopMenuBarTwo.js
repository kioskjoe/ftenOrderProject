import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@material-ui/core/colors';
// const commonStyles = {
// //   bgcolor: 'background.paper',
// //   borderColor: 'text.primary',
// //   m: 1,
// //   border: 1,
// //   width: '5rem',
// //   height: '5rem',
// // };


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: blue[400],
      contrastText: "#fff" //button text white instead of black
    },
    overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
    }

  },
});

export default function IconLabelButtons() {
  return (
    
         <Stack direction="row" spacing={2}>
         <ThemeProvider theme={theme}>
            <Button variant="contained" 
            sx={{boxShadow: 0, borderRadius: '0%' }} 
            startIcon={<DeleteIcon />}>
              customer
            </Button>            
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%'  }} startIcon={<DeleteIcon />}>
              4tentouch
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%' }} startIcon={<DeleteIcon />}>
              customer
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%' }} startIcon={<DeleteIcon />}>
              datbase
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%' }} startIcon={<DeleteIcon />}>
              admin
            </Button>
          </ThemeProvider>    
        </Stack>
    

  );
}