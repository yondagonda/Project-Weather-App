/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */
import { displayWeatherData, setBackground } from './displayDOM';

async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1f8466b46ae8431d9b7115619232703&q=${location}`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
    displayWeatherData(weatherData);
    setBackground(weatherData);
  } catch (error) {
    alert(`ERROR: Location not found`); // this executes now when location cannot be found
  }
}

export default getWeatherData;
