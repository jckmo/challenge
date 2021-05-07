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

  checkNominations = (title, source) => {
    if (title.timesNominated === 1) {
      document.querySelector(`#${this.asId(title, source)}`).remove()
      this.props.removeNominationFromState(title)
    } else if (title.timesNominated > 1) {
      document.querySelector(`#${this.asId(title, source)}Nominations`).innerText = `Nominations: ${title.timesNominated -= 1}`
    }
  }

  nominateTitle = (title, source) => {
    this.props.nominateTitle(title, source)
    let button = document.querySelector(`button#${this.asId(title, source)}`)
    button.innerText = 'Remove Your Nomination'
    button.addEventListener('click', () => this.removeNomination(title, source))
  }

  asId = (title, source)=> {
    let titleArray
    source === 'fromNoms' ? titleArray = title.title.split('') : titleArray = title.Title.split('')
    let pullColons = titleArray.filter(char => char !== ':')
    let pullPoints = pullColons.filter(char => char !== '.')
    return pullPoints.join('').split(' ').join('')
  }

  removeNomination = (title, source) => {
    this.props.removeNomination(title, source)
    let button = document.querySelector(`button#${this.asId(title, source)}`)
    button.innerHTML = 'Nominate this title'
    button.addEventListener('click', () => this.nominateTitle(title, source))
    this.checkNominations(title, source)
  }

  belongsToUser = (searchTitle, source) => {
    if (source === 'fromSearch') {
      return this.props.currentUserTitles.find(title => title.title === searchTitle.Title)
    } else if (source === 'fromNoms') {
      return this.props.currentUserTitles.find(title => title.title === searchTitle.title)
    }
  }

  isNominated = searchTitle => this.props.allNominatedTitles.find(title => title.title === searchTitle.Title)

  findNominationCount = searchTitle => this.props.allNominatedTitles.find(title => title.title === searchTitle.Title).timesNominated

  rollNominated = () => {
    let source = 'fromNoms'
    return (
      <div className='nominated-titles'>
        {this.props.allNominatedTitles.length === 0 ? <h2>No Titles Nominated Yet</h2> : <h2>Nominated Titles</h2>}
        {this.props.allNominatedTitles.map(title => {
          // debugger
          return (
            <div key={uuid()} id={this.asId(title, source)} className={title.timesNominated >= 5 ? 'gold-movie' : 'movie'}>
              <div className='movie-info' key={uuid()}>
                <p id={`${this.asId(title, source)}Title`}>{title.title}</p>
                <p id={`${this.asId(title, source)}Year`}>{title.year}</p>
                <p id={`${this.asId(title, source)}Nominations`}>Nominations: {title.timesNominated}</p>
              </div>
              <img src={title.poster} alt={`poster for ${title.title}`} className='poster'/>

              {!!this.belongsToUser(title, source) ? <button id={this.asId(title, source)} onClick={() => this.removeNomination(title, source)}>Remove Your Nomination</button> : <button  id={this.asId(title, source)} onClick={() => this.nominateTitle(title, source)}>Nominate this title</button>}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    let source = 'fromSearch'
    return (
      <div className='search-results'>
        {this.props.titles === "" ? this.rollNominated() : this.props.titles.map(title => {
          return (
            <div className={this.isNominated(title) && this.findNominationCount(title) >= 5 ? 'gold-movie' : 'movie'} key={uuid()}>
              <div className='movie-info'>
                  <p id={this.asId(title, source)}key={uuid()}>
                    {title.Title}
                  </p>
                  <p id={this.asId(title, source)}key={uuid()}>
                    {title.Year}
                  </p>
                  {this.isNominated(title) ? <p key={uuid()}>Nominations: {this.findNominationCount(title)}</p> : null}
                </div>
              {title.Poster === "N/A" ? this.createGenericPoster(title) : <img alt={`poster for ${title.Title}`} src={title.Poster} className='poster'/>}    
              {!this.belongsToUser(title, source) ? <button id={this.asId(title, source)} onClick={() => this.nominateTitle(title, source)}>Nominate this title</button> : <button id={this.asId(title, source)} onClick={() => this.removeNomination(title, source)}>Remove Your Nomination</button> }
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults