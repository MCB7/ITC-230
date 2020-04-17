let people = [
    { name: "Bill", eyecolor: "Blue", haircolor: "Brown", age: 21 },
    { name: "Ted", eyecolor: "Brown", haircolor: "Blonde", age: 68},
    { name: "Susan", eyecolor: "Green", haircolor: "Red", age: 36 },
    { name: "Frank", eyecolor: "Blue", haircolor: "Black", age: 41 },
    { name: "Jil", eyecolor: "Brown", haircolor: "Blonde", age: 52 }
    
   ];
   
   
   exports.getAll = () => {
       return JSON.stringify(people);
   };


     
   