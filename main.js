import {
	convertUTCToDate, isDay, getDayString, getTimeString,
  } from './component/date-time';
  import WeatherDisplay from './component/weather-display';
  import { getWeatherData, getWeatherIconURL, getCountryName } from './component/weather-api';
  import './main.scss';
  import './_themes.scss';

  const weatherDisplay = new WeatherDisplay();
  
  // Get open weather API
  async function loadWeather(city) {
	try {
	  const data = await getWeatherData(city);
	  weatherDisplay.setStatusMessage('');
	  const sunrise = convertUTCToDate(data.sys.sunrise * 1000, data.timezone);
	  const sunset = convertUTCToDate(data.sys.sunset * 1000, data.timezone);
	  const localTime = convertUTCToDate((Date.now() - 2), data.timezone);
	  const isDaytime = isDay(localTime, sunrise, sunset);
	  const country = getCountryName(data.sys.country);
	  weatherDisplay.clearSearchText();
	  weatherDisplay.setTemperature(data.main.temp, 'cels');
	  weatherDisplay.setLocation(`${data.name}, ${country}`);
	  weatherDisplay.setWeather(data.weather[0].description);
	  weatherDisplay.updateBackground(isDaytime);
	  weatherDisplay.setIcon(getWeatherIconURL(data.weather[0].icon));
	} catch (err) {
	  weatherDisplay.setStatusMessage(err);
	}
  }
  
  loadWeather('london');
  weatherDisplay.getSearchBtn().addEventListener('click', () => {
	loadWeather(weatherDisplay.getSearchText());
  });