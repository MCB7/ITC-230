'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const Person = require("./models/person");
const app = express();

let exphbs =  require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);
 


app.get('/', (req, res, next) => {
  Person.find({}).lean()
    .then((persons) => {
        res.render('home', { persons });
    })
    .catch(err => next(err));
});
    

app.get('/details', (req, res, next) => {
  Person.find({}).lean()
    .then((persons) => {
        res.render('details', { persons });
    })
    .catch(err => next(err));
});

app.get('/delete', (req, res, next) => {
  if (Person.remove({'name':'Bill'}).lean()
 
    .then((persons) => {
        res.render('delete', { persons });
    })
    .catch(err => next(err)));
    { console.log({"Documents Deleted"})}
  });

    
   

   
 app.listen(app.get('port'), () => {
 console.log('Express started');
   });