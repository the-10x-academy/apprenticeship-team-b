import React, { useState, useEffect } from 'react';
import './postpage.css';
import heart from './heart.png'
import share from './share.png'

function Postdetails(props){
    const [likes, setLikes] = useState(props.likes);
    const [postId, setPostId]=useState("");
    const likesbutton= async (e)=>{
        setLikes(likes+1)
        console.log(likes)
        console.log('post')
        const data = new FormData();
        data.append("likes",likes)
        data.append("id",props.id)
        console.log(data)

    }
    return (
        <div>
            <div className='postpage_heartshare'>
            <input type="image" src={heart} alt=' ' className='postpage_heart' onClick={likesbutton}/>
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>{props.date}</h1>
            </div>

            
            <div className='postpage_messagelikes'>
            <h1 className='postpage_likes' >{likes} likes</h1>
            <h1 className='postpage_message'>{props.message}</h1>
            </div>
        </div>
    )
}
export default Postdetails;