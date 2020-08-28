//Prototyping which depicts either null or references other object

let pet={
    eats:true
};
let dog={
    jumps:true
};
dog.__proto__=pet;//2 underscore

//we can find both properties in dog now:
console.log(dog.eats);//true
console.log(dog.jumps);//true

//create a new object with pet as a prototype
let cat=Object.create(pet);
console.log(cat.eats);//true
console.log(Object.getPrototypeOf(cat)===pet)//true
Object.setPrototypeOf(cat,{})//change the prototype of cat to {}

//try and catch
try{
    console.log("Hi");
   console.log(hi);
}catch(err){
    console.log("Check error!");
}

//chaining JS methods

//acc.number('1234').setBalance(2000).applyCredit(200);
//${"#myDiv"}.removeClass("off").addClass("on").css("background":"blue");