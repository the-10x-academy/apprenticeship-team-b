import React from 'react'
import './HomePage.css';
import Post_page from './Post_page.js'
class Landing_page extends React.Component{
  
  render(){
    return(
      <div >
        <Post_page />
        <Post_page />
        <Post_page />
    </div>
    )
  }
}

export default Landing_page;