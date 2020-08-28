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
function createPost(post,callback)//by adding call back it waits 2sec and add post 3
{
    setTimeout(() => {
        posts.push(post);
        callback();
    },2000);
}
getPosts();
createPost({title:"Post 3",body:"This is post Three"},getPosts);