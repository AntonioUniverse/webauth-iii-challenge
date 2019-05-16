import React from 'react'

export default function(Component) {
    return class Authenticated extends React.Component{
        render(){
            const notLoggedIn =  <h1>Please Sign In To Continue...</h1>
            const token = localStorage.getItem('token')
            return <div>
            { token ? <Component {...this.props}/> : notLoggedIn}
        </div>
    }
}
}