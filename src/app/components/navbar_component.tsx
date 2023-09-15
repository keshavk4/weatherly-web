// Import required modules and components
"use client";
import 'bootstrap/dist/css/bootstrap.css'

import React, { useState, createContext } from 'react';

import Image from 'next/image';
import icon from '/assets/images/icon.jpg';
import BodyComponent from './body_component';
import fetchWeatherData from '../services/weather_api_service';

// Define the interface for the weather data
type WeatherData = {
    cloud_pct: number;
    temp: number;
    feels_like: number;
    humidity: number;
    min_temp: number;
    max_temp: number;
    wind_speed: number;
    wind_degrees: number;
    sunrise: number;
    sunset: number;
    error: boolean;
}

// Create a context to hold weather data and set the initial value
const MyContext = createContext<WeatherData>({ cloud_pct: 0, temp: 0, feels_like: 0, humidity: 0, min_temp: 0, max_temp: 0, wind_speed: 0, wind_degrees: 0, sunrise: 0, sunset: 0, error: false });

// Initial weather data that will be used in the component state
let weatherInitialData: WeatherData = { cloud_pct: 0, temp: 0, feels_like: 0, humidity: 0, min_temp: 0, max_temp: 0, wind_speed: 0, wind_degrees: 0, sunrise: 0, sunset: 0, error: false };

// Define the NavBarComponent function
const NavBarComponent = () => {
    // State variables using the useState hook
    const [userInputCity, setUserInputCity] = useState<string>("");
    const [displayMessage, setDisplayMessage] = useState<string>("Weather of");
    const [weatherStateData, setWeatherStateData] = useState<WeatherData>(weatherInitialData);

    // Event handler for input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInputCity(event.target.value);
    };

    // Event handler for form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

            // Fetch weather data using the input city and update the state
            const data = await fetchWeatherData(userInputCity);
            setWeatherStateData(data);

            // Update the display message based on whether the fetch was successful or not
            setDisplayMessage(data.error ? "Failed to fetch the weather for" : "Weather of");
    };

    // JSX for the NavBarComponent
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image
                            src={icon}
                            width={50}
                            height={40}
                            alt='app icon'
                            style={{
                                borderRadius: '50px',
                            }}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/keshavk4/weatherly-web">GitHub (Source Code)</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
                            <button className="btn btn-dark btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br /><br />
            <h1 className='text-center' style={{ margin: "10" }}>{displayMessage} {userInputCity}</h1>
            <MyContext.Provider value={weatherStateData} > <BodyComponent /> </MyContext.Provider>
        </>
    );
}

// Export the NavBarComponent and the WeatherData context
export default NavBarComponent;
export { MyContext };