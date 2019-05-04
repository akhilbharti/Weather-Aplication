const request = require("request");
const temperature = (data, callback) => {
  const lat = data.latitude;
  const long = data.longitude;
  const tempurl =
    "https://api.darksky.net/forecast/3b92f47d0714b0cd5239098133c8d29a/" +
    encodeURIComponent(long) +
    "," +
    encodeURIComponent(lat) +
    "?&units=si";
  //console.log(tempurl);
  request({ url: tempurl, json: true }, (error, response) => {
    if (error) {
      callback("Error!!! try again", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(undefined, response.body.currently.temperature);
    }
  });
};

module.exports = temperature;
