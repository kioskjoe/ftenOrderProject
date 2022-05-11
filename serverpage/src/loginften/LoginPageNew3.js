import React from 'react';
import { useState } from "react";
import Loginlogo from "../imges/loginlogo.png"
import { Grid, TextField, InputAdornment } from "@material-ui/core"
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import Axios from 'axios';
// import { response } from 'express';


const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  registerBtn = document.querySelector("#button");

const useStyles = makeStyles({
  root: {
    color: 'black',
    height: 25,
    paddingBottom: '50px',

    background: 'linear-gradient(45deg, #FE688B 30%, #FF8E53 90%',
  }
})

export default function LoginPageNew() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const classes = useStyles();

  // console.log(username, password);

  // const login = () => {
  //   Axios.post( '/api/login', {
  //     name: username,
  //     pw: password
  //   }) .then((response)=>{
  //     console.log(response);
  //     if (!response.date.auth){
  //       setLoginStatus(false);
  //     } else {
  //       localStorage.setItem("token", "Bearer" + reponse.date.token);
  //       setLoginStatue(true);
  //     }
  //   });
  // };

  const login = () => {
    Axios.post( '/api/login', {
      name: username,
      pw: password
    }) .then((response)=>{
      console.log(response);
        if (response.data.message){
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data.comname)
        }
      });
  };

  // const login = () => {

  //   const req = {
  //     name: username,
  //     pw: password
  //   }

  //   // console.log(username, password);

    // fetch('http://localhost:3000/api/login', {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(req)

    // })
    
    // .then (( response) =>{
    //   if (response.data.message){
    //     setLoginStatus(response.data.message);
    //   } else {
    //     setLoginStatus(response.data.comname)
    //   }
    // });
    // };

  //   .then (( response) =>{
  //     console.log(response);  
  //   });  
  // };

  return (
    <Grid container item xs={3}
      sm={5}
      alignItem="center"
      direction="column"
      justify="space-between"
      style={{ padding: 200 }}>

      <div />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Grid container justify="center">
          <img src={Loginlogo} width={100} alt="logo" />
        </Grid>

        {/* <TextField label="name" margin="normal"  />
        <TextField label="pw" margin="normal" /> */}

        <TextField label="name" margin="normal" onChange={(e) => { setUsername(e.target.value); }} />
        <TextField label="pw" margin="normal" onChange={(e) => { setPassword(e.target.value); }} />

        {/* 
        <h1> log in </h1>
        <input type="text" placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }} />

        <input type="password" placeholder="pw"
          onChange={(e) => {
            setPassword(e.target.value);
          }} /> */}

        <button onClick={login}> login </button>



        {/* <h1> log in </h1>
        <input type="text" placeholder="name"/>

        <input type="password" placeholder="pw"/>

 */}


        <div style={{ height: 20 }} />

        {/* <Button className={classes.root} onClick={login}> log in 해 </Button> */}
      </div>
      <div />
    </Grid>
  )
}
