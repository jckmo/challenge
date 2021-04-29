import React from 'react'
import uuid from 'react-uuid'

class SearchResults extends React.Component {
  render() {
    return (
      <>
      {this.props.titles === "" ? null : this.props.titles.map(title => {
        return (
          <div>
            <p key={uuid()}>
              {title.Title}
            </p>
            <p key={uuid()}>
              {title.Year}
            </p>
          </div>
        )}  
      )}
      </>
    )
  }
}

export default SearchResults