requirejs(["main_properties", "song_generator", "utils"], function(props, generator, utils) {
   var funnyBone = utils.getOutputElement();
  console.log("props", props);
  console.log("generator", generator);
  funnyBone.append("<h1>" + generator.hereIsTheSong + "</h1>");

});