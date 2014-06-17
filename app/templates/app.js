var express = require('express');
var app = express();
var port = 3004;

app.use(require('connect-livereload')({
    port: 35729
  }));

app.use(express.static(__dirname + '/public'));

app.use(require('zetam'));


app.listen(port,function () {
	console.log('running on port ' + port);
});