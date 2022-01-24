import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdbIcon from '@mui/icons-material/Adb';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function BasicButtonGroup() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <ThemeProvider theme={theme}>
          <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button>ONEFuuuuuuuTEN</Button>
          <Button startIcon={<AdbIcon/>}>Android</Button>
          <Button startIcon={<AccessAlarmIcon/>}>Thㄹㄹㄹree</Button>
          <Button>Thmjkjㄹㄹㄹree</Button>
          <Button>Thㄹㄹㄹree</Button>
          <Button>Thㄹㄹㄹree</Button>
      </ButtonGroup>  
      <div>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
      </div> 
      <Box
      sx={{
        width: 700,
    
        maxWidth: '100%',
      }}
      >
      <TextField fullWidth label="사업자등록증 번호를 입력해주세요" id="fullWidth" />
      <TextField fullWidth label="사업장 주소를 입력해주세요" id="fullWidth" />
      
       </Box> 

       <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None      </em>
              </MenuItem>
              <MenuItem value={10}>Twenty       </MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
          </FormControl>
        </div>

       

       

       
    </ThemeProvider>

  );
}