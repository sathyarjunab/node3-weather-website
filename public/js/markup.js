const markup = `<div class="container">
<form class="d-flex" role="search">
  <input
    class="form-control me-2"
    type="search"
    placeholder="Location"
    aria-label="Search"
  />
  <button class="btn btn-outline-success" type="submit">
    Search
  </button>
</form>
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
</div> `;
module.exports = markup;
