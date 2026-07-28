// Math.PI is a read-only property.

// writable: false      -> Value cannot be changed.
// enumerable: false    -> Doesn't appear in loops.
// configurable: false  -> Cannot be deleted or redefined.

// Use Object.getOwnPropertyDescriptor() to inspect a property's attributes.

const discriptor = Object.getOwnPropertyDescriptor(Math,"PI"); //it can only search for object's property. math-> object, PI-> property

console.log(discriptor);
//prints:
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

//creating my own object
const chai = {
    price: 240,
    name:'simple chai',
    isAvailable: true,

    orderChai: function(){ //key-> orderChai, value-> function
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//yes we can set our own properties
Object.defineProperty(chai,'name',{ //editing "name" only 
    writable: false, 
    enumerable: false 
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


//checking enumeration(iterate)
for (let [key,value] of Object.entries(chai)) { // object is not itertable so we use entries to iterate

     if (typeof value !== 'function') { // dont want to include function as it simply prints it as whole
    console.log(`key is ${key} and value is ${value}`)
     }
    
}

//result
//it skips name as it was not itertable