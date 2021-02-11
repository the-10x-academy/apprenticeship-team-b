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
            <Postimage imagepath={props.imagepath} />
            <Postdetails likes={props.likes} message={props.message} date={props.date} />
        </div>
        </div>

    )
}
export default Post;