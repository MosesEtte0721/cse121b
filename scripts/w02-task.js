/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Moses Archibong Ette";

let currentYear = new Date();

let filePath = "../images/mosesette.jpg";

let nameElement = document.getElementById("name");

let foodElement = document.getElementById("food");

let yearElement = document.querySelector("#year");

let imgChange = document.querySelector("img");
console.log(imgChange);


// Add contents

// display full name 
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// display the current time the screen
yearElement.textContent =
    // change the value of src attribute
    imgChange.setAttribute("src", filePath);
// change the value of alt attribute
imgChange.setAttribute("alt", `profile picture of ${fullName}`);





/* Step 5 - Array */
let favFood = ["afang soup with Fufu", " Aditan soup with Fufu", " edikang Ikong with Garri", " Jollof Rice", " Asa Iwa", " Ekpang Nkukwo", ];
// let favFood = [];

let singleFav = "Afang Soup with Fufu";
favFood.push(singleFav);

favFood.forEach((item) => {
    foodElement.innerHTML = `${favFood}<br>`;

});