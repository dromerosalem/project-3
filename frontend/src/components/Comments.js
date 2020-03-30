import React from 'react'
import axios from 'axios'
// import auth from '../lib/auth'

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

  // componentDidMount() {
  //   const id = auth.getUserId()
  //   axios.get(`/api/user/${id}`)
  //     .then(res  => {
  //       console.log(res.data)
  //       this.setState({ nickName: res.data })
  //     })
      
  // }

  componentDidMount(){
    axios.post('/api/comments')
      .then(res => {
        this.setState({ nickName: res.data })
      })
  }


  render() {
    console.log(this.state.nickName)
    return <>
    <h2>Hello there</h2>
    
  
    </>
  }

}




export default Comments