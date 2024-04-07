const express = require('express')
const app = express()

app.use(express.json) //to parse the json object

const courses =[
    {id:1,name:"maths"},
    {id:2,name:"English"},
    {id:3,name:"Tamil"}
]


app.get('/',(req,res)=>{
    res.send("hello world")

})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    console.log(req.params) // to read req parameters
    let course = courses.find(c => c.id == parseInt(req.params.id))
    if(! course)
        res.status(404).send("Not available")
    res.send(course)
})

app.post('api/addCourse/',(req,res)=>{
    const course = {
        id : courses.length +1,
        name: req.body.name
    }
    courses.push(course)
    res.status(200).send(course)
})

app.listen(3000,()=>console.log("Server running"))