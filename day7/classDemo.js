var Employee = /** @class */ (function () {
    //constructor
    function Employee(empcode, empname) {
        var _this = this;
        this.display = function () {
            console.log(_this.empcode + " " + _this.empname);
        };
        this.Welcome = function (greet) {
            var name = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                name[_i - 1] = arguments[_i];
            }
            return console.log(greet + " " + name.join(",") + " !!");
        };
        this.empcode = empcode;
        this.empname = empname;
    }
    return Employee;
}());
var emp = new Employee(102, 'admin');
emp.display();
emp.Welcome('Welcome', 'admin');
