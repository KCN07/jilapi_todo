import React, { Component } from "react";
import { makeStyles,withStyles, Grid, Paper,Avatar, TextField, Button, Typography, Link } from "@material-ui/core"
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

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

function Login(){

    const paperstyle={
        padding:20,
        height:`70vh`,
        width:280,
        margin:`20px auto`
    }

    const avatarstyle={
        backgroundColor:'blue'
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                    <Avatar style={avatarstyle}><LockOutlinedIcon/></Avatar>
                    <h2>sign in</h2>
                </Grid>
                <Box mt={4} >
                <TextField label='username' placeholder='Enter your username' fullWidth required mb="5rem"/>
                </Box>
                <Box mt={4} >
                <TextField label='password' placeholder='Enter your password' type='password' fullWidth required />
                </Box>
                <Box mt={5} mb={3} >
                    <Button type='submit' color='primary' variant="contained" fullWidth>Log in</Button>
                </Box>
                <Typography>
                    <Link href="#" >Forgot Password?</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default  Login