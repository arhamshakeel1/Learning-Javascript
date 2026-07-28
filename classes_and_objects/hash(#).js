// # -> Creates a truly private class field
// that can only be accessed inside the class.


class User {

    #password;

    constructor(password) {
        this.#password = password;
    }

    getPassword() {
        return this.#password;
    }
}

const user = new User("123");

console.log(user.getPassword());



class User {

    #email;

    constructor(email) {
        this.#email = email;
    }

    get email() {
        return this.#email.toUpperCase();
    }

    set email(value) {
        this.#email = value;
    }
}

const user = new User("arham@gmail.com");

console.log(user.email);
