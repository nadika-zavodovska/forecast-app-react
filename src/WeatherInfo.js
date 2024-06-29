import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>

            <ul>
                <li><FormattedDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clearfix">
                        <img src={props.data.icon} className="float-start" alt="mostly Cloudy" />
                        <div className="float-start temperature-block">
                            <span className="temperature">{Math.round(props.data.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: <b>{props.data.humidity} %</b></li>
                        <li>Wind: <b>{props.data.wind} mph</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}