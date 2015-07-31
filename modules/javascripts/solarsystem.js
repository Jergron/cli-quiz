
var SolarSystem = (function() {
  var planets = ["Ceres", "Pluto", "Eris", "Makemake", "Haumea"];
  var landedOn = 4;
  var spaceCraft = [];

  return {
    getplanets: function() {
      return planets;
    },
    getLandedOn: function() {
      return landedOn;
    },
    setLandedOn: function(newLandedOn) {
      landedOn= newLandedOn;
    },
    modified_date: new Date(),
    getSpacecraft: function() {
     return age;
    },
    setSpaceCraft: function(newSpaceCraft) {
      spaceCraft.push(newSpaceCraft);
    }
    
  };
})();
SolarSystem.setSpaceCraft("Voyager 1");
SolarSystem.setSpaceCraft("Voyager 2");
SolarSystem.setSpaceCraft("Ulysses");
SolarSystem.setSpaceCraft("Wind"); 
SolarSystem.setSpaceCraft("Cassini"); 
SolarSystem.setSpaceCraft("Stardust");






