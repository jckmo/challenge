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

  componentDidMount = () => {
    // eslint-disable-next-line
    sessionStorage.length === 1 ? this.props.history.push('/app') : null
  }

  handleInput = (e) => {
    let pass = document.querySelector('#pass')
    let confirm = document.querySelector('#confirm')
    let passCheck = document.querySelector('.password-check')

    passCheck.style.visibility = 'hidden'
    pass.style.border = ''
    confirm.style.border = ''

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
      let pass = document.querySelector('#pass')
      let confirm = document.querySelector('#confirm')
      let passCheck = document.querySelector('.password-check')

      passCheck.style.visibility = 'visible'
      pass.style.border = '2px solid darkred'
      confirm.style.border = '2px solid darkred'

      pass.value = ''
      confirm.value = ''
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
          <input type='password' id='pass' placeholder='Password'></input><span className='password-check'>Please check passwords</span><br/>
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