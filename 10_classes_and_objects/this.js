// =========================================
// 'this' Keyword - Quick Notes
// =========================================

// 'this' refers to the object that is currently executing the function.

// The value of 'this' depends on HOW the function is called,
// NOT where the function is written.


// =========================================
// 1. Inside Object Methods
// =========================================

const user = {
    name: "Arham",
    greet() {
        console.log(this.name);
    }
};

// this -> user
// Used to access the object's own properties.


// =========================================
// 2. Inside Constructor Functions
// =========================================

function User(name) {
    this.name = name;
}

const u1 = new User("Arham");

// this -> newly created object
// Used to initialize object properties.


// =========================================
// 3. Inside Classes
// =========================================

class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

// this -> current class instance
// Works the same as constructor functions.


// =========================================
// 4. Using call()
// =========================================

function greet() {
    console.log(this.name);
}

const person = {
    name: "Arham"
};

greet.call(person);

// call() executes a function immediately
// and explicitly sets the value of 'this'.

// Syntax:
// functionName.call(thisValue, arg1, arg2, ...)


// =========================================
// 5. Event Listeners
// =========================================

button.addEventListener("click", function () {
    console.log(this);
});

// this -> the element that triggered the event.
//This is useful for changing the clicked element.

this.style.backgroundColor = "red";

// =========================================
// 6. Arrow Functions
// =========================================

// Arrow functions DO NOT have their own 'this'.
// They inherit 'this' from the surrounding scope.


// =========================================
// 7. Regular Functions
// =========================================

function test() {
    console.log(this);
}

// In strict mode:
// this -> undefined

// In old non-strict browser code:
// this -> window


// =========================================
// Constructor + call()
// =========================================

function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email, password) {

    // Use the same object inside SetUsername
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

// call(this, ...) makes both constructor
// functions work on the SAME object.


// =========================================
// What 'new' Does Internally
// =========================================

// const user = new CreateUser(...);

// Roughly equivalent to:

// const obj = {};
// CreateUser.call(obj, ...);
// return obj;


// =========================================
// One-Liners
// =========================================

// this  -> The object currently executing the function.

// call() -> Executes a function with a manually specified 'this'.

// new -> Creates a new object, binds 'this' to it,
// runs the constructor, and returns the object.


// =========================================
// Interview Tips
// =========================================

// Q: What determines the value of 'this'?
// A: How the function is called.

// Q: Why use call()?
// A: To invoke a function immediately with a custom 'this'.

// Q: Why use 'this' in constructors/classes?
// A: To initialize properties on the newly created object.