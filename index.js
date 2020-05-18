'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const Person = require("./models/person");
const app = express();
const data = require("./data");
const allPeople = data.getAll();
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route

let exphbs =  require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

app.set('port', process.env.PORT || 3000);




app.get('/api/people', (req,res) => {
  var people = data.getAll(); 
  if (people) {
    
    res.json(people);
  } else {
    return res.status(500).send('Error occurred: database error.');
  }
});

app.get('/api/person', (req,res) => {
  var person = data.getItem();
  if (person) {
   
    res.json(person);
  } else {
    return res.status(500).send('Error occurred: database error.');
  }
});

app.get('/api/delete', (req,res) => {
  var people = data.getAll();
  var del = data.deleteItem();
  if (del) {
   
    res.json(people);
    console.log("Person Deleted")
  } else {
    return res.status(500).send('Error occurred: database error.');
  }
});

app.get('/api/add', (req,res) => {
  var people = data.getAll();
  var add = data.addItem();
  if (add) {
   
    res.json(people);
    console.log("Person added")
  } else {
    return res.status(500).send('Error occurred: database error.');
  }
});


 



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
    { console.log("Documents Deleted")}
  });

    
   

   
 app.listen(app.get('port'), () => {
 console.log('Express started');
   });