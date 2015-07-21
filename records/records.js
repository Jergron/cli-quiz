// Create a variable that holds your name
var myName = "Jeremy Grondahl";

// Create an object that holds your personal information
var myInfo = {
  age: 32,
  last_company: "St. Bernard Building Management",
  marital_status: "Married",
  spouse: "Jessica Grondahl"
};

// Add your name as a new key on the info object
myInfo.name = myName;

// Create another object that represents a record/album
var Eliminator = {
  name: "Eliminator",
  artist: "ZZ Top",
  year: 1981,
  sales: 11000000,
  number_of_hits: 4
};

// Create an array that holds records
var recordArray = [Eliminator];

// Add at least two more album objects to the array
var Sawdust = {
  name: "Sawdust",
  artist: "",
  year: 2007,
  sales: 1000000,
  number_of_hits: 0
};
  
var HopesAndFears = {
  name: "Hopes and Fears",
  artist: "",
  year: 2007,
  sales: 10000000,
  number_of_hits: 0
};

recordArray.push(Sawdust, HopesAndFears);
  

/*
Create a function that adds a new rating
property to an album. The function should take
two arguments.
  1. album - The name of the album
  2. rating - A numeric rating from 1-10
*/
var newRating = function (album, rating) {
  album.rating = newRating;
  }
  // Add the rating to the album
  newRating(Eliminator, 7);
  newRating(Sawdust, 4);
  newRating(HopesAndFears, 6);

/*
Create a function that loops over your record
array and adds the same rating (of your choice)
to each one.
*/
var modifyAlbums = function (ratingUpdate) {
  for (i = 0; i < recordArray.length; i++) {
   var album = recordArray[i];
    album.rating = ratingUpdate;
  }
}

// Call the function that starts modifying the array
modifyAlbums(9);
  
// console.log your array of records
console.log(recordArray);

// Display the new array in the browser
var recordDom = document.getElementById("records");

/*
 JSON.stringify() is a built-in function
 on all major browsers that parses a complex
 structure like an array or JavaScript 
 object and lets you see it as a string.
*/
recordDom.innerHTML = JSON.stringify(recordArray, null, 2);
