function sayHi()
{
    for(var i=0;i<5;i++)
    {
        console.log(i);// 0 1 2 3 4
    }
    console.log(i);//5 - var has global scope still accessible outside for loop -scoped to function
}
sayHi();

function sayHi()
{
    for(let i=0;i<5;i++)
    {
        console.log(i);// 0 1 2 3 4
    }
    //console.log(i);// -scoped to block - use let when you need to reassign value
}
sayHi();

const x =1;
console.log(x);
//x=2; //Assignment to constant variable - not possible