
// ===============================
// API REQUEST - QUICK NOTES
// ===============================

// API = Application Programming Interface
// It acts like a waiter between your application and a server.

// API Request:
// A request sent by your application to a server asking for data.

// Server:
// A computer that stores and provides data (e.g., GitHub, Instagram, Netflix).

// Flow of an API Request:
// JavaScript --> API --> Server --> JSON Response --> JavaScript --> Webpage

// API Response:
// The data returned by the server, usually in JSON format.

// JSON (JavaScript Object Notation):
// A lightweight format used to exchange data.
// Looks like a JavaScript object but is just text.


// Example JSON:
/*
{
  "login": "hiteshchoudhary",
  "followers": 20000,
  "following": 5,
  "public_repos": 220
}
*/


// Website URL:
// https://github.com/hiteshchoudhary
// Returns a complete webpage (HTML).

// API URL:
// https://api.github.com/users/hiteshchoudhary
// Returns raw data (JSON).


// ===============================
// HTTP REQUEST METHODS
// ===============================

// GET    -> Retrieve (Read) data
// POST   -> Create (Add) new data
// PUT    -> Update/Replace existing data
// DELETE -> Remove data

// Beginners mainly work with GET requests.


// ===============================
// WAYS TO MAKE API REQUESTS
// ===============================

// 1. XMLHttpRequest (Old method)
// 2. fetch()          (Modern method)
// 3. async/await      (Cleaner syntax using fetch)


// ===============================
// LEARNING ORDER
// ===============================

// XMLHttpRequest
//        ↓
//     fetch()
//        ↓
//   Promises
//        ↓
//   async/await


// ===============================
// KEY POINTS
// ===============================

// ✔ API is a bridge between your app and a server.
// ✔ Server stores the data.
// ✔ API requests ask for that data.
// ✔ Most APIs return JSON.
// ✔ JavaScript receives the JSON and displays the required information.
// ✔ GET is the most common request method for fetching data.