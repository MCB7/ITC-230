const expect = require("chai").expect;
const data = require("./data.js");

let result = data.getItem();
let result1 = data.addItem();
let result2 = data.deleteItem();
describe("People module", function() {
 
  it("returns requested person", function() {
    expect(result).to.deep.equal({name: 'Bill', eyecolor: 'Blue', haircolor: 'Brown', age: 21 });
 });
 
 
   it("adds a new person", function() {
    expect(result1).to.deep.equal(6);
});


    it("deletes an existing person", function() {
        expect(result2).to.deep.equal([{ name: 'Frank', eyecolor: 'Blue', haircolor: 'Black', age: 41 }]);
});


});

 
 
 
 
 
