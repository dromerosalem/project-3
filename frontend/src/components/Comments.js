import React from 'react'
import axios from 'axios'
import auth from '../lib/auth'

class Comments extends React.Component {

  constructor() {
    super()
    this.state = {
      commets: { 
        userComments: '' 
      },
      nickName: {}
    }
  }  

  componentDidMount() {
    const id = auth.getUserId()
    axios.get(`/api/user/${id}`)
      .then(res  => {
        console.log(res.data)
        this.setState({ nickName: res.data })
      })
      
  }


  render() {
    if (!this.state.nickName) return null
    const { username } = this.state.nickName
    return <>
    <h2>{username}</h2>
    
  
    </>
  }

}




export default Comments