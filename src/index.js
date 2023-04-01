import './style.css';
import getWeatherData from './API';
import { initaliseDOM } from './displayDOM';

getWeatherData('melbourne');
initaliseDOM();
