import React, { Component, useState, useEffect } from "react";
import './App.css';
import Loginreg from "./components/Loginreg";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Cookies from "js-cookie";
import Nav from "./components/Nav";
import Alltodos from "./components/Alltodos";
import Allschedules from "./components/Allschedules";
import Addtodo from "./components/Addtodo";
import Addschedule from "./components/Addschedule";


function App() {
    const [token, setToken] = useState("")
    const [user, setUser] = useState("")
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const handleLogin = (user, token, isAuthenticated) => {
      setToken(token);
      setUser(user);
      setisAuthenticated(isAuthenticated);

    }

    useEffect(() => {
       let token = Cookies.get("token");
       let user = Cookies.get("user");
       if(token && user){
         setToken(token);
         setUser(user);
         setisAuthenticated(true);
       }
    }, [])

    return (
      <Router>
        <div className="App" >
          <Nav />
          <Switch>
          <Route path="/account" >
            <Loginreg user={user} token={token} isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>
          
          </Route>
      
          <Route path="/" exact>
            <Dashboard user={user} token={token} isAuthenticated={isAuthenticated} handleLogin={handleLogin}/>
          </Route> 

          <Route path="/alltodos" component={Alltodos}/>

          {/* <Route path="/allschedules" component={Allschedules}/>

          <Route path="/addtodo" component={Addtodo}/>

          <Route path="/addschedule" component={Addschedule}/> */}

          {/* <Route path="/edittodo" component={Edittodo}/>

          <Route path="/editschedule" component={Editschedule}/> */}
          </Switch>
          
        </div>
      </Router>
      
    );

}

export default App;
