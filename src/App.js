import React from "react";
import { useState, useEffect } from "react";
import Weather from "./components/weatherComponent/Weather";

const FEATURED_API = (prop) => `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${prop}&appid=522f7ec766b55c89fccbc47a4e7a72c0`


function App() {

  const [weather, setWeather] = useState('Kyiv');


  useEffect(() => {
    getWeather(FEATURED_API(weather))
  }, []);


  const getWeather = async (API) => {
      const response = await fetch(API)
      const result = await response.json()
      const newWeather = {
        name: result.name,
        country: result.sys.country,
        mainTemp: Math.round(result.main.temp),
        feelsLike: Math.round(result.main.feels_like),
        weatherStatus: result.weather[0].main,
        weatherIcon: `https://openweathermap.org/img/w/${result.weather[0].icon}.png`
      }
      setWeather(newWeather)
  }

  return (
    <div className="App">
      <main className="weather-container">
        <Weather {...weather} />
      </main>
    </div>
  );
}

export default App;
