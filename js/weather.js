const weather = document.querySelector(".js-weather");

const API_KEY = "3046acbcde82ba31d494f3c02df23254";
const COORDS = "coords";

function getWeather(lat, lng)
{
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  ).then(
    function(response)
    {
      return response.json();
    }
  ).then(
    function(json)
    {
      const temperature = json.main.temp;
      const place = json.name;

      weather.innerText = `${temperature}℃ / ${place}`;
    }
  );
}

function saveCoords(objGeo)
{
  localStorage.setItem(COORDS, JSON.stringify(objGeo));
}

function handleGeoSuccess(position)
{
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const objGeo = {
    latitude: latitude,
    longitude: longitude
  };

  saveCoords(objGeo);
  getWeather(latitude, longitude);
}

function handleGeoError()
{
  console.log("error GEO");
}

function askForCoords()
{
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords()
{
  const loadedCoords = localStorage.getItem( COORDS );
  if( loadedCoords == null )
  {
    askForCoords();
  }
  else
  {
    const parsedCoords = JSON.parse( loadedCoords );
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init()
{
  loadCoords();
}

init();
