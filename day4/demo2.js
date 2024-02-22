class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName(){ //getter method
        return this.firstname+" "+this.lastname;
    }
    set fullName(str){
        let name = str.split(' ');
        if(name.length == 2){
            this.firstname = name[0];
            this.lastname = name[1];
        }
        else{
            throw 'Invalid name format'
        }
    }
}
let person1 = new Person('Subha','Sree')
console.log(person1.fullName)  //getter Method
let person2 = new Person()
person2.fullName="Mona Lisha" //Setter Method
console.log(person2.fullName)