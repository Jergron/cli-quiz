// Define an object to hold the data for a template
var myCar = {
  make: "Honda", 
  model: "Civic",
  tags: [
    {
      color: "Grey"
    },
    {
      owner: "Jeremy"
    }
  ]
};

var taglineData = {
  author_first_name: "Jeremy",
  author_last_name: "Grondahl",
  authored_date: "August 4, 2015"
};

// Ignore this the first time through... move along
Handlebars.registerPartial("tagline", Handlebars.compile($("#tagline-partial").html())(taglineData));

// Grab the HTML from the appropriate <script> tag
var entryHTML = $("#entry-template").html();

// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(myCar);

// Now take the final, compiled HTML and inject it into your DOM
$("#entryOutput").append(entryOutput);

var 