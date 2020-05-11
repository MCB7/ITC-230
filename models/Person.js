const mongoose = require("mongoose");

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://mbligh:5848601@cluster0-mmh1o.mongodb.net/test?retryWrites=true&w=majority";




mongoose.connect(connectionString, { dbName: "Project", useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 name: { type : String, required: true },
 eyecolor: String,
 haircolor: String,
 age: Number
}); 

module.exports = mongoose.model('persons', mySchema);
