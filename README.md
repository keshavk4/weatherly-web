# Weatherly

Weatherly is a web application that provides up-to-date weather information for cities around the world. It allows users to check the current weather conditions, temperature, humidity, wind speed, and more, all at their fingertips.

## Features

- Real-time weather data retrieval.
- Detailed weather information including temperature, humidity, and wind speed.
- Sunrise and sunset times.
- User-friendly interface for easy navigation.

## Screenshots

![Screenshot 1](https://github.com/keshavk4/keshavk4/assets/63634923/358dd14c-e5dc-49a7-b901-046252ed1f98)

## Getting Started

To get started with Weatherly, follow these steps:

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/keshavk4/weatherly-web.git
   ```
   
2. Install the required dependencies:

   ```sh
   npm install
   ```

3. Get an API key from [RapidAPI](https://rapidapi.com/apininjas/api/weather-by-api-ninjas/) and replace `<YOUR-API-KEY>` in `services/weather_api_service.tsx` with your API key.

4. Start the development server:

    ```sh
   npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to use Weatherly.

## Usage

1. Enter the name of the city for which you want to check the weather.
2. Click the "Search" button.
3. View the detailed weather information for the selected city.

## Technologies Used

- React
- Axios for API requests
- Bootstrap for styling

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or want to add new features.

## License

This project is released under the [MIT License](https://opensource.org/license/mit). See [LICENSE](LICENSE) for more details.

## Acknowledgments

- Weather data provided by [RapidAPI (Weather by API-Ninjas)](https://rapidapi.com/apininjas/api/weather-by-api-ninjas/).
- Website: https://weatherly-xi.vercel.app/