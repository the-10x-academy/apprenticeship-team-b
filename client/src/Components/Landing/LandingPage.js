import React from 'react'
import './landing.css';
import PostPage from '../Post/PostPage'
class LandingPage extends React.Component{
  
  render(){
    return(
      <div className='Landingpage_div' >
        <ul>
          {this.props.posts.map((post,id)=>(
            <PostPage name={this.props.posts[id].name} location={this.props.posts[id].location} message={this.props.posts[id].message} likes={this.props.posts[id].likes}
            date={this.props.posts[id].date} imagepath={this.props.posts[id].imagepath} /> 
          ))}
        </ul>
    </div>
    )
  }
}
LandingPage.defaultProps={posts:[{
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
}

]}
export default LandingPage;