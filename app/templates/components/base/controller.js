exports.init = function (conf,req,cb) {
	var model = {
		user:'qzapaia'
	}
	
	cb(null,{model:model});
}

exports.testMethod = function(conf,req,cb){
	cb(null,{text:'This message come from the server :)'});
}