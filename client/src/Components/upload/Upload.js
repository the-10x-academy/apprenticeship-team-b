import React, { useState } from "react";
import "./uploadpage.css";
import { useHistory } from "react-router-dom";

function Upload() {
	const [filename, setFileName] = useState("");
	const [Author, setAuthor] = useState("");
	const [Location, setLocation] = useState("");
	const [Description, setDescription] = useState("");
	const [file, setFile] = useState("");
	const history = useHistory();
	const handleBrowse = (e) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
		console.log(e.target.files[0]);
	};
	const ChangeAut = (e) => {
		setAuthor(e.target.value);
	};
	const ChangeLoca = (e) => {
		setLocation(e.target.value);
	};
	const ChangeDesc = (e) => {
		setDescription(e.target.value);
	};

	const postDetails = async (e) => {
		console.log("clicked");
		const data = new FormData();
		data.append("image", file);
		data.append("description", Description);
		data.append("name", Author);
		data.append("location", Location);

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
                    <input onChange={ChangeAut} className='uploadA' placeholder='Author'></input>
                    <input onChange={ChangeLoca} className='uploadLoc' placeholder='Location'></input>
                </div>
                <div className='uploadMessage'>
                    <input onChange={ChangeDesc} className='uploadM' placeholder='Description' ></input>
                </div>
                <div className='uploadPost'>
                    <button type = "submit" onClick={() => {
							postDetails();
							navigate();
						}} className={
                        Author !== ""&&
                        Location !== ""&&
                        Description !== ""&&
                        filename !== ""
						    ? "uploadcolorbutton"
							: "uploadpostB"
                        }>Post</button>
                </div>
            </div>
        </div>

    );
}

export default Upload;
