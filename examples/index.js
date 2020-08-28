// argument object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);//not supported in arrow func
    return a + b;
};
console.log(add(55, 1, 10001));

// this keyword - no longer bound
const user = {
    name: 'bala', 
    cities: ['pondicherry', 'new york', 'dublin'],
    printPlacedLives: function () {
        const that = this;

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};
user.printPlacedLives();

// this keyword with arrow function inside normal function
const user1 = {
    name: 'bala', 
    cities: ['pondicherry', 'new york', 'dublin'],
    printPlacedLives: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user1.printPlacedLives();

// this keyword with arrow function with method
const user2 = {
    name: 'bala', 
    cities: ['pondicherry', 'new york', 'dublin'],
    printPlacedLives() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
};
user2.printPlacedLives();

// using map function
const user3 = {
    name: 'bala', 
    cities: ['pondicherry', 'new york', 'dublin'],
    printPlacedLives() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user3.printPlacedLives());


let x={'food':'rice'}
let y={'vegies':x}
let z=y['vegies']['food'];
console.log(z); //rice
