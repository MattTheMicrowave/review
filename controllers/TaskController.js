var TaskModel = require('../models/TaskModel.js');

// @ description: server-side logic for managing tasks

module.exports = {

// TaskController.list()

list: function (req, res) {
	TaskModel.find(function (err, tasks) {
		return res.json(tasks);
	});
},

// TaskController.show()

show: function (req, res) {
	var id = req.params.id;
	TaskModel.findOne({_id: id}, function (err, task) {
		return res.json(task);
	});
},


// TaskController.create()

create: function (req, res) {
	var task = new TaskModel({
		text : req.body.text
	});

	task.save(function (err, task) {
		return res.json(task);
	});
},

// TaskController.update()

update: function (req, res) {
	var id = req.params.id;
	TaskModel.findOne({_id: id}, function (err, task) {
		task.text = req.body.text ? req.body.text : text.text;
		task.save(function (err, task) {
			return res.json(task);
	  });
  });
}, //close update

remove: function (req, res) {

  var id = req.params.id;
	TaskModel.findByIdAndRemove(id, function (err, task) {
		return res.json(task);
	});

}


}; //end
