import React from 'react'
import {BACKEND} from '../index.js'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleInput = (e) => {
    if (e.target.id === 'user') {
      this.setState({
        ...this.state,
        userName: e.target.value,
      })
    } else if (e.target.id === 'pass') {
      this.setState({
        ...this.state,
        password: e.target.value
      })
    }
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    this.props.history.push('/loading')
    fetch(`${BACKEND}/sessions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          userName: this.state.userName,
          password: this.state.password
        }
      })    
    })
    .then(response => response.json())
    .then(jsonResponse => {
      sessionStorage.setItem('userId', jsonResponse.id)
      this.props.history.push('/app')
    })
  }

  render() {
    return (
      <form onChange={(e) => this.handleInput(e)} onSubmit={e => this.handleSubmit(e)}>
        <label>User Name</label>
        <input id='user' placeholder='User Name'></input>
        <label>Password</label>
        <input type='password' id='pass' placeholder='Password'></input>
        <button type='submit'>Login</button>
      </form>   
    )
  }
}

export default Login