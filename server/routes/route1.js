var router = require('express').Router();

router.post('/', function(req, res) {
	console.log('POST REQUESTED route 1')
})

module.exports = router;