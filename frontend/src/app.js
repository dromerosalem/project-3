import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './style.scss'

import Login from './components/Login'
import Register from './components/Register'
import Quizzes from './components/Quizzes'
import Question from './components/Question'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Comments from './components/Comments'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/question" component={Question} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path='/comment' component={Comments} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
