import React from 'react'
import uuid from 'react-uuid'

class SearchResults extends React.Component {
  nominateMovie = (title) => {
    this.props.nominateMovie(title)
    console.log(this.props.nominatedMovies)
    // this.updateNominations()
  }

  // updateNominations = () => {
  //   console.log(this.props.nominatedMovies)
  // }

  checkNominations = title => {
    // let filteredTitles = this.props.nominatedMovies.filter(nominated => title === nominated)

  }

  render() {
    return (
      <div className='search-results'>
        {this.props.titles === "" ? null : this.props.titles.map(title => {
          return (
            <div className='movie' key={uuid()}>
              <p key={uuid()}>
                {title.Title}
              </p>
              <p key={uuid()}>
                {title.Year}
              </p>
              <button onClick={() => this.nominateMovie(title.Title)}>Nominate this title</button>

              {/* {this.checkNominations(title.Title)} */}
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults