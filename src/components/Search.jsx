import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
// import searchPosters from '../actions/searchPosters.js'
import {connect} from 'react-redux'

class Search extends React.Component {
  handleInput = title => {
    this.props.exSearch(title)
    // this.handlePosters()
  }

  // handlePosters = () => {
  //   if (this.props.searchTitles !== '') {
  //     this.props.searchTitles.map(title => this.props.searchPosters(title))
  //   }
  // }

  render() {
    return (
      <div className='search'>
        <label>OMDB Search</label><br/>
        <input type='text' placeholder='enter movie title here' onChange={(e) => this.handleInput(e.target.value)}/><br/>
        <SearchResults titles={this.props.searchTitles}/>
      </div>
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
    // searchPosters: (x) => dispatch(searchPosters(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)