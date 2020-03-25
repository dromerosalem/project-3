import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './style.scss'

import Login from './components/Login'
import Register from './components/Register'
import Quizzes from './components/Quizzes'
import Question from './components/Question'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/question" component={Question} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
