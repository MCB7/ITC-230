'use strict'
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let exphbs =  require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);
 
let people = [
    { "name": "Bill", "eyecolor": "Blue", "haircolor": "Brown", "age": 21 },
    { "name": "Ted", "eyecolor": "Brown", "haircolor": "Blonde", "age": 68},
    { "name": "Susan", "eyecolor": "Green", "haircolor": "Red", "age": 36 },
    { "name": "Frank", "eyecolor": "Blue", "haircolor": "Black", "age": 41 },
    { "name": "Jil", "eyecolor": "Brown", "haircolor": "Blonde", "age": 52 }
    
    ]

    app.get('/', (req,res) =>{
    console.log(req.query);
    res.render('home', {name: req.query.name, eye_colors: people});
    
    });
    


   app.get("/details?item={{eyecolor}}", (req,res) =>{
   console.log(req.query);
   res.render('details', {name: req.query.name, eye_colors: people});
   
   });
   
 
   app.listen(app.get('port'), () => {
    console.log('Express started');
   });