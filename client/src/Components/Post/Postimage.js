import React from 'react';
import './postpage.css';

function Postimage(props){
    return (
        <div className='postpage_bikediv'><img className='post_image'  src = {"http://localhost:9000/" + props.imagepath} /></div>
    )
}
export default Postimage;