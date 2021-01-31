import logo from "../../10x.jpeg";
import "./HomePage.css";
import React from "react";


function HomePage() {
	return (
		<div className="home">
			<div className="body">
				<img className="all" src={logo} alt="here"></img>
				

				<div className="right">
					<div>
						<center>
							<h1 className="header">10x Team 02</h1>

							<button className="bbutton">Enter</button>
						</center>

						
					</div>
				</div>
			</div>
		</div>
	);
}
export default HomePage;