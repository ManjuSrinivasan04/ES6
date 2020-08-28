//promises are object which gives us result of async operation(on sucess) or failure of asyn operations
const promise = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        console.log("Got result");//1
         // resolved({user:'Hi'});  //2  
         reject(new Error('User not logged in'))  
    },2000)
});
//above is creation of promise and below is consuming the promise
promise.then(result=>{
    console.log(result);
}).catch(err=>console.log(err.message));



//using promises
console.log("Starting...");
function loginUser(email,pswd)
{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            console.log("Now we have the data(async)");
            resolve({Useremail:email});
        },3000);
    });
}

function getuservideos(email){
    return new Promise((success,fail)=>{
        setTimeout(()=>{
        success(["v1","v2","v3"]);
        },1000);
    });
}

function videoDetails(videos){
    return new Promise((onsucess,onfail)=>{
        setTimeout(()=>{
           onsucess("Title of the video");
        },2000)
    });
}

/*const user2=loginUser("manju@email.com",12345,(user2) =>{
    console.log(user2);
    getuservideos(user2.Useremail,(videos)=>{
             console.log(videos);
    });
});*/

loginUser("Hi","1234")
.then(user =>getuservideos(user.email))
.then(vides=>videoDetails(vides[0]))
.then(details=>console.log(details));


async function displayUser(){
   try{
     const logged=await loginUser('Ji',123);
    const vides=await getuservideos(logged.Useremail);
    const detail=await videoDetails(vides[0]);
    console.log(detail);
} catch(err){
         console.log("ERROR!");
}
}
displayUser();

console.log("finishing...");

//getting data from youtube and fb at the same time
const yt = new Promise(done=>{
    setTimeout(()=>{
        console.log("Getting from youtube");
        done({Videoss:[1,2,3,4]});
    },2500);
});
const fb = new Promise(get=>{
    setTimeout(()=>{
        console.log("Getting from FB");
        get({User:"Name"});
    },2500);
});

Promise.all([yt,fb]).then(result=>console.log(result));//both getting data we no need to wait






