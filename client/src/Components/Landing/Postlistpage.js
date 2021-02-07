import React, { useState, useEffect } from "react";
import './landing.css';
import PostPage from '../Post/Post'
function Postlistpage() {
	const [posts, setPosts] = useState([
		
	]);

	useEffect(() => {
		setTimeout(
			fetch("http://localhost:9000/post")
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					setPosts(result.postData);
				}),
			10,
		);
	}, []);

	let postarray = [...posts].reverse();
	return (
			<div className="Landingpage_div">
        <ul>
				{postarray.map((post) => (
					<PostPage
						name = {post.name}
						location = {post.location}
						imagepath = {post.imagepath}
						description = {post.description}
						date = {post.date}
					/>
				))}
				</ul>
			</div>
	);
}
export default Postlistpage;









