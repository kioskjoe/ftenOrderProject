import React from 'react';
import { useState } from "react";
import Loginlogo from "../imges/loginlogo.png"
import { Grid, TextField, InputAdornment } from "@material-ui/core"
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import Axios from 'axios';
import {useNavigate} from "react-router";
// import { response } from 'express';

// const id = document.querySelector("#id"),
//   psword = document.querySelector("#psword"),
//   registerBtn = document.querySelector("#button");

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
  const navigate = useNavigate();

  const login = () => {
    Axios.post( '/api/login', {
      name: username,
      pw: password
    }) .then((response)=>{
      console.log(response);
        if (!response.data.auth){
          setLoginStatus(false);
          console.log("투투투투")
          alert("틀리데요 ~")
          // history.push("/");
        } else {
          localStorage.setItem("token", "Bearer" + response.data.token);
          setLoginStatus(true);
          // navigate("www.google.com");
          // navigate("/customeradd");
          navigate("/clientadd");
          // navigate("/");
          console.log("티티팉ㅌ니 ")
        }
      });
  };


  const userAuthenticated = () => {
    Axios.get("http://localhost:3000/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
    })
  }

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

        <TextField label="name" margin="normal" onChange={(e) => { setUsername(e.target.value); }} />
        <TextField label="pw" margin="normal" onChange={(e) => { setPassword(e.target.value); }} />

        <button onClick={login}> login </button>

        <div style={{ height: 20 }} />

        {/* <Button className={classes.root} onClick={login}> log in 해 </Button> */}
      </div>
      <div />
    </Grid>
  )
}
