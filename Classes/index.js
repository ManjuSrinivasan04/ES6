/*const person={
    name:'John',
    walk(){
        console.log("Walking");
    }
    
};*/ //creating class-blueprint of an object

class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log("Walking");
    }
}
//const person = new Person('John');//calling constructor
//person.walk();//Walking

//Inheritance
class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("Teacher");
    }
}
const teacher=new Teacher("John",'BE');
teacher.teach();