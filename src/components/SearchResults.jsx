import React from 'react'

class SearchResults extends React.Component {
  render() {
    return (
      <>
      {this.props.titles === "" ? null : this.props.titles.map(title => <div><p>{title.Title}</p><p>{title.Year}</p></div>)}
      </>
    )
  }
}

export default SearchResults