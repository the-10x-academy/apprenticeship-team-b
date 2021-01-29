const express = require("express");
const router = express.Router();
var cors = require('cors')
var Post=require('../models/post')
/* GET home page. */
router.get("/postsapi", function (req, res, next) {
	Post.find({}).then(model => {   // <-- Update to your call of choice.
		res.json({model});
	});
});

module.exports = router;