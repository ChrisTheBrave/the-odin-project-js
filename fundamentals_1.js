console.log("Hello, World!")

// let message = 'Hello'; //store string hello in message variable
// alert(message); //shows the variable content

let user = 'Chris', 
    age = 25, 
    message = 'Whats goodie?';
console.log(user, age, message)

// javasscript.info: working with variables task 1
let name;
let admin;

name = 'Chris'
admin = name
// alert(admin);

// javasscript.info: giving the right name task 2
let ourPlanetName = 'Earth';
let currentUserName = 'Tyannis';

// javasscript.info: uppercase const? task 3
//const BIRTHDAY = '18.04.1982'; // make uppercase?

//const Age = someCode(BIRTHDAY); // make uppercase?

//W3Schools
//If you add two strings, the result will be a string concatenation
let x = "10";
let y = "20";
let z = x + y;
console.log('Z =', z);

//If you add a number and a string, the result will be a string concatenation:

let a = 10;
let b = "20";
let c = a + b;
console.log('C =', c);


let p = 10;
let q = 20;
let r = "The result is: " + p + q;
console.log(r);

// MDN basic math
// #1
const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);

document.querySelector('html').style.backgroundColor = 'purple';

// //#2
const practiceValue = 6.8;
const honeyValue = 69.99999;
const lastValue = 100;
console.log(practiceValue);
console.log(honeyValue);
console.log(lastValue);

// //#3
console.log(typeof myInt);
console.log(typeof myFloat);

// MDN Number methods
// toFixed()
const lotsOfDecimal = 1.766584958675746364;
console.log('lotsOfDecimal =',lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log('twoDecimalPlaces =', twoDecimalPlaces);