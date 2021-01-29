import React from 'react'
import './HomePage.css';
import bikes from './bikes.jpg'
import heart from './heart.png'
import share from './share.png'
function Enter(props){
    console.log(props)
    return(
        <div className='postpage_all'>
        <div className='postpage_box'>
            <h1 className='postpage_name'>name</h1>
            <h1 className='postpage_location'>location</h1>
            
            <img src={bikes} alt='' className='postpage_image'/>
            <input type="image" src={heart} alt=' ' className='postpage_heart'/>
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>10Jan 2021</h1>
            
            
            <h1 className='postpage_likes'>0 likes</h1>
            <h1 className='postpage_message'>message</h1>
        </div>

        </div>

    )
}
export default Enter