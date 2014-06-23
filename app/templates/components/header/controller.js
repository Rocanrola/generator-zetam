var z = require('zetam');
var usersModel = z.models.load('users');

exports.init = function (conf,cb) {

	var data = {
		random:Math.random()
	}

	cb(null,data);
}