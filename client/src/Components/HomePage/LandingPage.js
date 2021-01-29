import React from 'react'
import './HomePage.css';
import PostPage from './PostPage.js'
class Landing_page extends React.Component{
  
  render(){
    return(
      <div >
        <PostPage />
        <PostPage />
        <PostPage />
    </div>
    )
  }
}

export default Landing_page;