import React, { useState } from "react";
import "./uploadpage.css";
import { Link } from "react-router-dom";

function Upload() {
	const [filename, setFileName] = useState("");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [message, setMessage] = useState("");
	const [file, setFile] = useState("");
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
				<Link to="." refresh = "true">
                    <button type = "submit" onClick={() => {
							postDetails();
						}} className={
                        name !== ""&&
                        location !== ""&&
                        message !== ""&&
                        filename !== ""
						    ? "uploadcolorbutton"
							: "uploadpostB"
                        }>Post</button></Link>

                </div>
            </div>
        </div>

    );
}

export default Upload;
