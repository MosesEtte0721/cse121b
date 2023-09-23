/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Moses Archibong Ette";

let currentYear = new Date();

let profilePicture = "../images/mosesette.jpg";

let nameElement = document.getElementById("name");

let foodElement = document.getElementById("food");

let yearElement = document.querySelector("#year");

let imgChange = document.querySelector("img");
console.log(imgChange);


// Add contents

// display full name 
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// display the current time the screen
yearElement.textContent = currentYear.getFullYear();
// change the value of src attribute
imgChange.setAttribute("src", profilePicture);
// change the value of alt attribute
imgChange.setAttribute("alt", `profile image of ${fullName}`);

/* Step 5 - Array */
let favFood = ["afang soup with Fufu", " Aditan soup with Fufu", " edikang Ikong with Garri", " Jollof Rice", " Asa Iwa", " Ekpang Nkukwo", ];

let anotherFavoriteFood = "ekpang Iwa";

// add the singleFav to the favFood array
favFood.push(anotherFavoriteFood);

// Remove the first element of favFood array
favFood.shift();

// Remove the last element of the favFood array 
favFood.pop()

// loops through the favFood array and display to the screen
favFood.forEach((item) => {
    foodElement.innerHTML += `<li>${item}</li><br>`;

});