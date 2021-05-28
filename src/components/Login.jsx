import React from 'react'
import login from '../actions/login.js'
import fetchPrevNominations from '../actions/fetchPrevNominations.js'
import fetchPrevUserNominations from '../actions/fetchPrevUserNominations.js'
import {connect} from 'react-redux'


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: ''
    }
  }

  componentDidMount = () => {
    // eslint-disable-next-line
    sessionStorage.length === 1 ? setTimeout(() => this.props.history.push('/app'), 1000) : null
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
    this.props.login(this.state.userName, this.state.password)
    this.setState({
      userName: '',
      password: ''
    })
    this.props.fetchPrevNominations()
    this.props.fetchPrevUserNominations()
    setTimeout(() => this.props.history.push('/app'), 5000);
  }

  showNote = () => alert('You can make your own account if you would like, or you can use my seed account to view this application. \n\nusername: "Master"\npassword: "1111"')

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
        <p>A note to employers <button onClick={this.showNote}>click me</button></p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (x,y) => dispatch(login(x,y)),
    fetchPrevNominations: () => dispatch(fetchPrevNominations()),
    fetchPrevUserNominations: () => dispatch(fetchPrevUserNominations())
  }
}

export default connect(null, mapDispatchToProps)(Login)