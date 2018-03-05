
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var porta = 3000;

app.use(express.static('public'));
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/user', function(req, res){
    res.send([{nome:"Dereguejhonson", idade:"25"},{nome:"Dereguedeixe", idade:"24"}]);
});

app.listen(porta, function () {
  console.log('Example app listening on port 3000!');
});

