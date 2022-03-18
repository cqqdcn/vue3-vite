// src/mock.js
import Mock from 'mockjs'
const Random = Mock.Random

const newList = function() {
	let newsList = []

	for (let i = 0; i < 28; i++) {
		let newNewsObject = {
			title: Random.ctitle(),
			content: Random.cparagraph(),
			time: Random.date('yyyy-MM-dd'),
			picture: Random.dataImage('200x150', 'Hello!')
		}
		newsList.push(newNewsObject)
	}
	return newsList
}
Mock.mock('http://localhost:3002/cfdc/getResource','post', newList)
Mock.setup({
	timeout: 300
})
Mock.mock('http://localhost:3002/cfdc/whd',{
	"array|1-10": [
	    {
	      "name|+1": [
	        "Hello",
	        "Mock.js",
	        "!"
	      ]
	    }
	  ]
})