import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles, Grid, Paper, Avatar, TextField, Button, Typography, Link } from "@material-ui/core"
import Box from '@material-ui/core/Box';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import axios from 'axios';
import Cookies from "js-cookie";

export default function Reg(props) {
    const [reg, setReg] = React.useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirmPassword: ''
      })
      function handleChange(event) {
        setReg({
            ...reg,
            [event.target.name] : event.target.value });
      };
    
      function handleSubmit(event) {
        event.preventDefault();
    
        const formData = {
            username: reg.username,
            email: reg.email,
            first_name: reg.first_name,
            last_name: reg.last_name,
            password: reg.password,
        };
        if (reg.password !== reg.confirmPassword) {
            alert("Passwords don't match");}
            else{
        axios
            .post(`/api/register/`, formData)
            .then((res) => {
                console.log(res);
                Cookies.set("token", res.data.token, {expires: 1/48})
                Cookies.set("user", res.data.user, {expires: 1/48})
                props.handleLogin(res.data.user, res.data.token, true)
            }).catch((err)=>{
                console.log(err);
            })
        }
      };
    const paperstyle = {
        padding: 40,
        margin: `20px 0`,
    }

    const avatarstyle = {
        backgroundColor: 'blue'
    }
    
        return (
            
            <Grid>
                <Paper elevation={0} style={paperstyle}>
                    <Grid align='center'>
                        <Avatar style={avatarstyle}><AddCircleOutlineIcon /></Avatar>
                        <h2>sign Up</h2>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                    <Box mt={4} >
                        <TextField label='Username' name="username" placeholder='Enter your username' fullWidth required mb="5rem" value={reg.userName} onChange={handleChange} />
                    </Box>
                    <Box mt={4} >
                        <TextField label='Email' name="email" placeholder='Enter your email' fullWidth required mb="5rem" value={reg.email} onChange={handleChange} />
                    </Box>
                    <Box mt={3} >
                        <TextField label='Firstname' name="first_name" placeholder='Enter first name' fullWidth required mb="5rem" value={reg.first_name} onChange={handleChange} />
                    </Box>
                    <Box mt={3} >
                        <TextField label='Lastname' name="last_name" placeholder='Enter last name' fullWidth required mb="5rem" value={reg.last_name} onChange={handleChange} />
                    </Box>
                    <Box mt={3} >
                        <TextField label='Password' name="password" placeholder='Enter your password' type='password' fullWidth required value={reg.password} onChange={handleChange} />
                    </Box>
                    <Box mt={3} >
                        <TextField label='Confirm Password' name="confirmPassword" placeholder='confirm your password' type='password' fullWidth required value={reg.confirmPassword} onChange={handleChange} />
                    </Box>
                    <Box mt={2} >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="I accept the terms and conditions"
                        />
                    </Box>
                    <Box mt={3} mb={3} >
                        <Button type='submit' color='primary' variant="contained" fullWidth>Sign Up</Button>
                    </Box>
                    </form>
                </Paper>
            </Grid>
        
        )
    
    
}
