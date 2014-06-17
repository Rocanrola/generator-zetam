var usersModel = require('../../models/users');

exports.init = function (conf,cb) {
	
	usersModel.findOne({username:'mzapaia'},function(err,user){

		var data = {
			userData:JSON.stringify(user),
			sitename:"refu"
		}

		cb(null,data);
	})
}