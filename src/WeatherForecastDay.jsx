import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
  return (
    <div>
      <div className="WeatherForecast-day">{props[0].weather[0].icon}</div>
          <WeatherIcon size={32} code="01d" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">{props[0].temp.max}°</span>
            <span className="WeatherForecast-temperature-min">{props[0].temp.min}°</span>

          </div>
    </div>
  )
}