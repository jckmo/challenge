import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login.jsx'
import Loading from './components/Loading.jsx'

import appReducer from './reducers/appReducer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

  // dev
const BACKEND = `http://localhost:3001`
  // prod
// const BACKEND = `some heroku link`


const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Login}/>
      <Route path='/loading' component={Loading}/>
      <Route path='/app' component={App}/>
    </Router>
  </Provider>
  ,document.getElementById('root')
);

export {API, BACKEND}