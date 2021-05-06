import React from 'react'
import createUser from '../actions/createUser.js'
import fetchPrevNominations from '../actions/fetchPrevNominations.js'
import fetchPrevUserNominations from '../actions/fetchPrevUserNominations.js'
import {connect} from 'react-redux'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
      confirm: '',
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
    } else if (e.target.id === 'confirm') {
      this.setState({
        ...this.state,
        confirm: e.target.value
      })
    }
  }

  handleSubmit = (e) => { 
    e.preventDefault()
    const checkPassword = (password, confirm) => password === confirm

    const reroute = () => {
      debugger
    }

    const createUser = () => {
      this.props.history.push('/loading')
      this.props.createUser({userName: this.state.userName, password: this.state.password})
      this.setState({
        userName: '',
        password: ''
      })
      this.props.fetchPrevNominations()
      this.props.fetchPrevUserNominations()
      setTimeout(() => {
        this.props.history.push('/app')
      }, 500);
    }

    checkPassword(this.state.password, this.state.confirm) ? createUser() : reroute()
  }

  render() {
    return (
      <div className='sign-up'>
        <form onChange={(e) => this.handleInput(e)} onSubmit={e => this.handleSubmit(e)}>
          <label>User Name</label><br/>
          <input id='user' placeholder='User Name'></input><br/>
          <label>Password</label><br/>
          <input type='password' id='pass' placeholder='Password'></input><br/>
          <label>Confirm Password</label><br/>
          <input type='password' id='confirm' placeholder='Confirm Password'></input><br/>
          <button type='submit'>Signup</button>
        </form>
        
        <p className='login-link' onClick={() => this.props.history.push('/login')}>Already have an account? <span>Login</span></p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: (x,y) => dispatch(createUser(x,y)),
    fetchPrevNominations: () => dispatch(fetchPrevNominations()),
    fetchPrevUserNominations: () => dispatch(fetchPrevUserNominations())
  }
}

export default connect(null, mapDispatchToProps)(Signup)