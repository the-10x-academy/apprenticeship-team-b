import React from 'react'
import './postpage.css';
import heart from './heart.png'
import share from './share.png'
function Post({ name, location, description, imagepath, date, likes }){
    return(
        <div className='postpage_all'>
        <div className='postpage_box'>

            <div className='postpage_nameLoc'>
                <h1 className='postpage_name'>{name}</h1>
                <h1 className='postpage_location'>{location}</h1>
            </div> 
            <div className='postpage_bikediv'>
            <img className = 'post__image' src = {"http://localhost:9000/" + imagepath} />
            </div>    

            <div className='postpage_heartshare'>
            <input type="image" src={heart} alt=' ' className='postpage_heart'/>
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>{date}</h1>
            </div>

            
            <div className='postpage_messagelikes'>
            <h1 className='postpage_likes' >{likes} likes</h1>
            <h1 className='postpage_message'>{description}</h1>
            </div>
        </div>


        </div>

    )
}
export default Post;