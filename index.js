var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");

var app = express();

var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");



// Then we use the package to search for the weather at a location
weather.find({ search: "Miami, FL", degreeType: "F" }, function(err, result) {

// If there is an error log it.
   if (err) {
     console.log(err);
   }

//   // If there is no error... then print out the weather data.
//   // We use JSON.stringify to print the data in string format.
//   // We use the JSON.stringify argument of "2" to make the format pretty.
//   // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));

});

module.exports = app