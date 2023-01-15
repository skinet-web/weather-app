export default class WeatherDisplay {
	constructor() {
	  this.timeLocal = document.querySelector('#time-local');
	  this.dayLocal = document.querySelector('#day-local');
	  this.weatherTemp = document.querySelector('#weather-temp');
	  this.weatherIcon = document.querySelector('#weather-icon');
	  this.weatherText = document.querySelector('#weather-text');
	  this.locationText = document.querySelector('#location');
	  this.searchBtn = document.querySelector('#search-btn');
	  this.searchText = document.querySelector('#search-text');
	  this.statusMsg = document.querySelector('#status-message');
	  this.body = document.querySelector('body');
	}
  
	setLocation(location) {
	  this.locationText.innerText = location;
	}
  
	setTemperature(temp, unitTemp) {
	  let unit;
	  switch (unitTemp) {
		case 'cels':
		  unit = '°C';
		  break;
		case 'fahr':
		  unit = '°F';
		  break;
		default:
		  unit = 'Error';
		  break;
	  }
	  this.weatherTemp.innerText = `${temp}${unit}`;
	}
  
	setWeather(weather) {
	  this.weatherText.innerText = weather;
	}
  
	setIcon(url) {
	  this.weatherIcon.src = url;
	}
  
	setLocalTime(time) {
	  this.timeLocal.innerText = time;
	}
  
	setLocalDay(day) {
	  this.dayLocal.innerText = day;
	}
  
	setStatusMessage(msg) {
	  this.statusMsg.innerText = msg;
	}
  
	getSearchBtn() {
	  return this.searchBtn;
	}
  
	clearSearchText() {
	  this.searchText.value = '';
	}
  
	getSearchText() {
	  return this.searchText.value;
	}
  
	updateBackground(isDay) {
	  this.app = document.querySelector('#app');
	  this.sun = document.querySelector('#sun');
	  this.moon = document.querySelector('#moon');
	  if (isDay) {
		this.app.classList.add('day');
		this.app.classList.remove('night');
		this.sun.classList.remove('move');
		this.moon.classList.add('move');
	  } else {
		this.app.classList.remove('day');
		this.app.classList.add('night');
		this.sun.classList.add('move');
		this.moon.classList.remove('move');
	  }
	}
  }