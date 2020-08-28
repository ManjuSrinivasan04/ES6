//Recursion 
function pow(x,n)
{
    if(n==1)
    {
        return x;
    }
    else{
        return x* pow(x,n-1);
    }
}
console.log(pow(2,4)); //16

//Closure [func+environ=closure] - func remeber its outer variable and can access them later
let add=(function(){
    let counter=0;
    return function(){
        counter=counter+1;
        //return counter;
        console.log(counter);
    }
})();
add();
add();

//new function
let f=new Function('a','b','return a+b');
console.log(typeof f);
console.log(f(2,2));

//arrow function
/*
hello=()=>{
    document.getElementById("demo").innerHTML +=this;
}
//windows object calls the function
window.addEventListener("load",hello);
//button object calls function
document.getElementById("btn").addEventListener("click",hello);
*/

//Rest Parameter and Spread 
function fun(...input) //any no of inputs//rest parameter
{
    let sum=0;
    for(let i of input)
    {
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2));
console.log(fun(1,2,3,4));

//spread
let a=[1,2,3];
let b=[4,5,6];
arr=[...a,...b];
console.log(arr);

//setTimeout and setTimeInterval
function say()
{
    alert("Hi");
}setTimeout(say,3000);//alerts after 3sec

//repeat with the interval of 2sec
let time=setInterval(() => {
    alert('tick');
},2000);

//after 5sec stops;
setTimeout(() => {
    clearInterval(time);
    alert('stop');
}, 5000);








