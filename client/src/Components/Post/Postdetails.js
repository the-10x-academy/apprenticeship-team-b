import './postpage.css';
import heart from './heart.png'
import share from './share.png'


function Postdetails(props){
    const likesbutton= async (e)=>{
        const data = new FormData();
        data.append("id",props.id)
        fetch('http://localhost:9000/post/' + props.id, {
            method: 'PUT',
            body: data,
            
        }).then(res => res.json())
        .then((data)=>console.log(data));
    }
    return (
        <div>
            <div className='postpage_heartshare'>
            <input type="image" src={heart} alt=' ' className='postpage_heart' onClick={likesbutton}/>
            <input type='image' src={share} alt=' ' className='postpage_share'/>
            <h1 className='postpage_date'>{props.date}</h1>
            </div>

            
            <div className='postpage_messagelikes'>
            <h1 className='postpage_likes' >{props.likes} likes</h1>
            <h1 className='postpage_message'>{props.message}</h1>
            </div>
        </div>
    )
}
export default Postdetails;