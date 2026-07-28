const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) //it creates empty object and connects it to User
console.log(tea.email);

// Getter name  -> email

// Actual value -> _email

// The underscore gives the getter and setter
//  a different backing property to store the actual
// value, avoiding the getter or setter from accidentally calling itself.