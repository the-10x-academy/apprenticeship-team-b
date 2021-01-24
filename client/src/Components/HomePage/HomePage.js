import logo from "../../10x.jpeg";
import "./HomePage.css";
import React from "react";

function HomePage() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="left">
				<img src={logo} className="App-logo" alt="logo" />
				</div>
				<div className="clear"></div>
				<div className="right">
				<p>10x Team 04</p>
				<button onclick=" ">Enter</button>
				
				</div>
			</header>
		</div>
	);
}

export default HomePage;
