const request = require("request");
const temperature = (latitude, longitude, callback) => {
  const tempurl =
    "https://api.darksky.net/forecast/3b92f47d0714b0cd5239098133c8d29a/" +
    latitude +
    "," +
    longitude;
  //console.log(tempurl);
  request({ url: tempurl, json: true }, (error, response) => {
    if (error) {
      callback("Error!!! try again", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          " It is currently " +
          response.body.currently.temperature +
          " degress out. There is a " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = temperature;
