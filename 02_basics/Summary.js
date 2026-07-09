let student = {

    // Primitive Data Types
    name: "Arham",
    age: 16,
    isStudent: true,
    cgpa: 3.85,

    // Array of Strings
    hobbies: [
        "Gaming",
        "Programming",
        "Football",
        "Astronomy"
    ],

    // Nested Object
    address: {
        city: "Lahore",
        country: "Pakistan",
        zipCode: 54000
    },

    // Nested Object with another Array
    laptop: {
        brand: "Apple",
        model: "MacBook Air M4",
        ram: "16GB",

        softwares: [
            "VS Code",
            "Chrome",
            "Git",
            "Discord"
        ]
    },

    // Array of Objects
    courses: [
        {
            name: "Programming Fundamentals",
            instructor: "Sir Ali",
            creditHours: 3
        },
        {
            name: "Calculus",
            instructor: "Sir Ahmed",
            creditHours: 3
        },
        {
            name: "Digital Logic Design",
            instructor: "Sir Hamza",
            creditHours: 4
        }
    ],

    // Object containing Arrays
    marks: {
        quizzes: [8, 9, 10],
        assignments: [15, 18, 20],
        mids: [40],
        finals: [85]
    },

    // Methods
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },

    birthday() {
        this.age++;
        console.log(`Happy Birthday! I am now ${this.age} years old.`);
    },

    addHobby(hobby) {
        this.hobbies.push(hobby);
    },

    showHobbies() {
        console.log(this.hobbies.join(", "));
    },

    showCourses() {
        for (let course of this.courses) {
            console.log(course.name);
        }
    },

    showLaptopInfo() {
        console.log(`${this.laptop.brand} ${this.laptop.model}`);
    }
};


console.log(Object.keys(student))
console.log(Object.values(student));
console.log(Array.isArray(student.hobbies));

student.age = 17;
student.address.city = "Islamabad";
student.hobbies.push("Reading")
student.laptop.softwares.push("Postman");



