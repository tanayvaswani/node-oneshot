// Module Wrapper Functions
// (function (exports, require, module, __filename, __dirname) {

// })

console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hello, My name is ${this.name} and my age is ${this.age}`);
    }
}


// const person = {
//     name: 'John',
//     age: 30,
// }

module.exports = Person;