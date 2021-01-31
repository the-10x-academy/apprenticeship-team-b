import React from "react";
import icon from "./icon.png";

import "./header.css";



function Header(){
    return (
    <div id = "head">
        <div id = "insta">
        <img src = {icon} id = "icon"></img>
        <text id = "logo">Instaclone</text>
        </div>
        <button id = "camera"></button>
    </div>
    );
}

export default Header;