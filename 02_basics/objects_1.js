//singleton
//object.create // CONSTRUCTOR method

//object literals
const mySym = Symbol("id");
// console.log(mySym);

const Juser = {
    name: "Arham",  //name is a key and is in string format
    "full name": "Arham Shakeel", //key can be in string format but not recommended
    [mySym]: "id", //key can be in symbol format
    age: 18,
    location: "Lahore",
    isLogged: "false",
}
//console.log(Juser.name);
//console.log(Juser["name"]);
//console.log(Juser."full name"); //error accessing key in string format
//console.log(Juser["full name"]); //only way accessing key in string format
//console.log(Juser[mySym]); //accessing key in symbol format


Juser.name = "Shakeel"; //updating the value of key name
//console.log(Juser);
//Object.freeze(Juser);
Juser.name = "Arham";// freezed so will not update value



//FUNCTIONS IN OBJECTS
Juser.Greeting = function () { 
   // console.log("Hello " + this.name); //this refers to the object itself
    return "hello " + this.name; //returning the value of function
}
console.log(Juser.Greeting()) // but the function must return anything
//Juser.Greeting() // alternative way if not returned anything


//using bapticks and template literals
Juser.GreetingTWO = function () { 
   console.log(`hello JS user, ${this.name}`); //template literals
}
//Juser.GreetingTWO();