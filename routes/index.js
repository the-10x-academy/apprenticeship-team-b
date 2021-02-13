const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// Uploads is the Upload_folder_name
		cb(null, "public/uploads");
	},
	filename: function (req, file, cb) {
		cb(null, file.fieldname + "-" + Date.now() + ".jpg");
	},
});

var upload = multer({ storage: storage });

router.get("/post", function (req, res) {
	Post.find()
		.then((result) => {
			res.status(200).json({
<<<<<<< HEAD
				postData: result,
			});
			console.log(result);
=======
				model: result,
			});
			//console.log(result);
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.post("/post", upload.single("image"), (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
	var imageFile = req.file.filename;
	var imagePath = req.file.path.replace("public", "");
	console.log(imagePath);
	var obj = {
		name: req.body.name,
		description: req.body.description,
		location: req.body.location,
		imagepath: imagePath,
	};
=======
	console.log(req.body,'index')
=======
>>>>>>> b794d079bbddc2f4a6c8c1f80f1ab4d8fd6949a3
	var imageFile = req.file.filename;
	console.log(req.file.path)
	var imagePath = req.file.path.replace("public", "");
	
	var obj = {
		name: req.body.name,
		message: req.body.message,
		location: req.body.location,
		imagepath: imagePath
	};
	console.log(imagePath)
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
	Post.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		} else {
			// item.save();
<<<<<<< HEAD
			res.redirect("/post");
=======
			setTimeout(() => {
				res.redirect("/post");
			}, 10000);
			
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
		}
	});
});
router.put('/post/:id',upload.single("image"), (req, res,next) => { 
	console.log(req.body)
	console.log("put")
	Post.findOneAndUpdate({_id: req.body.id },  
		{$inc: { likes: 1 }}, null, function (err, docs) { 
		if (err){ 
			console.log(err) 
		} 
		else{ 
			console.log('updated')
			console.log("Original Doc : ",docs); 
		} 
	}); 
  }) 


<<<<<<< HEAD

=======
>>>>>>> 9d14b514f7228ccbe2c69ed64f69b89826a77d3f
module.exports = router;
