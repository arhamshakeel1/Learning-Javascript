
// class User {
//   // Runs automatically when creating a new object with 'new'
//   constructor(name, age) {
//     this.name = name; // Public property
//     this.age = age;
//   }

//   // Method (function inside a class)
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const user1 = new User('Arham', 20); // Creating an instance (object)
// user1.greet(); // Outputs: Hello, my name is Arham



// // Student inherits properties and methods from User
// class Student extends User {
//   constructor(name, age, major) {
//     super(name, age); // Calls the parent (User) constructor
//     this.major = major; // Unique property for Student
//   }

//   // Method Overriding (replaces parent greet method)
//   greet() {
//     console.log(`Hi, I'm ${this.name} studying ${this.major}`);
//   }
// }

// const student1 = new Student('Rayan', 18, 'Data Science');
// student1.greet(); // Outputs: Hi, I'm arham studying Data Science


/

// class BankAccount {
//   #balance = 0; // '#' makes it private (cannot be accessed outside class)

//   constructor(initialAmount) {
//     this.#balance = initialAmount;
//   }

//   // Getter (read-only access)
//   get balance() {
//     return `$${this.#balance}`;
//   }

//   // Setter (safely update private value)
//   deposit(amount) {
//     if (amount > 0) this.#balance += amount;
//   }
// }

// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.balance); // Outputs: $150
// // account.#balance = 5000;   // Error: Private field '#balance' must be declared in an enclosing class


// class MathHelper {
//   // Static methods belong to the class itself, not individual objects
//   static add(a, b) {
//     return a + b;
//   }
// }

// // Call directly on the class without using 'new'
// console.log(MathHelper.add(5, 10)); // Outputs: 15