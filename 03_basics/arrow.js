const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
//this.methodName is necessary to access them.
//in c++ it implicitly adds this.username
}

  //user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(username);
//     //console.log(this.username);//this does not work in function. Works in object method
// }

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); same
// }

//ARROW FUNCTION
//() => {} 
const chai =  () => {
    let username = "hitesh"
    console.log(this.username);// does not work too
}


 //chai()

 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//IMPLICIT RETURN. does not need return keyword and curly braces
// const addTwo = (num1, num2) =>  num1 + num2
//or
// const addTwo = (num1, num2) => ( num1 + num2 )
//or
// const addTwo = (num1, num2) =>  ({username: "hitesh"}) //returning object. need to wrap in paranthesis



console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach() 