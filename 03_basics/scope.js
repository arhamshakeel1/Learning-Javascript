//Global Scope
let a = 10;
const b = 20;
var c = 30;

// Block scope example
if (true) {
    let a = 40; // block-scoped variable
    const b = 50; // block-scoped constant
    var c = 60; // not a block-scoped variable
   // console.log("Inside block scope:",a,b,c);
}

//console.log("Outside block scope:",a,b,c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

//two ways to declare a function 
console.log(addone(5)) //works

function addone(num){
    return num + 1
}



addTwo(5) //error 
const addTwo = function(num){
    return num + 2
}