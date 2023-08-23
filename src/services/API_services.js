import axios from 'axios';
import { addLeadingZero } from 'utils/getCurrentTime';

const URL = 'https://api.openweathermap.org/';

const API_KEY = '5293d8454b519c30f6f6331f38c85b4c';

const timeZone_API = '6ANWSK2XPW9R';

export const requestWeatherByCity = async city => {
  const weatherByCity = await axios.get(
    `${URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  return weatherByCity;
};

export const requestThreeHourForecast = async city => {
  const threeHourForecast = await axios.get(
    `${URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return threeHourForecast;
};

// const requestCoords = async (city) => {
//   const coords = await axios.get(
//     `${URL}geo/1.0/direct?q=${city}&limit=1appid=${API_KEY}`
//   );
//   console.log(coords);
//   return coords;
// };

// requestCoords("Kyiv");

export const requestSevenDaysForecast = async city => {
  const geoResponse = await axios.get(
    `${URL}geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  const { lat, lon } = geoResponse.data[0];

  const sevenDaysForecast = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return sevenDaysForecast.data;
};

// const date = new Date(1691834400);
// const day = new Date(1691920800);
// console.log(date);
// console.log(day);

// export const requestSevenDaysForecast = async (city) => {
//   const sevenDaysForecast = await axios.get(
//     `${URL}data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`
//   );

//   return sevenDaysForecast.data;
// };

const searchCurrentPosition = async position => {
  try {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const { data } = await axios.get(
      `${URL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return data.name;
  } catch (e) {
    console.error(e);
  }
};

export const showCurrentPosition = async () => {
  if (!('geolocation' in navigator)) {
    console.log('Geolocation is not available');
  }

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        error => reject(error)
      );
    });

    const localCity = await searchCurrentPosition(position);
    console.log(localCity);

    return localCity;
  } catch (error) {
    console.log('Geolocation error or API error:', error);
  }
};

export const requestLocalTime = async city => {
  const geoResponse = await axios.get(
    `${URL}geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  const { lat, lon } = geoResponse.data[0];
  console.log(lat);
  const localTime = await axios.get(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZone_API}&format=json&by=position&lat=${lat}&lng=${lon}`
  );

  console.log(localTime);
  const local = new Date(localTime.data.formatted);

  const localHours = addLeadingZero(local.getHours());
  const localminutes = addLeadingZero(local.getHours());
  console.log(`${localHours}:${localminutes}`);
  return `${localHours}:${localminutes}`;
};

requestLocalTime('oslo');
