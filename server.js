var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();


//configure app
app.set('view engine', 'ejs');
//__dirname is a variable of nodejs
app.set('views', path.join(__dirname, 'source/views'));

//use built-in middleware
//express.static accept a second parameter as options,
//which allows us to configure maxAge, etag ....
app.use(express.static(path.join(__dirname, 'bower_components')));


//use third-party middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

//can add route prefix as the first argument
app.use(require('./server2'));

//process.env.PORT
//cloud port (heroku, azure have different port)
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
