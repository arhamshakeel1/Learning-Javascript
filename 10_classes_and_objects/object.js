//  JS is a prototype based language

//  Prototype:
//. A prototype is an object that stores
//  shared properties and methods, which other objects can inherit and access through the prototype chain.


//  classes,objects,this,new everything comes from prototype

//  array and string are also an object. everything comes from object.
//  array and string is inherited from object so all the properties of objects are accessible
//  to both whether they can use it or not

//  function() can also behave as object. 
//  object prototype is null


//constructor function
function Student(name) {
    this.name = name;
}

//creating your own prototype method
Student.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
};

//creating an object using new
const s1 = new Student("Arham");
const s2 = new Student("Ali");

s1.sayHello();
s2.sayHello();
///neither s1 and s2 stores sayHello(). they simply gets it from prototype

//classes also do the same thing. summarily, understatement
class Student {

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log("Hello");
    }
}
//but internally JS converts them to prototype form like above

//JS built-in types also use prototypes like

const arr = [1,2,3];
arr.push(4); // comes from Array.prototype


const name = "Arham";
name.toUpperCase();//String.prototype

//Add shared methods or properties to a
//constructor's (or class's) prototype so that all instances can use them without each instance storing its own copy.
//Objects created with `new` are linked to that prototype.




// Here's what happens behind the scenes when the new keyword is used:

// A new object is created: The new keyword initiates the creation of a new JavaScript object.

// A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

// The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

// The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

// */