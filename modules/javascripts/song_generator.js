define(["utils"], function(utils) {
  var outputEl = utils.getOutputElement();

  console.log("outputEl", outputEl);
  outputEl.append("<h1>Hello</h1>");

  return {
    hereIsTheSong: "Row Row Row Your Boat"
  }
});