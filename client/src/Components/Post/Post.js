import React, { useState, useEffect } from 'react';
import Postimage from './Postimage'
import Postdetails from './Postdetails'
import './postpage.css';
function Post(props){
    console.log(props)
    
    return(
        <div className='postpage_all'>
        <div className='postpage_box'>
            <div className='postpage_nameLoc'>
                <h1 className='postpage_name'>{props.name}</h1>
                <h1 className='postpage_location'>{props.location}</h1>
            </div>  
<<<<<<< HEAD

            <div className='postpage_bikediv' style={{ 
      backgroundImage: `url(${"http://localhost:9000/" + props.imagepath})`}}>
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
=======
            <Postimage imagepath={props.imagepath} />
            <Postdetails id={props.id} likes={props.likes} message={props.message} date={props.date} />
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
        </div>
        </div>

    )
}
export default Post;