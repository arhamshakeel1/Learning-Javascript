const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve(); //reject()
    }, 1000)
})

//when the promise finishes, run this code
promiseOne.then(function(){
    console.log("Promise consumed");
})




new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//takes object as a paramter as weoo
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})




const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){//catch recieves errors. If anything goes wrong, run this code.
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
//finally runs in every situation


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//async tells that it expects a promise. it does not deal with catching errors stuff so you use try and catch code.
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


//FETCH()-new method to request HTTP request to an API or a server
//method -1 using async function
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json(). //Waits for the response body to be read and converted from JSON into a JavaScript object.
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()

//method-2 using then() chain
fetch('https://api.github.com/users/hiteshchoudhary') //fetch() returns a promise
.then((response) => {
    return response.json() //it is to be converted to object
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.





// Promise = An object representing the eventual result of an async operation.

// Promise States:
// 1. Pending   -> Waiting
// 2. Fulfilled -> Success (resolve())
// 3. Rejected  -> Failure (reject())

// resolve(data) -> Marks promise as successful and optionally sends data.
// reject(error) -> Marks promise as failed and optionally sends an error.

// .then()  -> Runs after the promise is resolved.
// .catch() -> Runs if the promise is rejected.

// Promises help avoid Callback Hell.

// Basic Syntax:

// const promise = new Promise((resolve, reject) => {
//     // Async work
// });

// promise
//     .then((data) => {
//         // Success
//     })
//     .catch((error) => {
//         // Error
//     });

// Promise Chaining

// Every .then() returns a NEW Promise.

// Whatever you return from one .then()
// becomes the input of the next .then().

// Returning a Promise makes JavaScript
// wait until that Promise resolves.

// .catch() handles errors from the entire chain.

// throw new Error() inside .then()
// also goes directly to .catch().

// .finally() always runs,
// whether the Promise succeeds or fails.

// Promise.resolve(value)
// -> Creates an already resolved Promise.

// Promise.reject(error)
// -> Creates an already rejected Promise.