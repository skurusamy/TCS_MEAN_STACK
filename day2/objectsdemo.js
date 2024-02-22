//{} objects

//myemp = {id :101, name:'admin', city:'mycity'}  //one way to create object
// second way to create object
/*var myemp = new Object(); 
myemp.id = 101;
myemp.name ="admin";
myemp.city = "mycity";
document.write(myemp.id+" "+myemp.name+" "+myemp.city);
document.write(`<br/>${myemp.id} ${myemp.name} ${myemp.city}`);// another way  to print
// third way of creating object using function

function emp(id,name,city,salary) {
    this.id = id;
    this.name= name;
    this.city = city;
    this.salary = salary

//defining a function
/*this.changeSalary = changeSalary;
function changeSalary(input){
    //var input = document.getElementById("sal").value;
    //alert(input);
    this.salary= input;
    document.getElementById("result").innerHTML = `<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`;
}
//another way to define function
this.changeSalary = function(){
    this.salary = document.getElementById("sal").value;;
    document.getElementById("result").innerHTML = `<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`;
}
}
emp = new emp(101,'subha','mycity',10000)
document.write(`<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`)*/
//after changing salary
//emp.changeSalary(12345);
//document.write(`<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`)

/**
 *  three textbox exercise
 * 
 */
function emp(id,name,city,salary) {
    this.id = id;
    this.name= name;
    this.city = city;
    this.salary = salary
//another way to define function
this.changeSalary = function(){
    this.salary = document.getElementById("sal").value;;
    document.getElementById("result").innerHTML = `<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`;
}
}
function newEmp(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var city =document.getElementById("city").value;
    var salary = document.getElementById("salary").value;
    emp = new emp(id,name,city,salary)
    document.getElementById("details").innerHTML = `<br/>${emp.id} ${emp.name} ${emp.city} ${emp.salary}`;

}
