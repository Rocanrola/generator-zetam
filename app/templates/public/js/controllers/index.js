(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var z = require('../../libs/zetam');

z.registerComponent({
	name:'header',
	init:function () {
		console.log(this.find('span').innerText)
	}
})
},{"../../libs/zetam":3}],2:[function(require,module,exports){
require('../../components/header/view');

zetam.initDomComponents();
},{"../../components/header/view":1}],3:[function(require,module,exports){
!function(){Array.prototype.filter||(Array.prototype.filter=function(t){"use strict";if(void 0===this||null===this)throw new TypeError;var n=Object(this),e=n.length>>>0;if("function"!=typeof t)throw new TypeError;for(var o=[],r=arguments.length>=2?arguments[1]:void 0,i=0;e>i;i++)if(i in n){var u=n[i];t.call(r,u,i,n)&&o.push(u)}return o}),"function"!=typeof Object.create&&(Object.create=function(t){function n(){}return n.prototype=t,new n})}(),!function(t){var n=t.zetam={};n.components=Object.create({_all:[],getByName:function(){}}),n.utils={extend:function(t){var n=this,e=function(){n.apply(this,arguments)};e.prototype=Object.create(n.prototype);for(var o in t)e.prototype[o]=t[o];return e}},n.Component=function(t){n.components._all.push(this),t=t||{},this.el=t.el||null,this.id=t.id||null,this.init()},n.Component.prototype={init:function(){},onRender:function(){},find:function(t){return this.el.querySelector(t)},findAll:function(t){return this.el.querySelectorAll(t)}},n.Component.extend=n.utils.extend,n.registerComponent=function(t){n.components[t.name]=n.Component.extend(t)},n.initDomComponents=function(){for(var t=document.querySelectorAll("[data-component]"),e=0;e<t.length;e++){var o=t[e].getAttribute("data-component");if(o in n.components){new n.components[o]({el:t[e],id:t[e].getAttribute("id")})}}},module.exports=n}(window);
},{}]},{},[2])