const Person = require("./models/person");

Person.countDocuments((err, result) => {
  console.log(result);
});


// return all records
Person.find({}, (err, items) => {
  if (err) return next(err);
  console.log(items.length);
});
 
   


