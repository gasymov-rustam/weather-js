import { getWeatherData } from './api.js';
import { createContent } from './appContent.js';
import { createHeader } from './appHeader.js';

const app = async () => {
  const weather = await getWeatherData(JSON.parse(localStorage.getItem('city')) || 'Tel Aviv');
  const header = createHeader(weather.name);
  const content = createContent(weather);
  const wrapper = document.querySelector('.wrapper');
  wrapper.append(header, content);
};

app();
