import {POSTER_API} from '../index.js'
let fs = require('fs')


const searchPosters = title => {
  return dispatch => {
    fetch(`${POSTER_API}&s=${title}`)
      .then(response => response.text())
      .then(textResponse => {
        console.log(`title: ${title.Title }`)
      })
    }
}

export default searchPosters