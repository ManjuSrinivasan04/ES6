let mypromises=new Promise(function(resolved,rejected){
    if(true)
     resolved(1234);
    else
        rejected();
});
mypromises.then(function(val){
    console.log(val);//1234
}).catch(function(){
    console.log("Sorry your Promise failed");
})
