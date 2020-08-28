const posts=[
    {
        title:"Post 1",
        body:"This is Post 1"
    },
    {
        title:"Post 2",
        body:"This is Post 2"
    }
];
function getPosts(){
    setTimeout(() => {
        let output='';
        posts.forEach((post)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}
function createPost(post)
{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.push(post);
            const err=true;//false
            if(!err){
                resolve();
            }else{
                reject("Error");
            }
        },2000);
    });
    
}
/*
createPost({title:"Post 3",body:"The post 3"})
.then(getPosts)
.catch(err=>console.log(err));*/

const prom1=Promise.resolve("hello World");
const prom2=10;
const prom3=new Promise((resolve,reject)=>setTimeout(resolve,2000,"Goodbye"));
Promise.all([prom1,prom2,prom3]).then(values=>console.log(values));