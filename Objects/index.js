const person = {
    name : 'Mike',
    walk : function(){} ,//now walk is a method in person object
    talk() {console.log("HI")} //new syntax same like - walk:funcion(){}
};
// acessing methods
person.talk();//HI
person['name'] ='John';

//dynamic way
const target='name';
person[target.value]='Lilly';
