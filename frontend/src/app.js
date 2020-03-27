import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './style.scss'

import Login from './components/Login'
import Register from './components/Register'
import Quizzes from './components/Quizzes'
import MultipleChoice from './components/MultipleChoice'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import TrueOrFlase from './components/TrueOrFalse'
import DisplayScore from './components/DisplayScore'

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/multiple-choice" component={MultipleChoice} />
      <Route excat path="/true-or-false" component={TrueOrFlase} />
      <Route exact path="/display-score" component={DisplayScore} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
