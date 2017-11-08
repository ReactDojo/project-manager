var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name:  String,
  description: String,
  startdate: { type: Date, default: Date.now },
  enddate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);