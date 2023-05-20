import { createContent } from './appContent.js';
import { createHeader } from './appHeader.js';

export const directionOfwWind = (degree) => {
  if ((degree > 337.5 && degree < 360) || (degree > 22.5 && degree < 22.5)) {
    return 'Northerly';
  } else if (degree > 22.5 && degree < 67.5) {
    return 'North Easterly';
  } else if (degree > 67.5 && degree < 112.5) {
    return 'Easterly';
  } else if (degree > 122.5 && degree < 157.5) {
    return 'South Easterly';
  } else if (degree > 157.5 && degree < 202.5) {
    return 'Southerly';
  } else if (degree > 202.5 && degree < 247.5) {
    return 'South Westerly';
  } else if (degree > 247.5 && degree < 292.5) {
    return 'Westerly';
  } else if (degree > 292.5 && degree < 337.5) {
    return 'North Westerly';
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const cToF = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const fToC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

export const resetWeatherContent = (city, weather) => {
  localStorage.setItem('city', JSON.stringify(city));
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = '';
  const header = createHeader(city);
  const content = createContent(weather);
  wrapper.append(header, content);
};
