const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// Object → Stores related data and methods.

// Class → Blueprint for creating objects.

// new → Creates a new object, links it to the prototype,
// runs the constructor, and returns the object.

// constructor() → Initializes the object's properties.

// this → Refers to the current object.

// Methods → Functions that belong to an object.

// Inheritance → Reuse code using `extends`.

// Encapsulation → Keep data and behavior together and control access.

// Polymorphism → Same method name, different behavior.

// JavaScript classes are built on top of the prototype system.