//sync js code example
function otherfunc()
{
    console.log("We are in another function");//2
    console.log("Doing some stuff");//3
}
console.log("Start1");//1
otherfunc();
console.log("End1");//4

//Async code example
console.log("start2");//1
setTimeout(()=>{
    console.log("We are in time out");//3 --from callstack setTimeout moves to web apis after the "end" execution again comes to callstack executes in 5sec
},1500);
console.log("End2");//2

//callback functions they need not be ASYNC() always 
console.log("Start3");//1
const item =['1','2','3','4'];
item.forEach((items)=>{
    console.log(items);//2
});
console.log("End3");//3

//sync code
console.log("Start4");//1
function loginUser(email,pswd)
{
    setTimeout(()=>{
        console.log("Now we have the data");//4
        return {Useremail:email}//2 undefined,unable to get the data
    },2000);
}
const user=loginUser("manju@email.com",12345);
console.log(user);
console.log("finish4");//3

//callback function is a function which is passed as a parameter which runs later on
console.log("Start5");//1
function loginUser(email,pswd,callback)
{
    setTimeout(()=>{
        console.log("Now we have the data(async)");//3
        callback ({Useremail:email});//passing as parameter
    },3000);//during timeout the callback is invoked which triggers user details
}
const user1=loginUser("manju@email.com",12345,(user1) =>{console.log(user1);});
//3 - {Useremail: "manju@email.com"}
console.log("finish5");//2



console.log("Starting...");//1
function loginUser(email,pswd,callback)
{
    setTimeout(()=>{
        console.log("Now we have the data(async)");//3
        callback({Useremail:email});//passing as parameter
    },3000);//during timeout the callback is invoked which triggers user details
}

function getuservideos(email,callback){
    setTimeout(()=>{
        callback (["v1","v2","v3"]);
    },1000);
}
const user2=loginUser("manju@email.com",12345,(user2) =>{
    console.log(user2);
    getuservideos(user2.Useremail,(videos)=>{
             console.log(videos);// ["v1", "v2", "v3"]
    });
});
//3 - {Useremail: "manju@email.com"}
console.log("finishing...");//2

//the above is callback hell we have callback then invoking func(wierd structure)



