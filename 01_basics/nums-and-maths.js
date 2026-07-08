const score001 = 400; 
//console.log(score001);

const score0 = new Number(400);
//console.log(score0);

//console.log(typeof(score0.toString()));

//console.log(score0.toString().length);

//console.log(score0.toFixed(1));//fixed to exact one decimal number

const score = 400.71212;
//console.log(score.toPrecision(5)); // precise answer of 5 digits

//console.log(score.toPrecision(3));

const hundreds = 1000000;
//console.log(hundreds.toLocaleString('en-IN'));
let a = Number("1");
//console.log(typeof(a));

//********MATHS******/
//console.log(Math.abs(-4)); //ABSOLUTE VALUE

//console.log(Math.round(-4.4));

//console.log(Math.ceil(4.1)); ans 5

//console.log(Math.floor(4.9)); ans 4

//console.log(Math.max(1,2,3,4));
//onsole.log(Math.min(1,2,3,4));

//console.log(Math.random());// 0-1 0 inclusive and 1 exclusive

//console.log((Math.random()*10)+1);// *10 shifts one digit to left and +1 ensures the min value to be 1

//console.log(Math.floor((Math.random()*10)+1)); // round ofs to floor random number

const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)+min));
// max - min gives total possible numbers
// max - min + 1, here +1 ensures that top limit reaches
// 0 < number < 1 -> 0 < number < 6
