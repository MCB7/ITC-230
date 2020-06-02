'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const Person = require("./models/person");
const app = express();



app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public' ));
app.use(bodyParser.json());
app.use('/api', require('cors')()); 
app.use((err,req,res,next) => {
  console.log(err);
});

let handlebars =  require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout: false}));
app.set("view engine", "handlebars");



app.get('/', (req,res,next) => {
  Person.find((err,persons) => {
    if (err) return next(err)
    res.render('home_test', {persons: JSON.stringify(persons)});
  })
  .catch(err => next(err));
});


app.get('/about', (req,res) => {
    res.type('text/html');
    res.render('about');
});

// api's
app.get('/api/v1/person/:name', (req, res, next) => {
    let name = req.params.name;
    Person.findOne({name: name}, (err, result) => {
        if (err || !result) return next(err);
        res.json( result );    
    });
});

app.get('/api/v1/people', (req,res, next) => {
    Person.find((err,results) => {
        if (err || !results) return next(err);
        res.json(results);
    });
});

app.get('/api/v1/delete/:id', (req,res, next) => {
    Person.remove({"_id":req.params.id }, (err, result) => {
        if (err) return next(err);
        // return # of items deleted
        res.json({"deleted": result.result.n});
    });
});

app.post('/api/v1/add/', (req,res, next) => {
    // find & update existing item, or add new 
    if (!req.body._id) { // insert new document
        let person = new Person({name:req.body.name,eyecolor:req.body.eyecolor,haircolor:req.body.haircolor,age:req.body.age});
        person.save((err,newPerson) => {
            if (err) return next(err);
            res.json({updated: 0, _id: newPerson._id});
        });
    } else { // update existing document
        Person.updateOne({ _id: req.body._id}, {name:req.body.name, eyecolor:req.body.eyecolor,haircolor:req.body.haircolor,age:req.body.age }, (err, result) => {
            if (err) return next(err);
            res.json({updated: result.nModified, _id: req.body._id});
        });
    }
});

app.get('/api/v1/add/:name/:eyecolor/:haircolor', (req,res, next) => {
    // find & update existing item, or add new 
    let name= req.params.name;
    Person.update({ name: name}, {name:name, eyecolor: req.params.eyecolor, haircolor: req.params.haircolor }, {upsert: true }, (err, result) => {
        if (err) return next(err);
        // nModified = 0 for new item, = 1+ for updated item 
        res.json({updated: result.nModified});
    });
});

app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});



 

app.listen(app.get('port'), () => {
  console.log('Express started');
    });





    
   

 

