var express = require('express');
var router = express.Router();
var TaskController = require('../controllers/TaskController.js');

// get

router.get('/', function (req, res) {

	TaskController.list(req,res);

});

// get

router.get('/:id', function (req, res) {

	TaskController.show(req, res);
});

// post

router.post('/', function (req, res) {

	TaskController.create(req, res);

});


// put

router.put('/:id', function (req, res) {

	TaskController.update(req, res);

});


// delete

router.delete('/:id', function (req, res) {

	TaskController.remove(req, res);
		
});

module.exports = router;
