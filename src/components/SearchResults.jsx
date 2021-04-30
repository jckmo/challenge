import React from 'react'
import uuid from 'react-uuid'

class SearchResults extends React.Component {
  nominateTitle = title => {
    this.props.nominateTitle(title)
    console.log(this.props.nominatedTitles)
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

  rollNominated = () => {
    return (
      <div className='nominated-titles'>
        {this.props.nominatedTitles.length === 0 ? <h2>No Titles Nominated Yet</h2> : <h2>Nominated Titles</h2>}
        {this.props.nominatedTitles.map(title => {
          return (
            <div key={uuid()}>
              <h3>{title.title}</h3>
              <h5>{title.year}</h5>
              <h5>Nominations: {title.timesNominated}</h5>
              <img src={title.poster} alt={`poster for ${title.title}`} className='poster'/>
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div className='search-results'>
        {this.props.titles === "" ? this.rollNominated() : this.props.titles.map(title => {
          return (
            <div className='movie' key={uuid()}>
              <div className='movie-info'>
                  <p key={uuid()}>
                    {title.Title}
                  </p>
                  <p key={uuid()}>
                    {title.Year}
                  </p>
                </div>
              {title.Poster === "N/A" ? this.createGenericPoster(title) : <img alt={`poster for ${title.Title}`} src={title.Poster} className='poster'/>}

              <button onClick={() => this.nominateTitle(title)}>Nominate this title</button>
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults