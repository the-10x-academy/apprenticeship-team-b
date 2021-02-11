import React, { useState, useEffect } from "react";
import './landing.css';
import PostPage from '../Post/Post'
<<<<<<< HEAD
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
=======
class Postlistpage extends React.Component{
  constructor(){
    super()
    this.state={posts:[]}
  }
  componentDidMount(){
    
    console.log('component did mount')
    
    fetch('http://localhost:9000/post')
    .then(res=>{
      //console.log(res);
      return res.json()
    })
    .then(posts=>{
      //console.log(students);
      this.setState({posts:posts.model})
    })
  }
  render(){
    console.log(this.state.posts)
    const postarray=[...this.state.posts].reverse()
    var a=['Jan','Feb','Mar','Apr','May','Jun','jul','Aug','Sep','Oct','Nov','Dec']
    return(
      <div className='Landingpage_div' >
        <ul>
          {this.state.posts.map((post,id)=>(
            <PostPage id={postarray[id]._id} name={postarray[id].name} location={postarray[id].location} message={postarray[id].message} likes={postarray[id].likes}
            date={postarray[id].date.slice(8,10)+' '+a[parseInt(postarray[id].date.slice(5,7))-1]+' '+postarray[id].date.slice(0,4)} imagepath={postarray[id].imagepath} /> 
          ))}
        </ul>
    </div>
    )
  }
}
Postlistpage.defaultProps={posts:[{
  name:'vaishnavi',
  location:'chennai',
  message:'hello world',
  likes:0,
  date:'30 Jan 2021',
  imagepath: '/images/place.jpg'
},
{
  name:'janu',
  location:'chennai',
  message:'flower..',
  likes:0,
  date:'30 Jan 2021',
  imagepath:'/images/flower.jpg'
},
{
  name:'jasmeeth',
  location:'hyderabad',
  message:'wonderful vacation',
  likes:0,
  date:'31 Jan 2021',
  imagepath:'/images/car.jpg'
},
{
  name:'leenesh',
  location:'madhya pradesh',
  message:'first bike',
  likes:0,
  date:'31 Jan 2021',
  imagepath: '/images/bikes.jpg'
},
{
  name:'hemanth',
  location:'hyderabad',
  message:'nature love',
  likes:0,
  date:'31 Jan 2021',
  imagepath: 'images/animal.jpg'
},
{
  name:'vinthai',
  location:'chennai',
  message:'nature..',
  likes:0,
  date:'31 Jan 2021',
  imagepath: 'images/dog.jpg'
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
}
export default Postlistpage;









