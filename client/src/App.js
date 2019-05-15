import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <div className="App">
    <nav>
      <NavLink to="/login"> Login</NavLink>
      <NavLink to ='/register'>SignUp</NavLink>
    </nav>
     <Route path = "/login" component ={Login}></Route> 
     <Route path = "/register" component ={Register}></Route> 
    </div>
  );
}

export default App;
