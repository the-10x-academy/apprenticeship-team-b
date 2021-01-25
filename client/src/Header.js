import React from "react";
import icon from "./icon.png";
import camera from "./camera.png";
import "./header.css";



function Header(){
    return (
    <div id = "head">
        <div id = "insta">
        <img src = {icon} id = "icon"></img>Instaclone
        </div>
        <img src = {camera} id = "camera"></img>
    </div>
    );
}

export default Header;