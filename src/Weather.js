import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: 'Wednesday 07:00',
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
        })
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form action="">
                    <div className="row mt-3">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" /></div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" autoFocus="on" /></div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>

                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className="float-start" alt="mostly Cloudy" />
                            <div className="float-start temperature-block">
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>

                            <li>Humidity: <b>{weatherData.humidity} %</b></li>
                            <li>Wind: <b>{weatherData.wind} mph</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        )

    } else {
        let apiKey = "771f23af3cb3eb68698ec93382b0fd06";
        let city = "London";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading..."
    }


}