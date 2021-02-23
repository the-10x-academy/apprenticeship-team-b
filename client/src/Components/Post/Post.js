import Postimage from "./Postimage";
import Postdetails from "./Postdetails";
import "./postpage.css";
import dot from "./more.svg";
function Post(props) {
	return (
		<div className="postpage_all">
			<div className="postpage_box">
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						paddingRight: "1.5rem",
					}}
				>
					<div className="postpage_nameLoc">
						<h1 className="postpage_name">{props.name}</h1>
						<h1 className="postpage_location">{props.location}</h1>
					</div>
					<div style={{ height: "20px", width: "25px" }}>
						<img src={dot} />
					</div>
				</div>

				<Postimage imagepath={props.imagepath} />
				<Postdetails
					id={props.id}
					likes={props.likes}
					message={props.message}
					date={props.date}
				/>
			</div>
		</div>
	);
}
export default Post;
