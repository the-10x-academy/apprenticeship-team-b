var mongoose = require("mongoose");
const multer = require("multer");
const POST_PATH = "/upload/images";
var Schema = mongoose.Schema;
var schema = new Schema({
	imagePath: { type: String, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
	date: { type: Date, default: Date.now },
	message: { type: String, required: true },
	likes: { type: Number, required: true, min: 0 },
});
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, POST_PATH);
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now());
	},
});
//statics
postSchema.statics.uploadedpost = multer({ storage: storage }).single(
	"imagePath",
); // static function
postSchema.statics.POST_PATH = POST_PATH;
const Post = mongoose.model("post", schema);
module.exports = Post;
