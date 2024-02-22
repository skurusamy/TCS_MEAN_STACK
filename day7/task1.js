var Person = /** @class */ (function () {
    function Person(name) {
        this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
    }
    Person.prototype.printGreeting = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    Person.capitalizeWord = function (word) {
        return word[0].toUpperCase() + word.slice(1);
    };
    return Person;
}());
var person1 = new Person('admin');
person1.printGreeting();
// will throw error bcoz there's no arg given
//var person2 = new Person();
//multiple constructs  are not allowed
var person2 = new Person(10); //added
person2.printGreeting();
console.log(Person.capitalizeWord('mike'));
