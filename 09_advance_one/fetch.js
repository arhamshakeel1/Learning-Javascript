async function getUserDetails(){
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    //console.log(data);
    const Users = data.filter(num => num.id < 3).map((num => num.name));
    console.log(Users);
    
    }
    catch(error){
        console.log(error);
    } 
    }

    getUserDetails();



    // fetch() is a web API that sends an HTTP request

// runs inside browser

// it returns a promise immediately and initially pending later fulfilled or rejected, and JS keeps running

// sends a plain text so we need to do response.JSON() to convert it to array of objects

// await response.JSON() is requred as conversion is also asynchronous so it is also a Promise

// 404 Not foundm here fetch() goes in response since request succeeded but server status is 404

//      Promise


// State : Pending

// Data : undefined

// onFulfilled : [ ]

// onRejected : [ ]
// --------------------------       