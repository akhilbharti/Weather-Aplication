const geocode = require("./utils.js/geocode");
const temperature = require("./utils.js/temperature");
const command = process.argv[2];
if (!command) {
  console.log("enter a location");
} else {
  geocode(command, (error, data) => {
    if (error) {
      return console.log(error);
    }
    temperature(data.latitude, data.longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastdata);
    });
  });
}
