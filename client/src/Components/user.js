import React from 'react'

export default function user(props) {
    console.log(props)
  return (
    <div>
      <h1>{props.user.username}</h1>
      <h5>{props.user.department}</h5>
    </div>
  )
}
