var express = require("express");
var bodyParser = require("body-parser");
var burger_task = require("./models/burger.js")

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

var PORT = process.env.PORT || 8080;

app.get("/home", function (req, res){
    console.log("hello with server.js");
});

app.get("/getAllBurgers", function(req, res) {
    burger_task.getBurgers(function (result) {
             res.json(result);
    })
   })

app.post("/addBurger", function (req, res) {
    burger_task.addBurgers(req.body.item, function(result){
        res.json(result);
        console.log("hello burger added");
    })
}) 

app.post("/devour", (req, res)=> {
    burger_task.devourBurger(req.body.item, function(result){
        res.json(result);
        console.log("Burger Devoured");
    })
})

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});

