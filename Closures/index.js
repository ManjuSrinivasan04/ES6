let add=function(num1)
{
    return function(num2)
    {
        return num1+num2;
    }
}

let addTwo= add(2);
console.log(addTwo(2));
let addTen=add(10);
console.log(addTen(10));