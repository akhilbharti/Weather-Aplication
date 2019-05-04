const geocode = require("./utils.js/geocode");
const temperature = require("./utils.js/temperature");

geocode("Rajpur Road, Dehradun, Uttarakhand", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
  temperature(data, (error, data) => {
    console.log("Error", error);
    console.log("Data", data + " degrees");
  });
});
