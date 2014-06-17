var mongoose = require('./db');

var userSchema = new mongoose.Schema({
  firstname:  String,
  lastname: String,
  username:   String
});

var User = mongoose.model('User', userSchema);

module.exports = User;