//EX:1
let hello = async function() { console.log("Hello"); };
hello();//Hello

//EX:2
class Person {
    constructor(first, last, age, cls, interests) {
      this.name = {
        first,
        last
      };//inside name ->first and last
      this.age = age;
      this.gender = cls;
      this.interests = interests;
    }
  
    async greeting() {
      return await Promise.resolve(`Hi! I'm ${this.name.first}`);//Hi! I'm Mike
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }
  
  let han = new Person('Mike', 'John', 21, 'CSE', ['Student']);
  han.greeting().then(console.log);

//EX:3
  async function firstAsync() 
  {
    let promise = new Promise((res, rej) => 
    {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    
    console.log(result); //// "Now it's done!"
    }
firstAsync();