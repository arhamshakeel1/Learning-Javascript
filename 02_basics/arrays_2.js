const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];
marvel_heroes.push(dc_heroes); //pushes in existing array and creates in 3rd element a new array of dc_heroes
//console.log(marvel_heroes) 


const allHeroes = marvel_heroes.concat(dc_heroes);//returns new array but concats actually
//console.log(allHeroes);

//more usable is SPREAD method
const all_new_heroes = [...marvel_heroes,...dc_heroes];
//console.log(all_new_heroes);

//case where there is a nested array and we want to flatten it
const another_array = [1,2,3 ,[4,5],6,7,8,[9,10]];
const real_another_array = another_array.flat(Infinity); //flattens the array and returns a new array
//console.log(another_array);
//console.log(real_another_array);

//static methods 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //Create an array from an iterable/array-like object.
console.log(Array.from({name: "hitesh"})) // interesting
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); //Create an array from the given arguments