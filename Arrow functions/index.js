const square = function(num)
{
    return num * num;
}
let num=2;
console.log(square(num));//4

const square1=num=>num*num;
console.log(square1(5));//25

const jobs=[
    {id:1,isActive:true},
    {id:2,isActive:true},
    {id:3,isActive:false},
];

const activejobs=jobs.filter(function(job){ return job.isActive;});
console.log(activejobs); //id: 1, isActive: true} {id: 2, isActive: true}
const activejob=jobs.filter(job=> job.isActive);
console.log(activejob);

const person={
    talk() {
        setTimeout(function() {
        console.log('this',this);
    },1000);//now window object - doesnot override
    }
};
person.talk(); //reference to person object


const person2={
    talk() {
        setTimeout(()=> {
        console.log('this',this);
    },1000);
    }
};
person2.talk();//now this reference to person object because of arrow function - arrow functions dont rebind this keyword
