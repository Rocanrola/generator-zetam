var gulp = require('gulp');
var z = require('zetam');

var config = {
	paths:[__dirname+'/globals']
}

z.gulp(gulp,config);

gulp.task('default', ['zetam']);