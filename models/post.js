const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	imagepath: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
    likes: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model("Post", postSchema);
