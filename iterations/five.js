const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach( (item) => {
    
//     console.log(item.languageName);
// } )

myCoding.forEach((item)=>{
console.log(item.languageName)
})
// Traditional for → When you need the index or want full control.
//  for...of → Best for iterating over arrays or strings.
//  for...in → Best for iterating over object properties.
//  forEach() → Good for simple array operations (cannot use break or continue).