import React from 'react'

class SearchResults extends React.Component {

  renderTitles = () => {
    if (this.props.titles !== "") {
      this.props.titles.map(title => {
        return(
          <div>
            <p>{title.Title}</p>
            <p>{title.Year}</p>
          </div>
        )
      })
    }
  }

  componentDidUpdate = () => {
    this.render()
  }

  render() {

    return (
      <>
      {this.props.titles === "" ? null : this.props.titles.map(title => <div><p>{title.Title}</p><p>{title.Year}</p></div>)}
      </>
    )
  }
}

export default SearchResults