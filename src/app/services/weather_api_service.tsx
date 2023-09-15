const axios = require('axios');

// Async function to fetch weather data for a given city
const fetchWeatherData = async (inputCity: string) => {
  // Configuration options for the HTTP request
  const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: { city: inputCity },
    headers: {
      // Replace '<YOUR-API-KEY>' with your actual API key
      'X-RapidAPI-Key': '<YOUR-API-KEY>',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    // Send the HTTP request using Axios
    const response = await axios.request(options);

    // Extract and return weather data from the response
    return { cloud_pct: response.data['cloud_pct'], temp: response.data['temp'], feels_like: response.data['feels_like'], humidity: response.data['humidity'], min_temp: response.data['min_temp'], max_temp: response.data['max_temp'], wind_speed: response.data['wind_speed'], wind_degrees: response.data['wind_degrees'], sunrise: response.data['sunrise'], sunset: response.data['sunset'], error: false };

  } catch (error) {
    console.error(error); // Log any errors to the console
    
    // If there's an error, return default weather data with error flag set to true
    return { cloud_pct: 0, temp: 0, feels_like: 0, humidity: 0, min_temp: 0, max_temp: 0, wind_speed: 0, wind_degrees: 0, sunrise: 0, sunset: 0, error: true };
  }
}

export default fetchWeatherData;