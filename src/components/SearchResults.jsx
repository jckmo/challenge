import React from 'react'
import uuid from 'react-uuid'

class SearchResults extends React.Component {
  nominateMovie = title => {
    this.props.nominateMovie(title)
  }

  createGenericPoster = title => {
    let splitTitle = title.Title.split(' ')
    let titleFirst = splitTitle[1].split('')[0].toUpperCase()
    let titleSecond
    if (splitTitle[1].split('')[0] !== undefined) {
      titleSecond = splitTitle[1].split('')[0].toUpperCase()
    }

    return (
      <div className='generic-poster'>
        {titleFirst}
        {titleSecond}
      </div>
    )
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
              {title.Poster === "N/A" ? this.createGenericPoster(title) : <img alt={`poster for ${title.Title}`} src={title.Poster} className='poster'/>}

              <button onClick={() => this.nominateMovie(title.Title)}>Nominate this title</button>
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults