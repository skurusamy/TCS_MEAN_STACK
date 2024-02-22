class Employee{
    constructor(name,email,city){
       
        this.name = name;
        this.email = email;
        this.city = city;
    }
    get employeeDetails(){
        return "Name: "+this.name+"<br>Email: "+this.email+"<br>City: "+this.city;
    }
}

function newEmp(){
   
    var name =  document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var city = document.getElementById("city").value;
   

    let emp1 = new Employee(name,email,city);
    document.getElementById("details").innerHTML = emp1.employeeDetails;
}