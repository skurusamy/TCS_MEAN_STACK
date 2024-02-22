var person={
    name:'Subha',
    age:23
}
var department={
    name:'HR',
    location : 'USA',
    noofEmployees:50,
    projectName:'Recruit'
}
var defaultDepartment={
    name:'none',
    location : 'nil',
    noofEmployees:0,
    projectName:'NA'
}
var defaultPerson={
    name:"unknown",
    age:0
}
function welcomeuser(person=defaultPerson){
    console.log(`Hello ${person.name} your age is ${person.age}`)
}
function departmentDetail(department=defaultDepartment){
    console.log(`Your Department details are ${department.name}, ${department.location}, ${department.noofEmployees}, ${department.projectName}`)
}
welcomeuser()
welcomeuser(person)

departmentDetail()
departmentDetail(department)