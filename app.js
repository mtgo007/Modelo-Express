
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var porta = 3000;
let dados = [
    {nome:"Dereguejhonson", idade:"25"},
    {nome:"Dereguedeixe", idade:"24"}
]

app.use(express.static('public'));
app.use(bodyParser.text({ type: 'text/html' }))

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/cadastrar', function (req, res) {
    res.sendFile(__dirname+'/public/user.html');
});

app.get('/user', function (req, res) {
    res.send(JSON.stringify(dados));
});

app.post('/user', function (req, res, next) {
    console.log(req);
    res.send("ok");
    next();
});




app.listen(porta, function () {
  console.log('Example app listening on port 3000!');
});

