import React, { Component } from "react";
import User from "./user";
import axios from "axios";
import requiresAuth from "./requiresAuth";

class Userlist extends Component {
  state = {
    users: []
  };

  render() {
      
    return (
      <div>
        <h1>Current Users</h1>
        

        <div>
          {this.state.users.map(u => (
            <User key ={u.id} user={u}/>
            // <li key={u.id}>{u.username}</li>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("token");

    const requestConfig = {
      headers: {
        authorization: token
      }
    };
    
    axios
      .get(endpoint, requestConfig)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.error("could not get", err);
      });
  }

  
}

export default requiresAuth(Userlist);
