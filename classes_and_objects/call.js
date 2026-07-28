function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) //sends this function's global execution context to that function
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// ==============================
// this Keyword
// ==============================

// 'this' refers to the object that is currently executing the function.

// In an object method:
const user = {
    name: "Arham",
    greet() {
        console.log(this.name); // this -> user
    }
};

// In a constructor function called with 'new':
// this -> the newly created object.

// Without 'new':
// this is NOT the new object (undefined in strict mode).

// Think:
// "this = Who is calling/executing this function?"


// ==============================
// call() Method
// ==============================

// call() invokes a function immediately
// and lets you explicitly set the value of 'this'.

// Syntax:
//functionName.call(thisValue, arg1, arg2, ...);

// Example:
// function greet() {
//     console.log(this.name);
// }

// const person = { name: "Arham" };

// greet.call(person); // Output: Arham

// call() = "Run this function using this object."


// ==============================
// Constructor Functions
// ==============================

// Constructor functions are blueprints for creating objects.

function Student(name) {
    this.name = name;
}

// Creating an object:
const s1 = new Student("Arham");

// 'new' automatically:
// 1. Creates an empty object {}
// 2. Sets this -> new object
// 3. Executes the constructor
// 4. Returns the object


// ==============================
// Why use call() inside constructors?
// ==============================

function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email, password) {

    // Execute SetUsername using the same object
    SetUsername.call(this, username);

    this.email = email;
    this.password = password;
}

// call(this, ...) ensures both constructor functions
// work on the SAME object.


// ==============================
// Without call()
// ==============================

// SetUsername(username);

// Here, SetUsername doesn't know about the object
// being created by CreateUser.
// 'this' won't refer to the CreateUser instance,
// so username won't be added correctly.


// ==============================
// Internal Working (Simplified)
// ==============================

// const user = new CreateUser(...);

// JavaScript roughly does:

// const obj = {};
// CreateUser.call(obj, ...);
// return obj;


// ==============================
// One-Liners
// ==============================

// this  -> The object currently executing the function.

// call() -> Executes a function with a manually specified 'this'.

// new -> Creates a new object, binds 'this' to it,
// runs the constructor, and returns the object.