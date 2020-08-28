import {Person} from "./Person.js";


export class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teach(){
        console.log("Teacher");
    }
}