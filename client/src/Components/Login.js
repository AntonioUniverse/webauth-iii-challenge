import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
   state = {
       username: 'sam',
       password: 'pass',
       
   }





    
  render() {
    return (
      <div>
       <h2>Login</h2>
       <div>
           <form onSubmit={this.handleSubmit}>
           <div>
               <input id ="username" 
               placeholder = "username"
               type = "text"
               value = {this.state.username}
               onChange = {this.handleChanges}
               />
             </div>
            <div>
                <input id ="password" 
                placeholder = "password"
               type = "text"
               value = {this.state.password}
               onChange = {this.handleChanges}
               />
               </div>

           
               <button type='submit'> Login </button>
           
           </form>
        </div>
        <div>
        
        </div>
      </div>
    )
  }
  handleChanges = e =>{
    const {id ,value} = e.target
    this.setState({[id]:value})
}
handleSubmit = e =>{
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/login'


    axios.post(endpoint,this.state)
    .then(res => {
        console.log(res)
    }).catch( err =>{
        console.error('Could not log in', err )
    })
}
}

