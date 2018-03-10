var express = require('express')
var bodyParser = require('body-parser')
var path = require('path');
var mongojs = require('mongojs')
var app = express()

//start mongoDB
var db = mongojs('127.0.0.1/userapp', ['users'])


//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//set static path
app.use(express.static(path.join(__dirname, "public")));

//routes
app.get('/', function(req, res){
    res.render("index");
})

app.get('/users', function(req, res){
    db.users.find(function (err, docs) {
        if(err) console.log(err)
        console.log(docs);
        res.render("users", {users : docs});
    })
})

app.post('/users/add', function(req, res){
    let newUser = {
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade
    }
    db.users.insert(newUser);
    res.redirect("/users");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})