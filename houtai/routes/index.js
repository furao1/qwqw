var express = require('express');
var router = express.Router();
let data = require('./data/data.json')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/add', (req, res, next) => {
    res.send(data)
})
module.exports = router;