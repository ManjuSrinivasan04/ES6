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
    
        setTimeout(() => {
            posts.push(post);
        
        },2000);

    
}
//asyn /await//waits for async process action to complete
async function init()
{
    await createPost({title:"Post 3",body:"This is post three"});
    getPosts();
}
init();