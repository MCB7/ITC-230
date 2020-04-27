'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data")
const app = express();

let exphbs =  require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);
 
let people = data.getAll();

app.get('/', (req,res) =>{
console.log(req.query);
res.render('home', {name: req.query.name, eye_colors: people});
    
    });
    


app.get('/details', (req, res) => {
console.log(req.query);
res.render('details', {name: req.query.name, eye_colors: people});
        
   
   });
   
 app.listen(app.get('port'), () => {
 console.log('Express started');
   });