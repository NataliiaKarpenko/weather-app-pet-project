import axios from 'axios';

const URL = 'https://api.openweathermap.org/';
const API_KEY = '8dcd9f739c97fb9e5152465931cf4ba4';
const timeZone_API = '6ANWSK2XPW9R';

export const requestWeatherByCity = async city => {
  const weatherByCity = city
    ? await axios.get(
        `${URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
    : null;

  return weatherByCity;
};

export const requestThreeHourForecast = async city => {
  const threeHourForecast = await axios.get(
    `${URL}data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  return threeHourForecast;
};

export const requestSevenDaysForecast = async city => {
  const geoResponse = city
    ? await axios.get(`${URL}geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
    : null;
  const { lat, lon } = geoResponse.data[0];

  const sevenDaysForecast = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );

  return sevenDaysForecast.data;
};

const searchCurrentPosition = async position => {
  try {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const { data } = await axios.get(
      `${URL}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    return data.name;
  } catch (e) {
    console.log(e);
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

  const localTime = await axios.get(
    `http://api.timezonedb.com/v2.1/get-time-zone?key=${timeZone_API}&format=json&by=position&lat=${lat}&lng=${lon}`
  );

  const formattedTime = localTime.data.formatted
    ? new Date(localTime.data.formatted)
    : new Date();

  const localHours = formattedTime.getHours();
  const localMinutes = formattedTime.getMinutes();

  return { localHours, localMinutes };
};
