var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test',function (err) {
		if(err){
			console.zerror('mongoose connection error');
		}
	});

module.exports = mongoose;