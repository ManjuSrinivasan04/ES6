const first =[1,2,3];
const second=[5,6,7];
const combine=first.concat(second);
console.log(combine);//[1, 2, 3, 5, 6, 7]
//spread--getting every elements in array(...)
const spre=[...first ,'a',...second];
console.log(spre); //[1, 2, 3, "a", 5, 6, 7]

//cloning aaray
const clone=[...first];
console.log(first);
console.log(clone);//identical

//SPREAD ON OBJECTS

const ob1={name:'John'};
const ob2={age:'5'};
const combined={...ob1,...ob2,location:'India'};
console.log(combined);//{name: "John", age: "5", location: "India"}

//clonning object
const cloe={...ob2};
console.log(cloe);//{age:"5"}