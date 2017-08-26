// dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) 
var burger = require('../models/burger.js');


router.get("/", function (req, res) {
	burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        }
    	res.render('index', hbsObject);
    })
})

router.post("/burgers/insert", function(req, res) {
	console.log("trying to insert");
	 burger.insert(req.body.burger_name, function(result) {
		res.redirect('/');
    })
})

router.put("/burgers/update/:id", function(req, res) {

	burger.update(req.body.burger_id, function(result) {
		console.log(result);
		res.redirect('/');
	})
})

module.exports = router;