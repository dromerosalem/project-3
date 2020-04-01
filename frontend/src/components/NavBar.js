import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../lib/auth'

class NavBar extends React.Component {

  handleLogout() {
    auth.logout()
    this.props.history.push('/login')
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()
    return <div className="navbar">
      <nav>
        <ul>
          {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {isLoggedIn && <li onClick={() => this.handleLogout()}>
            <Link>Logout</Link></li>}
          {isLoggedIn && <li><Link to="/quizzes">Quizzes</Link></li>}
          {isLoggedIn && <li><Link to="/profile">My Profile</Link></li>}
          {isLoggedIn && <li><Link to="/leader-board">Leaderboard</Link></li>}
          {isLoggedIn && <li><Link to="/comment">Comments</Link></li>}
        </ul>
      </nav>
    </div>
  }
 

}

export default withRouter(NavBar)