class Employee{
    empcode: number
    empname: string

    //constructor
    constructor(empcode: number,empname: string){
        this.empcode=empcode;
        this.empname=empname;
    }
    display=() =>{
        console.log(`${this.empcode} ${this.empname}`)
    }
    Welcome=(greet:string, ...name:string[])=>{
        return console.log(greet +" "+name.join(",")+ " !!"); 
    }
}
let emp=new Employee(102,'admin');
emp.display();
emp.Welcome('Welcome','admin')