//Promises are javascript object which can be created and returned

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log(" getting user from social media")
        resolve({
            id:id,
            name:'Subha'
        })
    },1000)
    })
    
}
function getSocialMediaPosts(username) {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('calling twitter,facebook, insta for posts')
        resolve({
            post:['myPost1','myPost2','myPost3'],
            rating:['5','4','5']
        })
    },1000)
})
}
/*function getRating(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Getting ratings")
            resolve(['5','4','5'])
        },1000)
    })
}*/
function getComments(post) {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('calling twitter,facebook, insta for posts '+post)
        resolve(['comments '+post])
    },1000)
})
}
/*getUser(1)
.then(user =>getSocialMediaPosts(user.name))
.then(blogpost =>getComments(blogpost[0]))
.then(Comment=>console.log(Comment))
.catch(err => console.log(err.message))*/
getUser(1)
.then(user =>getSocialMediaPosts(user.name))
.then(blogpost => {console.log(blogpost.rating), console.log(blogpost.post),
        getComments(blogpost.post[0])
.then(Comment=>console.log(Comment))})
.catch(err => console.log(err.message))