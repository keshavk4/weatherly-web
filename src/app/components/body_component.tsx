// Import required modules and components
"use client";
import 'bootstrap/dist/css/bootstrap.css'

import { useContext } from "react";
import { MyContext } from "./navbar_component";

// Define the BodyComponent function
const BodyComponent = () => {
  // Access weather data from the context using the useContext hook
  const weatherStateData = useContext(MyContext);

  // Function to format the date and time from a timestamp
  const dateFormater = (timeStamp: number) => {
    if (timeStamp == 0) return "0"; // If the timestamp is 0, return "0"
    const date = new Date(timeStamp * 1000); // Convert the timestamp to milliseconds (timestamp * 1000) and create a Date object
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format the time as HH:mm
    const options: { day: 'numeric', month: 'short' } = { day: 'numeric', month: 'short' }; // Format the date as "day short_month"
    const dateString = date.toLocaleDateString('en-US', options); // Combine the time and date strings
    const dateTimeString = `${time} (${dateString})`; // Return the formatted date and time
    return dateTimeString;
  }

  // JSX for the BodyComponent
  return (
    <>
      <div className="card-deck mb-3 text-center center-div-tag">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Temperature</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title"> {weatherStateData.temp}&deg; <small className="text-muted">C</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Feels Like: {weatherStateData.feels_like}&deg;</li>
              <li>Min. Temperature: {weatherStateData.min_temp}&deg;</li>
              <li>Max. Temperature: {weatherStateData.max_temp}&deg;</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Humidity</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{weatherStateData.humidity}<small className="text-muted">%</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Humidity: {weatherStateData.humidity}%</li>
              <li>Sunset: {dateFormater(weatherStateData.sunset)} </li>
              <li>Sunrise: {dateFormater(weatherStateData.sunrise)}</li>
            </ul>
          </div>
        </div>

        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Wind</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title"> {weatherStateData.wind_speed}</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Wind Speed: {weatherStateData.wind_speed}</li>
              <li>Wind Degrees: {weatherStateData.wind_degrees}</li>
              <li>Cloud Coverage: {weatherStateData.cloud_pct}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the BodyComponent
export default BodyComponent;