// const person = require('./person.js');
// console.log(person.name);


const Person = require('./person.js');
// import Person from './person.js'; // Wont work for Node.js
const person1 = new Person("John", 30);
person1.greeting();
