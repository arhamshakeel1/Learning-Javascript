//ES6

class User{
    constructor(username,email,password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const chai = new User("chai","chai@gmail.com","123");

console.log(chai.changeUsername());
 

// behind the scene. recall all the classes are prototype based behind the scenes

//makes constructor function
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

//adding properties
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

//creating object
const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());