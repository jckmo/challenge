import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
import nominateTitle from '../actions/nominateTitle.js'
import fetchPrevNominations from '../actions/fetchPrevNominations.js'
import logoutUser from '../actions/logoutUser.js'
import removeNomination from '../actions/removeNomination.js'

import {connect} from 'react-redux'

class Search extends React.Component {
  handleInput = title => {
    this.props.exSearch(title)
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
        <SearchResults fetchPrevNominations={this.props.fetchPrevNominations} nominateTitle={this.props.nominateTitle} allNominatedTitles={this.props.allNominatedTitles} currentUserTitles={this.props.currentUserTitles} titles={this.props.searchTitles} removeNomination={this.props.removeNomination}/>
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
    nominateTitle: (x) => dispatch(nominateTitle(x)),
    fetchPrevNominations: () => dispatch(fetchPrevNominations()),
    logoutUser: () => dispatch(logoutUser()),
    removeNomination: (x) => dispatch(removeNomination(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)