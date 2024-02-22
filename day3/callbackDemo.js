/**
 * This shows error because  when the intervel is waiting,
 * to execute javascript goes to next line and title will be undefined..
 * inorder to overcome call back is used
 *

const getBlogPost = ()=>{
    setTimeout(()=>{
        return{ 
        title: 'welcome to Javascript'}
    },2000)
}
const bp=getBlogPost();
console.log(bp.title)*/

/* resolve the time wait using call back*/
const getBlogPost = (callbackfun)=>{
    setTimeout(()=>{
        callbackfun({ 
        title: 'welcome to Javascript'
    })
    },2000)
}
getBlogPost((blogpost) =>{
    console.log(blogpost.title)
})
