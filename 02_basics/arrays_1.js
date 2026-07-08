//array
const myArr = [0,1,2,3,4];
const myHereos = ["batman","spiderman"];

const myArr2 = new Array(1,2,3,4);

//Array methods
myArr.push(5);// adds to last element
myArr.pop(); //removes last element
myArr.unshift(9); //ads number to front but shifts all elements to right. - less effective
myArr.shift();//shifts to left and no argument needed
//console.log(myArr);

//console.log(myArr.includes(2)); //yes or no
//console.log(myArr.indexOf(9)); // index or -1

const newArr1 = myArr.join();// converts to string and copies
//console.log(myArr);
//console.log(newArr1); // converted to string

//slice and splice
// console.log("A",myArr);
// const myn1 = myArr.slice(1,3);
// console.log(myn1);//0,1

// console.log("B",myArr);
// const myn2 = myArr.splice(1,3);
// console.log(myn2);

// console.log("C",myArr);

