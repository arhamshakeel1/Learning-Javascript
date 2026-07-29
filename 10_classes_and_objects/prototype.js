let myName = "arham   ";

//console.log(myName.trim().length);// trim() cuts spaces

let myHeroes=["thor","spiderman"];

let heroPower = {
   thor: "hammer",
   spiderman: "sling",

   getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`)
   } 

}
//heroPower.arham() //is not accessible yet since there is no method like this

//Object comes at top of the hierarchy so giving it prototype gives to array,string and function
Object.prototype.arham = function(){
    console.log("arham is present everywhere")
}

//heroPower.arham();
//myHeroes.arham(); //is an array but prototype searches up in the hierarchy and finds it in object prototype


//now what if i inject prototype to an array
Array.prototype.heyArham = function(){
    console.log(`hi i am arham`);
}

//myHeroes.heyArham();//works
//heroPower.heyArham();// object cant access array's prototype

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`) 
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
 "hitesh".trueLength()
// "iceTea".trueLength()