import React from 'react';
import {Route, NavLink} from 'react-router-dom'
import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import UserList from './Components/Userlist'

function App() {
  function logout(){
    localStorage.removeItem('token');
    window.location.href = '/signin';
  }
  return (
    <div className="App">
    <nav className ="navbar">
      <NavLink to="/signin"> SignIn</NavLink>

      <NavLink to ='/signup'>SignUp</NavLink>

      <NavLink to ='/users'>Users</NavLink>
      <button type='button' onClick={logout}> Logout </button>

      
    </nav>
     <Route path = "/signin" component ={Login}></Route> 
     <Route path = "/signup" component ={Register}></Route> 
     <Route path = "/users" component ={UserList}></Route>
    </div>
  );

  
  
}

 


export default App;
