const API_KEY = '754fa7dd08f689851b133373b981c752'

function onGeoOK(position) {
  const lat = position.coords.latitude
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child')
      const weather = document.querySelector('#weather span:last-child')
      city.innerText = data.name + '\n'
      weather.innerText = `${data.main.temp}℃  ${data.weather[0].main}`
    })
}
function onGeoError() {
  alert("Can't find you. No weather")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError)
