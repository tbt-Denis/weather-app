import React from "react";
import Clock from "../Counter/Clock";
import './Weather.scss';


// { name, country, mainTemp, feelsLike, weatherStatus, weatherIcon }
function Weather(props) {


  return (
    <div className="weather">
      <div className="weather__container">
        <header className="weather__header">
          <h3 className="weather__name">
            <div>{props.name}</div>
            <div>{props.country}</div>
          </h3>
        </header>
        <main className="weather__info">
          <Clock />
          <img src={props.weatherIcon} alt={props.name} />
          <span className="weather__stats">
            <div>{props.weatherStatus}</div>
            <div>{props.mainTemp}&#8451; </div>
            <div>Feels Like - {props.feelsLike}&#8451;</div>
          </span>
        </main>
      </div>
    </div>
  );
}

export default Weather;