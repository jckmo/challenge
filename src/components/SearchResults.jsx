import React from 'react'
import uuid from 'react-uuid'
// import Banner from 'react-js-banner'


class SearchResults extends React.Component {
  createGenericPoster = title => {
    let splitTitle = title.Title.split(' ')
    let titleFirst = splitTitle[0].split('')[0].toUpperCase()
    return (
      <div className='generic-poster'>
        {titleFirst}
      </div>
    )
  }

  checkNominations = title => {
    console.log(title.timesNominated)
    if (title.timesNominated === 1) {
      document.querySelector(`#${this.asId(title)}`).remove()
    } else if (title.timesNominated > 1) {
      document.querySelector(`#${this.asId(title)}Nominations`).innerText = `Nominations: ${title.timesNominated -= 1}`
    }
  }

  asId = title => {
    let titleArray = title.title.split('')
    let pullColons = titleArray.filter(char => char !== ':')
    let pullPoints = pullColons.filter(char => char !== '.')
    return pullPoints.join('').split(' ').join('')
  }

  removeNomination = title => {
    this.props.removeNomination(title)
    this.checkNominations(title)
  }

  belongsToUser = title => !!this.props.currentUserTitles.find(userTitle => userTitle.title === title.title)

  rollNominated = () => {
    return (
      <div className='nominated-titles'>
        {this.props.allNominatedTitles.length === 0 ? <h2>No Titles Nominated Yet</h2> : <h2>Nominated Titles</h2>}
        {this.props.allNominatedTitles.map(title => {
          return (
            <div key={uuid()} id={this.asId(title)} className={title.timesNominated >= 5 ? 'gold-movie' : 'movie'}>
              <div className='movie-info' key={uuid()}>
                <p id={`${this.asId(title)}Title`}>{title.title}</p>
                <p id={`${this.asId(title)}Year`}>{title.year}</p>
                <p id={`${this.asId(title)}Nominations`}>Nominations: {title.timesNominated}</p>
              </div>
              <img src={title.poster} alt={`poster for ${title.title}`} className='poster'/>

              {!this.belongsToUser(title) ? <button onClick={() => this.removeNomination(title)}>Remove Your Nomination</button> : null}
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

              <button onClick={() => this.props.nominateTitle(title)}>Nominate this title</button>
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults