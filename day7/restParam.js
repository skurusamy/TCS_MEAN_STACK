//...
function Welcome(greet) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return console.log(greet + " " + name.join(",") + " !!");
}
Welcome("Welcome", "admin", "manager"); // first arg is greet and rest everything is string
Welcome('Hello', 'subha');
