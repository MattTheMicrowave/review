var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
	'text' : String,
	'version' : Number
});

module.exports = mongoose.model('Task', taskSchema);
