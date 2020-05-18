let people = [
    { name: "Bill", eyecolor: "Blue", haircolor: "Brown", age: 21 },
    { name: "Ted", eyecolor: "Brown", haircolor: "Blonde", age: 68},
    { name: "Susan", eyecolor: "Green", haircolor: "Red", age: 36 },
    { name: "Frank", eyecolor: "Blue", haircolor: "Black", age: 41 },
    { name: "Jil", eyecolor: "Brown", haircolor: "Blonde", age: 52 }
    
   ];
  
 exports.getAll = () => {
     return people;
 }



 const getItem =  (name) => {
    return people.find((people) => {
         return people.name === name;
     });
 }
 const addItem = () => {
    return people.push({ name: "Jack", eyecolor: "Blue", haircolor: "Black", age: 12 }).toString;
 }

 const deleteItem = () => {
     return people.splice(3, 1,); 
 }
     
 
  
 
    
    
     
 
    let get = getItem("Bill"); //Displays Bill's info
    let add  = addItem(); // Adds Jack's info to array and reveals the current number of items in array
    let del = deleteItem(); // Removes Frank's info from array 
    console.log(get)  // Shows Bill's info
    console.log(add) // Adds Jack's info
    console.log(people) // Shows updated array 
    console.log(del) // Deletes Frank's info
    console.log(people) // Shows updated array 

    
   exports.getItem = () => {
        return get;
   };
   exports.addItem = () => {
    return add;
    };
    exports.deleteItem = () => {
        return del;
   };
   
   
   exports.getAll = () => {
       return people;
   };




     
   