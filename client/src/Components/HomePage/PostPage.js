import React from 'react'
import './HomePage.css';
import heart from './heart.png'
import share from './share.png'
function Enter(props){
    console.log(props)
    return(
        <div className='postpage_all'>
        <div className='postpage_box'>

            <div className='postpage_nameLoc'>
                <h1 className='postpage_name'>{props.name}</h1>
                <h1 className='postpage_location'>{props.location}</h1>
            </div>  

            <div className='postpage_bikediv' style={{ 
      backgroundImage: `url(${props.imagepath})`}}>
            </div>

            <div className='postpage_heartshare'>
            <input type="image" src={heart} alt=' ' className='postpage_heart'/>
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>{props.date}</h1>
            </div>

            
            <div className='postpage_messagelikes'>
            <h1 className='postpage_likes' >{props.likes} likes</h1>
            <h1 className='postpage_message'>{props.message}</h1>
            </div>
        </div>


        </div>

    )
}
export default Enter