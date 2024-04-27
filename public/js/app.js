const url = `https://weather-api138.p.rapidapi.com/weather?city_name=`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e9a8f4ecd0mshf7d3247c9f87773p1e8394jsn1391d408e433",
    "X-RapidAPI-Host": "weather-api138.p.rapidapi.com",
  },
};
async function data(address) {
  try {
    if (!address) {
    } else {
      let dis_err = document.querySelector(".to_e");
      dis_err.innerHTML = " ";
      dis_err.innerHTML = "<h1>loading......<h1>";
      const response = await fetch(url + `${address}`, options);
      let result = await response.text();
      result = JSON.parse(result);
      if (result.cod == "404") {
        dis_err.innerHTML = " ";
        dis_err.innerHTML = `<h1>please enter a valid name<h1>`;
      } else {
        dis_err.innerHTML = `<div class="container">
        <div class="to_e">
        <div>
          <div>
            <img src="./images/coord.png" alt="Latitude and Longitude" class="img-fluid mb-3" style="border: 2px solid red;" width="500" height="300">
            <h1>Latitude and Longitude</h1>
            <p class="lat-and-lon"></p>
          </div>
          <div>
            <img src="./images/weather.jpg" alt="Weather" class="img-fluid mb-3"width="500" height="300">
            <h1>Weather</h1>
            <p class="lead weather"></p>
          </div>
        </div>
        
        <div>
          <div>
            <img src="./images/temp.png" alt="Temperature" class="img-fluid mb-3"width="500" height="300">
            <h1 >Temperature and Sea Level</h1>
            <p class="lead temp-and-sea"></p>
          </div>
          <div >
            <img src="./images/cou.Webp" alt="Country" class="img-fluid mb-3"width="500" height="300">
            <h1 >Country Name</h1>
            <p class="lead country"></p>
            <div >
            </div>
          </div>
        </div>
        </div>
        </div>`;
        console.log(result);
        let latandlongmarkup = `LATITUDE=${result.coord.lat} and LONGITUDE=${result.coord.lon}`;
        let weathermarkup = `${result.weather[0].main}=${result.weather[0].description}`;
        let temp = `temp= ${result.main.temp},
        feels_like= ${result.main.feels_like},
        temp_min= ${result.main.temp_min},
        temp_max= ${result.main.temp_max},
        pressure=${result.main.Pressure},
        humidity= ${result.main.Humidity},
        sea_level= ${result.main.Sea_Level}
        ground_level=${result.main.grnd_level}`;
        document.querySelector(".lat-and-lon").textContent = latandlongmarkup;
        document.querySelector(".weather").textContent = weathermarkup;
        document.querySelector(".temp-and-sea").textContent = temp;
        document.querySelector(".country").textContent = result.sys.country;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
const place = document.querySelector(".d-flex");
const search = document.querySelector(".form-control");
place.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  data(location);
});
