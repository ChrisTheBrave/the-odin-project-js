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
// toFixed() returns string representing a number in fixed-point notation; number of 
const lotsOfDecimal = 1.766584958675746364;
console.log('lotsOfDecimal =',lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); // Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
console.log('twoDecimalPlaces =', twoDecimalPlaces);

// Converting number to data types
let myNumber = '74';
// myNumber += 3; results in 743 due to concatenation AND myNumber is actually defined as a strings
// instead we do
myNumber = Number(myNumber) + 3;
console.log(myNumber); 
console.log(typeof myNumber); //string

//Arithmetic operations
/*+	Addition	Adds two numbers together.	6 + 9
-	Subtraction	Subtracts the right number from the left.	20 - 15
*	Multiplication	Multiplies two numbers together.	3 * 7
/	Division	Divides the left number by the right.	10 / 5
%	Remainder (sometimes called modulo)	
Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number.

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).

**	Exponent	Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times. 
It was first Introduced in EcmaScript 2016.	5 ** 2 (returns 25, which is the same as 5 * 5).*/
