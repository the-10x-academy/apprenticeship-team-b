import './postpage.css';
import bin from './bin.png'
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
function Postdetails(props){
    const [likes,setLike]=useState(props.likes);
    const [likestatus, setLikeStatus] = useState(false);
    const history = useHistory();
    const deletebutton = async(e) =>{
        const data = new FormData();
        data.append("id",props.id)
        fetch('http://localhost:9000/post/' + props.id, {
            method: 'DELETE',
            body: data,
        }).then(res => res.json())
        .then(()=>console.log(".")
        );
        window.location.href="";
    };
    const likesbutton= async (e)=>{
        if (!likestatus){
            setLikeStatus(true);
            const data = new FormData();
            data.append("id",props.id)
            console.log('like',props.id)
            fetch('http://localhost:9000/post/' + props.id, {
                method: 'PUT',
                body: data,
            }).then(res => res.json())
            .then((data)=>console.log(data));
            setLike(likes+1)
            } 
        }
        function refreshPage(){
            window.location.href=".";
        }
    return (
        <div>
            <div className='postpage_heartshare'>
                <button className='heartbutton' onClick={likesbutton}><img className='postpage_heart' src={!likestatus ? '/heart.png' : '/heart2.png'} alt="my image" /></button>
            
            <button className='deletebutton' onClick={deletebutton}><img className='postpage_share' src={bin} alt="del" /></button>
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