/*
  ** Note: The names of variable are up to you

  Your mission:
    1. Create a variable with a true default value.
    2. Create a variable that is an empty string.
    3. Create a variable that holds an empty array.
    4. Create a variable that holds the value of 2.
    5. Add the names of ten fruits to the array.
    6. Set up code to loop over every other item in your array of fruits.
    7. Inside the loop, check if there is the letter 'a' in the name of the current fruit. If there is, the boolean variable you set up in step 1 should be true, else set it to false.
    8. Using that variable as the condition, if there is an 'a', then replace it with an 'e'.
    9. Add the new name of the fruit to the variable that was initially set up as an empty string (see step 2).
    10. Once the loop is complete, set the contents of the `fruit-list` DOM element (see HTML area). Each fruit should be displayed as a block-level element type.
*/

var love = true;
var myFavFruit = "";
var fruits = [];
var two = 2;

fruits = ["orange", "banana", "apple", "grape", "strawberry", "blueberry", "pineapple", "mango", "kiwi", "tangerine"];

for (i = 0; i <= fruits.length; i++) {
    if (fruits === "a" ) {
        myFavFruit += fruits[i].replace("a", "e");
    }
    else {
       false;
    }
      var fruit = document.getElementById("fruit-list")
       fruit.innerHTML += "<p>" + myFavFruit[i] + "</p>";
}