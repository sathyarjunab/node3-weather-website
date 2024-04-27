const process = require("process");
const chalk = require("chalk");
const { url, options } = require("./url_options");
async function data(address, res) {
  try {
    if (!address) {
      res.send("enter the location");
    } else {
      const response = await fetch(url + `${address}`, options);
      let result = await response.text();
      result = JSON.parse(result);
      res.send({
        forecast: result.weather[0].main,
        location: result.name,
        description: result.weather[0].description,
      });
    }
  } catch (error) {
    if (error.cause) {
      res.send("cant connect to the api");
    } else res.send("dont know english a hole me to!!!!!!!");
  }
}
module.exports = data;
// `${result.weather[0].main} (${
//   result.weather[0].description
// }). it is currently ${(result.main.temp - 273.15).toFixed(
//   2
// )} degress out. it feels like ${(result.main.feels_like - 273.15).toFixed(
//   2
// )} degrees out`
