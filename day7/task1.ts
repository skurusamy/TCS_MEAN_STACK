class Person {
    name:any;//added
    constructor (name) {
        this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
    }
    printGreeting () {
        console.log(`Hi, I am ${this.name}!`);
    }
    static capitalizeWord (word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

var person1 = new Person('admin');
person1.printGreeting();

// will throw error bcoz there's no arg given
//var person2 = new Person();


//multiple constructs  are not allowed
var person2 = new Person(10);//added
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));