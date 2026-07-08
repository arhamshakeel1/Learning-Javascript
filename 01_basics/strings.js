const fname = "arham"
const lname = " shakeel"
// console.log(fname + lname + " ahmed") poor way to declare string

// console.log(`hello my name is ${fname} and my father name is ${lname}`); use this way called string interpolation

// you can also declare string using objects

const gamename = new String ('hello');
//console.log(gamename[0]);


//console.log(gamename.length)
//console.log(gamename.toUpperCase());
//console.log(gamename.charAt(2));
//console.log(gamename.indexOf('h'));
const newString = gamename.substring(0,3);
//console.log(newString);

const newString1 = gamename.slice(-1,4);
//console.log(newString);

const newstring2 = "   arham  ";
//console.log(newstring2.trim());

const url = "https://arhamshakeel.%20.com";

//console.log(url.replace('%20','-'));

//console.log(url.includes('arham'));

//splits does this that it splits words into multiple arrays based on seperator.
const var0 = "arham shakeel is handsome";
const var1 = var0.split(" "); //points to multiple arrays of each word
//console.log(var1[0]);
//console.log(var0.split());//single array of whole sentence