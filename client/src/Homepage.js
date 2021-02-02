import React from 'react'
import './homepage.css'
import logo from './10x.jpeg'
import { Link } from "react-router-dom";
function Homepage(){
    return(
        <div className='homepageparent'>
            <div className='homepageimage'><img className='homepagei' src={logo} alt=''></img>
            <div className='homepagesecond'>
                <div>
                    <center>
                    <h1 className='homepageteam'>10x team b</h1>
                    <div><Link to="/posts" style={{ textDecoration: "none" }}><button className='homepageenter'>Enter</button></Link></div>
                    
                    </center>
                    
                </div>
            </div>
            </div>
        </div>

    );
}
export default Homepage;