import React from 'react'
import SearchResults from './SearchResults.jsx'

import exSearch from '../actions/exSearch.js'
import nominateMovie from '../actions/nominateMovie.js'
// import addNomination from '../actions/addNomination.js'
import {connect} from 'react-redux'

class Search extends React.Component {
  handleInput = title => {
    
    this.props.exSearch(title)
  }

  render() {
    return (
      <div className='search'>
        <label>OMDB Search</label><br/>
        <input type='text' placeholder='enter movie title here' onChange={(e) => this.handleInput(e.target.value)}/><br/>
        <SearchResults nominateMovie={this.props.nominateMovie} nominatedMovies={this.props.nominatedMovies} titles={this.props.searchTitles}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTitles: state.searchTitles,
    nominatedMovies: state.nominatedMovies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    exSearch: (x) => dispatch(exSearch(x)),
    nominateMovie: (x) => dispatch(nominateMovie(x)),
    // addNomination: (x) => dispatch(addNomination(x))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)