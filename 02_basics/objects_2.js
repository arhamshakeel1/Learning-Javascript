// const tinderUser = new Object() singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

delete tinderUser.isLoggedIn //deleting the key from object
//console.log(tinderUser);


const regularUser = { 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a", 
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

 //const obj3 = { obj1, obj2 }
//console.log(obj3);
 //const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}// spread method
//console.log(obj3);

//array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//users[1].email
 //console.log(tinderUser);

 //usefull object methods
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); console.log(Object.entries(tinderUser));
object.freeze(tinderUser); //freezing the object so that no key can be added or deleted or updated

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//checking if the key is present in object or not

let obj ={
    age:17,
    greet: function(){
        console.log("Hello");
        //js functions always return undefined if nothing is returned explicitly
    },
    array: [1, 2, 3, 4],

    birthday(){
        this.age++;
    }

}
obj.greet(); //calling the function inside object;
console.log(obj.array); 



