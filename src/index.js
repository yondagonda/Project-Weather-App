import './style.css';
import getWeatherData from './API';
import initaliseDOM from './displayDOM';

getWeatherData('Sydney');

// initaliseDOM; this isnt needed? as module function inside auto executes?

/* CREATE MODULES FOR EVERYTHING, ONLY USE INDEX.JS FOR IMPORTS TO INITIALISE APPLICATION
module 1 - DOM stuff: displayWeather? displayApp? setBackground? setFarenheit/setCelsius?
module 2 - logic/api stuff: getWeather? requestLocation(location)? requestedLocation(location)?
*/

/* Project Plan:
- should be able to search for specific location
- create a form that lets users input said location
- add a loading bar (optional)
- should be a display in farenheit or celsius toggle
- look of the page should change beased on weather/data e.g. background change
- try to use both promises and async/await in project
*/
