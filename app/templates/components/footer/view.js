var z = require('../../libs/zetam');

z.registerComponent({
	name:'footer',
	init:function () {
		console.log(this.find('h3').innerText)
	}
})