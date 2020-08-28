const person = {
    name : 'Mike',
    walk : function(){} ,
    talk() 
    {
        console.log(this); //we will see person object on the console - this is returning reference to the person object
    }
}
person.talk(); //in js fuctions are objects

const talk = person.talk.bind(person); //this is now pointing to person
//console.log(talk);// talk constant is set to the function 
talk();//{name: "Mike", walk: ƒ, talk: ƒ}//gives window object--global object(NOTE: without bind())