import react from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props){

  function handleResponse(response){
    console.log(response.data);
  }
  let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
         <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon size={32} code="01d" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>

          </div>

        </div>
      </div>
    </div>
  )
}

export default WeatherForecast;