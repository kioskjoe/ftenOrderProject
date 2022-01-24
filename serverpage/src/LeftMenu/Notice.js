import * as React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import { typography } from '@material-ui/system';


    const useStyles = makeStyles({
      home:{
          backgroundColor: "white",
          color: "black",
          marginTop: 100,
          padding:10,
          fontWeightMedium: 300,
          },
      typography: {
          "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
          "fontSize": 15,
          "fontWeightLight": 600,
           color: '#607d8b',  
        }
      })

    export default function Home (){
        const classes = useStyles();
    
    return(
       <Box className={classes.home}>
           <p className={classes.typography}>  안녕하세요 포텐터치입니다. 언제나 정성을 다하는 포텐터치가 되겠습니다. </p>
       </Box>
    );
}
   