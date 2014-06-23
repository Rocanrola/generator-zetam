var z = require('../../libs/zetam');

z.registerComponent({
	name:'header',
	init:function () {
		console.log(this.find('span').innerText)
	}
})