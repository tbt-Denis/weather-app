import React, { useRef } from "react"
import { useState, useEffect } from "react"
import Weather from "./components/weatherComponent/Weather"

function App() {
	const [weather, setWeather] = useState("Kyiv")

	const test = useRef(false)
	useEffect(() => {
		if (test.current === false) {
			getWeather()
		}
		return () => {
			test.current = true
		}
	}, [weather])

	const getWeather = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${weather}&appid=522f7ec766b55c89fccbc47a4e7a72c0`
		)
		const result = await response.json()
		const newWeather = {
			name: result.name,
			country: result.sys.country,
			mainTemp: Math.round(result.main.temp),
			feelsLike: Math.round(result.main.feels_like),
			weatherStatus: result.weather[0].main,
			weatherIcon: `https://openweathermap.org/img/w/${result.weather[0].icon}.png`,
		}
		setWeather(newWeather)
	}

	return (
		<div className='App'>
			<main className='weather-container'>
				<Weather {...weather} />
			</main>
			<button onClick={() => setWeather("Moscow")}>click</button>
		</div>
	)
}

export default App
