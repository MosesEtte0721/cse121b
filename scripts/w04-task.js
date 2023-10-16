/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Moses Ette",
    photo: "/images/mosesette.jpg",
    favoriteFood: [
        "Usung Ikpong",
        "Adesi",
        "Nkoti",
        "Afede Afang",
        "Afede Ikon",
        "Afede Atama"
    ],
    hobbies: [
        "Coding",
        "Reading about technology and the earth",
        "Research"
    ],
    placeLived: []

};

let placeLive = {
    place: "Jos",
    length: "4+ years"
};

myProfile.placeLived.push(placeLive);

let placesLived = {
    place: "Kaduna",
    length: "2+ years"
};

myProfile.placeLived.push(placesLived);


/* Populate Profile Object with placesLive objects */
let name = document.getElementById("name").textContent = myProfile.name;
let photo = document.getElementById("photo").src = myProfile.photo;
let alt = document.getElementById("photo").alt = myProfile.name;

/* DOM Manipulation - Output */
myProfile.favoriteFood.map((meal) => {
    let li = document.createElement("li");
    li.textContent = meal;
    document.getElementById("favorite-foods").appendChild(li);
});

myProfile.hobbies.map(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});


myProfile.placeLived.map(area => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = area.place;
    dd.textContent = area.length;
    document.getElementById("places-lived").append(dt, dd);

});

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */