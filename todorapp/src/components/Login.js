import React, { useState, useEffect } from 'react';
import { makeStyles,withStyles, Grid, Paper,Avatar, TextField, Button, Typography, Link } from "@material-ui/core"
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from 'axios';
// class Login extends Component {
//     super()
//     // state = {
//     //     email: "",
//     //     password: ""
//     // };

//     render(){
//         return(

//         )

//     }

// }

export default function Login(props){
    const [login, setLogin] =  React.useState({

        userName: "",
        password: ""

    })
    function handleChange(event) {
        setLogin({
            ...login,
            [event.target.name] : event.target.value });
      };

      function handleSubmit(event) {
        event.preventDefault();
    
        const lguser = {
            username: login.userName,
            password: login.password,
        };
        axios.post(`http://localhost:8000/api/login/`, lguser )
          .then(res => {
            console.log(res.data.token);
            Cookies.set("token", res.data.token, {expires: 1/48})
            Cookies.set("user", res.data.user, {expires: 1/48})
            props.handleLogin(res.data.user, res.data.token, true)
          }).catch(err => console.log(err))
      };
    const paperstyle={
        padding:40,
        width:`50vh`,
        margin:`20px 0`,
    }

    const avatarstyle={
        backgroundColor:'blue'
    }
    return(
        <Grid>
            <Paper elevation={0} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
                    <h2>sign in</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                <Box mt={4} >
                <TextField label='username' name="userName" placeholder='Enter your username' fullWidth required mb="5rem" value={login.userName} onChange={handleChange}/>
                </Box>
                <Box mt={4} >
                <TextField label='password' name="password" placeholder='Enter your password' type='password' fullWidth required value={login.password} onChange={handleChange}/>
                </Box>
                <Box mt={5} mb={3} >
                    <Button type='submit' color='primary' variant="contained" fullWidth>Log in</Button>
                </Box>
                </form>
                <Typography>
                    <Link href="#" >Forgot Password?</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

