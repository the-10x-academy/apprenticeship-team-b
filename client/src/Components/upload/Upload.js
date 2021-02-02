import React, {useRef} from 'react'
import "./uploadpage.css";
class Upload extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            location:'',
            message:'',
            imagepath:'',
            likes:0,
            post:[]
    
    }
    }
    fileSelect=(e)=>{
        this.setState({
            imagepath:e.target.files[0]
        })
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
        const newpost=[]
        newpost.push({
            name:this.state.name,
            location:this.state.location,
            message:this.state.message,
            imagepath:this.state.imagepath,
            likes:this.state.likes
        });
        this.setState({post:newpost})
    }
    render(){
        console.log(this.state.post)
        return(
            <div className='uploadParent' >
                <div className='uploadBox'>
                    <div className='uploadImg'>
                    <input  placeholder='No file choosen' className='uploadImage'></input>
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
                        <button onClick={this.createpost} className='uploadpostB' >Post</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Upload;