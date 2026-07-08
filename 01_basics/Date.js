//SO BASICALLY OBJECTS HAVE METHODS and VARIABLES DONT HAVE them
 
let var1 = Date(); // A simple function which doesnot have methods
//console.log(var1); 

let var2 = new Date();// New makes var2 as Object which have methods like var2.getDate(), var2.getMonth() etc
//console.log(var2);
///////////////////////////////////////////
// 
// let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toLocaleDateString())

// let myCreateDate = new Date(2023,0,23);// month starts from 0
// console.log(myCreateDate.toLocaleDateString());

// let myCreateDate = new Date("2023-02-13");// another way to make ur own dates. here month starts from 01
// console.log(myCreateDate.toLocaleDateString());

let myCreateDate = new Date("12-31-2023");//another way to declare date
//console.log(myCreateDate.toLocaleDateString()); 

let myTimeStamp = Date.now(); //comes in milliseconds
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());//since myCreateDate is an object


//console.log(Math.floor(Date.now()/1000)); // to convert from milliseconds to seconds and remove decimal.

let newDate = new Date()
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());

//console.log(`${newDate.getDate()} and the time`)

//custom LocaleString
// console.log(newDate.toLocaleString('default',{
//     weekday:"long",
// }))



//NOTE Math is a object and it has only methods like Math.floor(), Math.random() etc and it cannot declare an object like var1 = new Math() 

//NOTE Date is a class so it can create objects like var1 = new Date() and those var1 objects have methods. + Date also have static functions like Date.now();



