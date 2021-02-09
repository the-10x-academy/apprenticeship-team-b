import React, { useState } from "react";
import "./uploadpage.css";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";

function Upload() {
	const [filename, setFileName] = useState("");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [message, setMessage] = useState("");
	const [file, setFile] = useState("");
	const history = useHistory();
	const handleBrowse = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
		console.log(e.target.files[0]);
	};
	const ChangeName = (e) => {
		setName(e.target.value);
	};
	const ChangeLoca = (e) => {
		setLocation(e.target.value);
	};
	const ChangeMessage = (e) => {
		setMessage(e.target.value);
	};

	const postDetails = async (e) => {
		console.log("clicked");
		const data = new FormData();
		data.append("image", file);
		data.append("message",message);
		data.append("name", name);
		data.append("location", location);
		fetch("http://localhost:9000/post", {
			method: "POST",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
    };

	const navigate = async (e) => {
		history.push("/posts");
	};


    return(
        <div className='uploadParent' >
            <div className='uploadBox'>
                <div className='uploadImg'>
                <input  placeholder="Choose File" value = {filename} className='uploadImage' readOnly></input>
                <label className="uploadButton"><input type="file"  className='uploadInp' onChange={handleBrowse}  />Browse</label>
                
                </div>
                <div className='uploadAut'>
                    <input onChange={ChangeName} className='uploadA' placeholder='Author'></input>
                    <input onChange={ChangeLoca} className='uploadLoc' placeholder='Location'></input>
                </div>
                <div className='uploadMessage'>
                    <input onChange={ChangeMessage} className='uploadM' placeholder='Description' ></input>
                </div>
                <div className='uploadPost'>
                    <button type = "submit" onClick={() => {
							postDetails();
							navigate();
						}} className={
                        name !== ""&&
                        location !== ""&&
                        message !== ""&&
                        filename !== ""
						    ? "uploadcolorbutton"
							: "uploadpostB"
                        }>Post</button>
=======
//import Axios from 'axios';
class Upload extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            location:'',
            message:'',
            imagepath:'',
            likes:0,
            filename:'No file choosen'
    
    }
    }
    fileSelect=(e)=>{
        this.setState({
            imagepath:e.target.files[0]
        })
        this.setState({filename:e.target.files[0].name})
        console.log(e.target.files[0])
    }
    handleName=(e)=>{
        this.setState({
            name:e.target.value
        });
    }
    handleLoc=(e)=>{
        this.setState({
            location:e.target.value
        });
    }
    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        });
    }
    createpost=(e)=>{
        e.preventDefault();
        const newpost=new FormData()
        newpost.append("name",this.state.name)
        newpost.append("location",this.state.location)
        newpost.append("message",this.state.message)
        newpost.append("imagepath",this.state.imagepath)
        newpost.append("likes",this.state.likes)
        console.log(newpost)
        //Axios.post("https://httpbin.org/anything",newpost).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    render(){
        console.log(this.state.post)
        return(
            <form action='#'>
            <div className='uploadParent' >
                <div className='uploadBox'>
                    <div className='uploadImg'>
                    <input  placeholder={this.state.filename} className='uploadImage'></input>
                    <label className="uploadButton"><input type="file"  className='uploadInp' onChange={this.fileSelect}  />Browse</label>
                    
                    </div>
                    <div className='uploadAut'>
                        <input onChange={this.handleName} className='uploadA' placeholder='Author'></input>
                        <input onChange={this.handleLoc} className='uploadLoc' placeholder='Location'></input>
                    </div>
                    <div className='uploadMessage'>
                        <input onChange={this.handleMessage} className='uploadM' placeholder='Description' ></input>
                    </div>
                    <div className='uploadPost'>
                        <button onClick={this.createpost} className={
                            this.state.name!==''&&
                            this.state.location!== ''&&
                            this.state.message!==''&&
                            this.state.imagepath!==''
                            ? "uploadcolorbutton"
                            :"uploadpostB"
                            } >Post</button>
                    </div>
>>>>>>> fa1025207dcb393e130f7f8fc77a06a2d3826430
                </div>
            </div>
        </div>

    );
}

export default Upload;
