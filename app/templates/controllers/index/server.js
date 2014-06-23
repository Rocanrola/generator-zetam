exports.get = function (req,res) {
	var data = {
		mainLayout:'home',
		controllerName:'index'
	}
	res.layout('main',data);
}