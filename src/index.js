import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/media-queries.scss';

import Login from './components/Login.jsx'
import Loading from './components/Loading.jsx'
import Signup from './components/Signup.jsx'
import Search from './components/Search.jsx'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import appReducer from './reducers/appReducer.js'

const API = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

// dev
// const BACKEND = `http://localhost:3001`
// prod
const BACKEND = `https://omdbs-search.herokuapp.com`


const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/loading' component={Loading}/>
      <Route path='/app' component={Search}/>
    </Router>
  </Provider>
  ,document.getElementById('root')
);

export {API, BACKEND}