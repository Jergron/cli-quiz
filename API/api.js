$(document).ready(function() {
  // $.ajax({
  //   url: "http://stevebrownlee.com:8081/foodtype",
  //   method: "POST",
  //   data: {
  //     name: "Sloth"
  //   }
  // }).done(function(newType){

  // });

function foodList () {
  var type= [];
  var foods =[];

  $.ajax({
    url: "http://stevebrownlee.com:8081/foodtype"
  }).done(function(foodTypes) {
    for (var i = 0; i < foodTypes.length; i++) {
     type.push(foodTypes[i].name)
    }
  });
    $.ajax({
    url: "http://stevebrownlee.com:8081/food"
  }).done(function(food) {
    for (var i = 0; i < food.length; i++) {
     foods.push(food[i].name);
    }
    // for(var i = 0; i < type.length; i++ ) {
    //   for(var j = 0; j < foods.length; j++) {
    //     console.log(type[i] + foods[j]);
  
    //     }
    // }
    $(".output").append(type[i] + " (" + foods[i] + ")");
  });
}
foodList();
});


