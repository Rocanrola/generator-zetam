'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

var ZetamGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Zetam generator!'));

    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your component name',
      default : 'new-component' // Default to current folder name
    }, function (answers) {
      this.componentName = answers.name;
      this.log(answers.name);
      done();
    }.bind(this));
  },

  app: function () {
    var context = {
      componentName:this.componentName
    }

    this.template('styles.less', 'components/'+ this.componentName +'/styles.less',context);
    this.template('template.html', 'components/'+ this.componentName +'/template.html',context);
    this.template('view.js', 'components/'+ this.componentName +'/view.js',context);
    this.copy('controller.js', 'components/'+ this.componentName +'/controller.js');
    this.copy('i18n.json', 'components/'+ this.componentName +'/i18n.json');
  },
  // projectfiles: function () {
  //   this.directory('components', 'components');
  //   this.directory('pages', 'pages');
  //   this.directory('public', 'public');
  // },
  runNpm: function(){
      var done = this.async();
      done();
      // this.npmInstall("", function(){
      //     console.log("\nEverything Setup !!!\n");
      //     console.log("\nRun 'gulp' command\n");
      //     done();
      // });
  }
});

module.exports = ZetamGenerator;
