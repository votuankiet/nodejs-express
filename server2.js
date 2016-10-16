var express = require('express');
var router = express.Router();//express 4.x

var toDoItems = [
  {id: 1, desc: 'foo'},
  {id: 2, desc: 'bar'},
  {id: 3, desc: 'bax'}
];

router.get('/', function (req, res) {
  res.render('index', {
    title: 'My App',
    items: toDoItems
  });
});

router.post('/add', function(req, res){
  var newItem = req.body.newItem;
  toDoItems.push({
    id: toDoItems.length + 1,
    desc: newItem
  });

  res.redirect('/');
});

module.exports = router; //nodejs export
