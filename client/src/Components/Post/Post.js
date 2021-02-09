import React, { useState } from "react";
import './postpage.css';
import heart from './heart.png'
import share from './share.png'
function Post(props){
    console.log(props)
    const [likes, setLikes] = useState(props.likes);
    const likesbutton=(e)=>{
        setLikes(likes+1)
    }
    return(
        <div className='postpage_all'>
        <div className='postpage_box'>

            <div className='postpage_nameLoc'>
                <h1 className='postpage_name'>{props.name}</h1>
                <h1 className='postpage_location'>{props.location}</h1>
            </div>  
            <img  src = {"http://localhost:9000/" + props.imagepath} />
            
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


        </div>

    )
}
export default Post;