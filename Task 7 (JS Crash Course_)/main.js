// this is first log statement
console.log('Hello from tehmi.js');

// variables
let name = "Tehreem Fatima";
console.log(name);

const salary = 80000;
console.log(salary);

// Corrected variable re-declaration
const newName = "Tehreem";

const pi = 3.14;

const isPrimeNumber = true;

let result;
console.log(result); // will log 'undefined'

const data = null;

const person = {
    'firstName' : 'Bruce',
    'lastName' : 'Wayne',
    'age' : 30

};
console.log(person.firstName);

const addNumbers = [2, 3, 4, 5, 7, 8];
console.log(addNumbers[3]);

let a = 10;
a = "Tehmi";
a = false;
console.log(a);

let x = 10;
let y = 4;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x <= y);

const isValidNumber = x > 8 && 8 > y;
console.log(isValidNumber);

const isEven = x % 2 === 0 ? true : false;
console.log(isEven);

console.log(2 + '3'); // will log '23'
console.log('4' - '2'); // will log 2
console.log('10' * '2'); // will log 20
console.log(5 + undefined); // will log NaN

console.log(parseInt('5')); // will log 5
console.log((500).toString()); // will log '500'

const num = -5;
if (num > 0) {
    console.log('Number is positive');
} else if (num < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

const color = 'black';
switch(color) {
    case 'black':
        console.log('Yes');
        break;
    case 'green':
        console.log('No');
        break;
    case 'blue':
        console.log('None');
        break;
    default:
        console.log("Not a valid color");
}

for (let i = 1; i <= 6; i++) {
    console.log("iteration number " + i);
}

let i = 1;
while (i <= 5) {
    console.log("iteration number " + i);
    i++;
}

let j = 1;
do {
    console.log("iteration number " + j);
    j++;
} while (j <= 5);

const numArray = [1, 3, 5, 7, 8];
for (const num of numArray) {
    console.log('iteration number ' + num);
}

function greet(username) {
    console.log('Hello ' + username);
}

function add(a, b) {
    return a + b;
}

const arrowSum = (a, b) => a + b;

const sum = add(10,5);
console.log(sum);
