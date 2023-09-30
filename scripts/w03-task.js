/* LESSON 3 - Programming Tasks */

// addition

function add(number1, number2) {
    return number1 + number2;
}

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function addNumbers() {
    let add1 = parseInt(document.getElementById("add1").value);
    let add2 = parseInt(document.getElementById("add2").value);
    return document.querySelector("#sum").value = add(add1, add2);

};

let btn = document.querySelector("#addNumbers");
btn.addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */

let subtract = function (subtract1, subtract2) {
    return subtract1 - subtract2;
};

let subtractNumbers = function () {
    // subtraction
    let minus1 = Number(document.querySelector("#subtract1").value);
    let minus2 = Number(document.querySelector("#subtract2").value);
    return document.querySelector("#difference").value = subtract(minus1, minus2);
}

let btn1 = document.querySelector("#subtractNumbers");
btn1.addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => {
    return num1 * num2;
}

let multiplyNumbers = () => {
    // multiply
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    return document.querySelector("#product").value = multiply(factor1, factor2);

};

let btn2 = document.querySelector("#multiplyNumbers");
btn2.addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = (x, y) => {
    return x / y
}

function divideNumbers() {
    // division
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    return document.querySelector("#quotient").value = divide(dividend, divisor)
}

let btn3 = document.querySelector('#divideNumbers');
btn3.addEventListener("click", divideNumbers);

function subTotal(a, b, c, d) {
    return a + b + c + d;
}




/* Decision Structure */
let currentTime = new Date();
let currentYear;
currentYear = currentTime.getFullYear();

document.querySelector("#year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = arr;

/* Output Odds Only Array */
let odds = arr.filter((x) => {
    return x % 2 !== 0
})
// display all odd numbers in the arr array
document.querySelector("#odds").innerHTML = odds;


let evens = arr.filter((x) => {
    return x % 2 === 0;
})

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
let sumOfArray = arr.reduce((x, y) => {
    return x + y
}, 0);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let mapMultiply = arr.map((x) => {
    return x * 2

})

document.querySelector("#multiplied").innerHTML = mapMultiply;
/* Output Sum of Multiplied by 2 Array */
let multiSum = arr.map((num) => num * 2).reduce((sum, num) => sum + num);
document.querySelector("#sumOfMultiplied").innerHTML = multiSum;