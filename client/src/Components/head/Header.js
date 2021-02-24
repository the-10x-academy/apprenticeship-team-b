import React from "react";
import icon from "./icon.png";
import camera from "./camera.png"
import "./header.css";
import { Link } from "react-router-dom";


function Header(){
    return (
        
    <div id = "head">
        <div id = "insta">
        <Link to = ""><img src = {icon} id = "icon" alt=''></img></Link>
        <text id = "logo">Instaclone</text>
        </div>
        <Link to="/posts/create" style={{ textDecoration: "none" }}><button class = "buttons"><img src = {camera} id = "camera" alt=''></img></button></Link>
    </div>
    );
}

export default Header;