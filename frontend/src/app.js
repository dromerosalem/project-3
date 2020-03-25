import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './style.scss'

import Login from './components/Login'
import Register from './components/Register'
import Quizzes from './components/Quizzes'
import Profile from './components/Profile'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/quizzes" component={Quizzes} />
      <Route exact path="/profile" component={Profile}/>
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
