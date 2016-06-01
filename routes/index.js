var express = require('express');
var router = express.Router();
var TaskModel = require('../models/TaskModel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  TaskModel.find(function(err, tasks) {
  	// asynchronous
	  res.render('index', {
	    title: 'Express',
	    tasks: tasks
  });
    });
});

router.post('/tasks', function(req, res, next) {
    var task = new TaskModel({
    	  text : req.body.text,
        version : req.body.version
    });

    task.save(function(err, task) {
    	//asynch
    res.redirect('/');
});
});
module.exports = router;
