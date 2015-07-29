
var SolarSystem = (function(solar) {
  var star = ["Centauri", "Rigil Kentaurus", "Barnard's Star","Wolf 359","Luyten 726-8A"];
  var age = "4.6 billion years";
  var dwarfPlanets = [ "Ceres", "Pluto", "Eris", "Makemake", "Haumea"];
   
    solar.getStar = function() {
      return star;
    };
     solar.getAge = function() {
      return age;
     };
    solar.setAge = function(newAge) {
      age = newAge;
    };
    solar.getDwarfPlanets = function() {
      return dwarfPlanets;
    };
    solar.setDwarfPlanets = function(newDwarfPlanets) {
      dwarfPlanets = newDwarfPlanets;
    };
    return solar
})(SolarSystem);

SolarSystem.add
console.log(SolarSystem);
