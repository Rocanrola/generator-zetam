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
      message : 'Your page name',
      default : 'new-page' // Default to current folder name
    }, function (answers) {
      this.pageName = answers.name;
      this.log(answers.name);
      done();
    }.bind(this));
  },

  app: function () {
    var context = {
      pageName:this.pageName
    }

    
    this.template('template.html', 'pages/'+ this.pageName +'/template.html',context);
    
    this.copy('controller.js', 'pages/'+ this.pageName +'/controller.js');
    this.copy('styles.less', 'pages/'+ this.pageName +'/styles.less');
    this.copy('i18n.json', 'pages/'+ this.pageName +'/i18n.json');
    
    var done = this.async();
    done();
  }
});

module.exports = ZetamGenerator;
