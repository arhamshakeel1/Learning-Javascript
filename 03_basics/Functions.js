function basic()
{
    console.log("Hello World");
}
//basic()

function add(a, b)
{
   // console.log(a + b); 
   return a + b;
}

//add(5, 'a');
const result = add(5, 10);
//console.log(result);

function loginUserMessage(userName)
{
    if(!userName)
    {
        return "Please provide a username";
    }
    return `${userName} just logged in`;
}
//console.log(loginUserMessage("john")); //undefined for nothing passed

function calculateCartPrice(...num1){ //here ...num1 is a rest parameter which takes all the arguments passed to the function and stores them in an array called num1
return num1;
}
//console.log(calculateCartPrice(200,300,400))

let obj ={
    username: "john",
    price: 200,
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${ anyobject.price}`);
}
handleObject(obj);
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

 console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));

