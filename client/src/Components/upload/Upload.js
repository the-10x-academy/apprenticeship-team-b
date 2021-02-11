import React, { useState } from "react";
import "./uploadpage.css";
import { useHistory } from "react-router-dom";

function Upload() {
	const [filename, setFileName] = useState("");
<<<<<<< HEAD
	const [Author, setAuthor] = useState("");
	const [Location, setLocation] = useState("");
	const [Description, setDescription] = useState("");
=======
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [message, setMessage] = useState("");
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
	const [file, setFile] = useState("");
	const history = useHistory();
	const handleBrowse = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
		console.log(e.target.files[0]);
	};
<<<<<<< HEAD
	const ChangeAut = (e) => {
		setAuthor(e.target.value);
=======
	const ChangeName = (e) => {
		setName(e.target.value);
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
	};
	const ChangeLoca = (e) => {
		setLocation(e.target.value);
	};
<<<<<<< HEAD
	const ChangeDesc = (e) => {
		setDescription(e.target.value);
=======
	const ChangeMessage = (e) => {
		setMessage(e.target.value);
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
	};

	const postDetails = async (e) => {
		console.log("clicked");
		const data = new FormData();
<<<<<<< HEAD
		data.append("imagepath", file);
		data.append("description", Description);
		data.append("name", Author);
		data.append("location", Location);

=======
		data.append("image", file);
		data.append("message",message);
		data.append("name", name);
		data.append("location", location);
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
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
<<<<<<< HEAD
        <form action='#'>
=======
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
        <div className='uploadParent' >
            <div className='uploadBox'>
                <div className='uploadImg'>
                <input  placeholder="Choose File" value = {filename} className='uploadImage' readOnly></input>
                <label className="uploadButton"><input type="file"  className='uploadInp' onChange={handleBrowse}  />Browse</label>
                
<<<<<<< HEAD
                </div>
                <div className='uploadAut'>
                    <input onChange={ChangeAut} className='uploadA' placeholder='Author'></input>
                    <input onChange={ChangeLoca} className='uploadLoc' placeholder='Location'></input>
                </div>
                <div className='uploadMessage'>
                    <input onChange={ChangeDesc} className='uploadM' placeholder='Description' ></input>
                </div>
                <div className='uploadPost'>
                    <button onClick={() => {
							postDetails();
							navigate();
						}} className={
                        filename!==''&&
                        Location!== ''&&
                        Description!==''&&
                        file!==''
                        ? "uploadcolorbutton"
                        :"uploadpostB"
                        }>Post</button>
                </div>
            </div>
        </div>
        </form>
=======
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

                </div>
            </div>
        </div>
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f

    );
}

export default Upload;
