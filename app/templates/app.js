var express = require('express');
var app = express();
var z = require('zetam');
var port = process.env.PORT || 3004;
var cookieParser = require('cookie-parser');


app.use(cookieParser('asdfghjkl'));

app.use(function(req,res,next){
	req.config = {}
	next();
});

z.load.paths([__dirname+'/globals']);

if(process.env.NODE_ENV == 'development'){
	console.log('development mode');
	app.use(require('connect-livereload')({ port: 35729}));
}

var oneDay = 86400000;
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.use(z.middleware);

app.listen(port,function () {
	console.log('running on port ' + port);
});