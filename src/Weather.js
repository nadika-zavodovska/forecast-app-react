import React from "react";
import './Weather.css';

export default function Weather() {
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
            <h1>Hitchin</h1>

            <ul>
                <li>Wednesday 7:00</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className="float-start" alt="mostly Cloudy" />
                        <div className="float-start temperature-block">
                            <span className="temperature">6</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: <b>0%</b></li>
                        <li>Humidity: <b>47%</b></li>
                        <li>Wind: <b>08 mph</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}