import React from "react";
import icon from "./icon.png";
import camera from "./camera.png"
import "./header.css";



function Header(){
    return (
    <div id = "head">
        <div id = "insta">
        <img src = {icon} id = "icon"></img>
        <text id = "logo">Instaclone</text>
        </div>
        <button class = "buttons"><img src = {camera} id = "camera"></img></button>
    </div>
    );
}

export default Header;