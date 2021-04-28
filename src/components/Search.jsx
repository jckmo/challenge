import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
import {connect} from 'react-redux'

class Search extends React.Component {
  handleInput = title => {
    this.props.exSearch(title)
  }

  render() {
    return (
      <>
        <label>OMDB Search</label><br/>
        <input type='text' placeholder='enter movie title here' onChange={(e) => this.handleInput(e.target.value)}/><br/>
        <SearchResults titles={this.props.searchTitles}/>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTitles: state.searchTitles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    exSearch: (x) => dispatch(exSearch(x)),
    // resetSearch: () => dispatch(resetSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)