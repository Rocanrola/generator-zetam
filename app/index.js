'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var ZetamGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    // this.on('end', function () {
    //   if (!this.options['skip-install']) {
    //     this.installDependencies();
    //   }
    // });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Zetam generator!'));

    done();
  },

  app: function () {
    this.copy('package.json', 'package.json');
    this.copy('app.js', 'app.js');
    this.copy('Gruntfile.js', 'Gruntfile.js');
  },
  projectfiles: function () {
    this.directory('components', 'components');
    this.directory('controllers', 'controllers');
    this.directory('layouts', 'layouts');
    this.directory('less', 'less');
    this.directory('libs', 'libs');
    this.directory('models', 'models');
    this.directory('public', 'public');
  },
  runNpm: function(){
      var done = this.async();
      done();
      this.npmInstall("", function(){
          console.log("\nEverything Setup !!!\n");
          done();
      });
  }
});

module.exports = ZetamGenerator;
