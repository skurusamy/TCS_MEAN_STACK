function getUser(id,callbackfun){
    setTimeout(()=>
    callbackfun({
        id:id,
        name:'Subha'
    }),1000)
}
function getSocialMediaPosts(username,callbackfun) {
    setTimeout(()=>{
        console.log('calling twitter,facebook, insta for posts')
        callbackfun(['myPost1','myPost2','myPost3'])
    },1000)
}
function getComments(post,callbackfun) {
    setTimeout(()=>{
        console.log('calling twitter,facebook, insta for posts '+post)
        callbackfun(['comments '+post])
    },1000)
}
getUser(1,(user) => {
    getSocialMediaPosts(user.name,(blogPosts)=>{
        getComments(blogPosts[0],(comments) =>{
            console.log(user,blogPosts[0],comments)
        })
    })
})