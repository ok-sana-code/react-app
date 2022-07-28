import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);

    setWeather({
      name: response.data.name,
      date: FormatDate(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].main,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "860949625d49936c19736b773a04ad68";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form
      className="SearchForm form form-inline       mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control mx-3 mt-2 "
        type="search"
        placeholder="Enter a city.."
        autoFocus={true}
        onChange={updateCity}
      />
      <button className="btn mt-2 mx-auto mx-sm-0 " type="Submit">
        Search
      </button>
    </form>
  );

  function FormatDate() {
    let date = new Date();
    let houers = date.getHours();
    if (houers < 10) {
      houers = `0${houers}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return `${day} ${houers}:${minutes}`;
  }

  if (loaded) {
    return (
      <div className="WeatherSearch ml-sm-5">
        {form}
        <div className="ShortDescription">
          <h3>{weather.name}</h3>
          <ul>
            <li>{weather.date}</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row Weather">
          <div className="col-6 row">
            <img className="img-fluid" src={weather.icon} alt={weather.description} />
            <div className="CurrentTemperature">
              <span >
                {Math.round(weather.temperature)}
              </span>
              <span className="Units">°C</span>
            </div>
          </div>
          <div className="col-6 mt-4 mt-sm-3">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
