import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@material-ui/core/colors';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import StorageIcon from '@mui/icons-material/Storage';
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
    
         <Stack direction="row" spacing={0}>
         <ThemeProvider theme={theme}>
            <Button variant="contained" 
            sx={{boxShadow: 0, borderRadius: '0%', width: 180, fontSize:15}} 
            startIcon={<RestaurantIcon />}>
              무인주문 식당
            </Button>            
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%' , width: 180, fontSize:15 }} startIcon={<LocalCafeIcon />}>
              무인주문 카페
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%',width: 180, fontSize:15  }} startIcon={<LocalActivityIcon />}>
              티켓 발권기
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%', width: 180, fontSize:15  }} startIcon={<StorageIcon />}>
              datbase
            </Button>
            <Button variant="contained" sx={{boxShadow: 0, borderRadius: '0%',width: 180, fontSize:15  }} startIcon={<DeleteIcon />}>
              admin
            </Button>
          </ThemeProvider>    
        </Stack>
    

  );
}