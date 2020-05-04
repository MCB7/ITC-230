const expect = require("chai").expect;
const people = require("../data.js");


describe("People module", () => {

  it("returns requested person", () => {
   const result = people.get("Bill");
   expect(result).to.deep.equal({name: "Bill", eyecolor: "Blue", haircolor: "Brown", age: 21});
 });
 

   it("adds a new person", () => {
    let result = people.add({ name: "Jack", eyecolor: "Blue", haircolor: "Black", age: 12 });
    expect(result.added).to.be.true;
});


it("deletes an existing person", () => {
    let result = people.del();
    expect(result.deleted).to.be.true;
});


});

 
 
 
 
 
  });
});