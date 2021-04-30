import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
import nominateTitle from '../actions/nominateTitle.js'
import fetchPrevNominations from '../actions/fetchPrevNominations.js'

import {connect} from 'react-redux'

class Search extends React.Component {
  handleInput = title => {

    this.props.exSearch(title)
  }

  render() {
    return (
      <div className='search'>
        <div className='search-bar'>
          <label>OMDB Search</label><br/>
          <input type='text' placeholder='enter movie title here' onChange={(e) => this.handleInput(e.target.value)}/><br/>
        </div>
        <SearchResults fetchPrevNominations={this.props.fetchPrevNominations} nominateTitle={this.props.nominateTitle} nominatedTitles={this.props.nominatedTitles} titles={this.props.searchTitles}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTitles: state.searchTitles,
    nominatedTitles: state.nominatedTitles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    exSearch: (x) => dispatch(exSearch(x)),
    nominateTitle: (x) => dispatch(nominateTitle(x)),
    fetchPrevNominations: () => dispatch(fetchPrevNominations())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)