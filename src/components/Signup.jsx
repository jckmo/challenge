import React from 'react'

class Signup extends React.Component {

  render() {
    return (
      <div className='sign-up'>
        <form onChange={(e) => this.handleInput(e)} onSubmit={e => this.handleSubmit(e)}>
          <label>User Name</label><br/>
          <input id='user' placeholder='User Name'></input><br/>
          <label>Password</label><br/>
          <input type='password' id='pass' placeholder='Password'></input><br/>
          <label>Confirm Password</label><br/>
          <input type='password' id='confirm-pass' placeholder='Confirm Password'></input><br/>
          <button type='submit'>Signup</button>
        </form>
        
        <p className='login-link' onClick={() => this.props.history.push('/login')}>Already have an account? <span>Login</span></p>
      </div>
    )
  }
}

export default Signup