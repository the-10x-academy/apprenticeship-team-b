import React from "react";
class Post extends React.Component {
	constructor() {
		super();
		this.state = { posts: [] };
	}
	componentDidMount() {
		console.log("component did mount");
		fetch("http://localhost:9000/posts")
			.then((res) => {
				return res.json();
			})
			.then((posts) => {
				this.setState({ posts: posts });
			});
	}
	render() {
		console.log(this.state.posts);
	}
}

export default Post;
