import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { sizing } from '@material-ui/system';
import Login from "../components/Login";
import Reg from "../components/Reg";
import Nav from "../components/Nav"
import { Redirect } from "react-router-dom";
function Loginreg({user, token, isAuthenticated, handleLogin}) {
    const bstyle = {
        margin: '0 100px 0 10px',

    }
    const b2style = {
        margin: '0 10px 0 100px',

    }
    
    const index = {
        width:'100%',
        height:'100%',
        backgroundColor: 'lightblue'
    }
    if(isAuthenticated){
        return(<Redirect to="/"/>)
    }
    else
    return (
        
        <div className="index" style={index}>
            
            <Box
                display="flex"
                flexWrap="nowrap"
                justifyContent="center"
                p={2}
                mb={4}
                mt={15}
            >
                <Box pb={5} pl={3} pr={3}  style={bstyle} >
                    <Login user={user} token={token} isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>
                </Box>

                
                <div class="vl" style={{borderLeft: "1px solid gray", height: "550px", position: "absolute", left: "49%", marginLeft: "-3px", top: "100px"}}></div>

                <Box pb={5} pl={3} pr={3} style={b2style} >
                    <Reg user={user} token={token} isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>
                </Box>
            </Box>
        </div>
    )
}

export default Loginreg