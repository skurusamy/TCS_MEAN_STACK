class Employee{
    constructor(name,email,city){
        this.name = name;
        this.email = email;
        this.city = city;
    }
    displayData(){
        return this.name+" "+this.email+" "+this.city;
    }
}
class Manager extends Employee{
    constructor(name,email,city,projectname,teamsize){
        super(name,email,city);
        this.projectname = projectname;
        this.teamsize = teamsize;
    }
   displayData(){
        
        return super.displayData()+" " +this.projectname+" "+this.teamsize;
    }
}
class Supervisor extends Employee{
    constructor(name,email,city,shift){
        super(name,email,city)
        this.shift = shift;
    }
    displayData(){
        
        return super.displayData()+" " +this.shift;
    }
}

let m1 = new Manager('manager','manager@gmail.com','managerCity','Web','4');
console.log(m1.displayData());

let s1 = new Supervisor('supervisor','supervisor@gmail.com','SupervisorCity','DayShift')
console.log(s1.displayData());