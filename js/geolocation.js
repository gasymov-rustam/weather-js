import { getWeatherData } from './api.js';
import { resetWeatherContent } from './helper.js';

export const handleWeatherByGeolocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = async (pos) => {
    const crd = pos.coords;

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=en&apiKey=d19ee2c3cf734fe7bae2181ec452bdcb`
    );

    const result = await response.json();
    console.log('🚀 => 👍 ==>> geolocation ==>> Line #19 ==>> ', response);
    const weather = await getWeatherData(result.features[0].properties.city);
    resetWeatherContent(result.features[0].properties.city, weather);
  };

  const error = (err) => {
    console.log(`${err.code} ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
};
