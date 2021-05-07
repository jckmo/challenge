import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
import nominateTitle from '../actions/nominateTitle.js'
import fetchPrevNominations from '../actions/fetchPrevNominations.js'
import fetchPrevUserNominations from '../actions/fetchPrevUserNominations.js'
import logoutUser from '../actions/logoutUser.js'
import removeNomination from '../actions/removeNomination.js'

import {connect} from 'react-redux'

class Search extends React.Component {
  componentDidMount = () => {
    this.props.fetchPrevNominations()
    this.props.fetchPrevUserNominations()
  }
  
  handleInput = title => {
    this.props.exSearch(title)
  }

  nominateTitle = (title, source) => {
    this.props.nominateTitleState(title, source)
    this.props.fetchPrevNominations()
    this.props.fetchPrevUserNominations()
    this.props.history.push('/')
  }
  
  removeNomination = (title, source) => {
    this.props.removeNominationState(title, source)
    this.props.fetchPrevNominations()
    this.props.fetchPrevUserNominations()
    this.props.history.push('/')
  }

  logoutUser = () => {
    this.props.history.push('/loading')
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <div className='search'>
            <label>OMDB Search</label><br/>
          <div className='search-bar'>
            <input type='text' placeholder='enter movie title here' onChange={(e) => this.handleInput(e.target.value)}/>
            <div className='user-info' onClick={(x) => this.logoutUser(this)}>Logout</div>
          </div>
        </div>    
        <SearchResults fetchPrevUserNominations={this.props.fetchPrevNominations} fetchPrevNominations={this.props.fetchPrevNominations} nominateTitle={this.nominateTitle} allNominatedTitles={this.props.allNominatedTitles} currentUserTitles={this.props.currentUserTitles} titles={this.searchTitles} removeNomination={this.removeNomination}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTitles: state.searchTitles,
    allNominatedTitles: state.allNominatedTitles,
    currentUserTitles: state.currentUserTitles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    exSearch: (x) => dispatch(exSearch(x)),
    nominateTitleState: (x,y) => dispatch(nominateTitle(x,y)),
    fetchPrevNominations: () => dispatch(fetchPrevNominations()),
    fetchPrevUserNominations: () => dispatch(fetchPrevUserNominations()),
    logoutUser: () => dispatch(logoutUser()),
    removeNominationState: (x,y) => dispatch(removeNomination(x,y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)