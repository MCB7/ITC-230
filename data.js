
const people = [{name:"Fred", eyecolor: "brown", haircolor: "brown", height: "5'7"},
{name:"Bill", eyecolor: "blue", haircolor: "blonde", height: "5'8"},
{name:"Susan", eyecolor: "green", haircolor: "red", height: "5'10"},
{name:"Howard", eyecolor: "hazel", haircolor: "black", height: "6'2"},
{name:"Darrel", eyecolor: "grey", haircolor: "black", height: "5'4"},
{name:"Rachel", eyecolor: "brown", haircolor: "brown", height: "5'5"}];
const iterator = people.values();

for (const value of iterator) {
    console.log(value)
    
}

 
 module.exports.people = people.values();


