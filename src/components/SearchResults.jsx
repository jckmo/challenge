import React from 'react'
import uuid from 'react-uuid'

class SearchResults extends React.Component {
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
            </div>
          )}  
        )}
      </div>
    )
  }
}

export default SearchResults