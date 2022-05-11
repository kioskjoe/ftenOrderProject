import React from 'react';
import { useState } from "react";
import { Grid, TextField, InputAdornment } from "@material-ui/core"
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import Axios from 'axios';
import {useNavigate} from "react-router";

const useStyles = makeStyles({
  root: {
    color: 'black',
    height: 25,
    paddingBottom: '50px',
    background: 'linear-gradient(45deg, #FE688B 30%, #FF8E53 90%',
  }
})

export default function AddMenufirst() {

  const [sortfirst, setSortfirst] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  console.log(sortfirst);

  Axios.defaults.withCredentials = true;

  const classes = useStyles();
  const navigate = useNavigate();

  // const addmenusort = () => { // 이건되는거야
  //   Axios.post( '/api/addmenu', 
  //   {sortfirst:sortfirst}
  //   )
  //   .then((response)=>{
  //     console.log(response);
      
  //     alert("왕왕왕")
  //     });
  // };

  const addmenusort = () => { // 이것도 되는 거야.
    fetch( '/api/menucatgo', {

      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {sortfirst:sortfirst}
      ),
    })
    
    .then((response)=>{
      console.log(response);
      // alert("왕왕왕")
      window.location.reload();
      });
  }

  // const userAuthenticated = () => {
  //   Axios.get("http://localhost:3000/isUserAuth", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //     },
  //   }).then((response) => {
  //     console.log(response);
  //   })
  // }

  return (
    <Grid container item xs={13}
      sm={12}
      alignItem="center"
      direction="row"
      justify="space-between"
      style={{ padding: 20, backgroundColor: "#cfd8dc" }}>

      <form onSubmit={addmenusort}>
        <div style={{ width: 700, fontSize:15}}>설정할실 메뉴에 케터고리를 설정하세요 예를 들어 디저트, 점심메뉴, 양식 등등 </div>
        <div style={{ display: "flex", flexDirection: "column", maxHeight: 100}}>
          {/* <TextField required style={{ width: 300, fontSize:15}} label="대분류 메뉴를 추가해라" margin="normal" onChange={(e) => { setSortfirst(e.target.value); }} /> */}
          
          <label className="la">대분류 선택 </label>
          <input style={{ width: 400, fontSize:15}}type="text" required onChange={(e) => { setSortfirst(e.target.value); }} /> <br />
          {/* <button style={{ width: 200, fontSize:15}} onClick={addmenusort}> 저장하기 </button> */}
          <button style={{ width: 200, fontSize:15}} type="submit"> 저장하기 </button>
        </div>
      </form>
  
    </Grid>
  )
}