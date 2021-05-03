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
      <div className='login'>
        <form onChange={(e) => this.handleInput(e)} onSubmit={e => this.handleSubmit(e)}>
          <label>User Name</label><br/>
          <input id='user' placeholder='User Name'></input><br/>
          <label>Password</label><br/>
          <input type='password' id='pass' placeholder='Password'></input><br/>
          <button type='submit'>Login</button>
        </form>   

         <p className='sign-up-link' onClick={() => this.props.history.push('/')}>Don't have an account? <span>Signup</span></p>
      </div>
    )
  }
}

export default Login