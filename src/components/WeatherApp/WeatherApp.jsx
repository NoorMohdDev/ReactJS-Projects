import React, { useState } from 'react'

function WeatherApp() {

    const [loc, setLoc] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState({})

    function handleInput(e) {

        const firstCapital = e.target.value.charAt(0).toUpperCase()
        const rest = e.target.value.slice(1)
        setLoc(firstCapital + rest)
    }


    function handleWeather() {
        if (loc !== '') {
            setErrorMsg('')
            fetchWeatherData(loc)
            setLoc('')
        } else {
            setErrorMsg("Please Enter Valid Input...")
            setLoc('')
        }
    }

    async function fetchWeatherData(loc) {
        try {
            setLoading(true)
            let currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`)

            currentWeather = await currentWeather.json()
            if (currentWeather?.cod) {
                setErrorMsg(currentWeather.message)
                setLoading(false)
                setLoc('')

            }
            setWeatherData({ ...currentWeather })
            setLoading(false)
        } catch (error) {
            console.log(error);

            setLoading(false)
        }
    }
    console.log(errorMsg);


    return (
        <div className='rounded-xl m-4 text-white  p-4 bg-green-400 h-100 w-100 text-center'>
            <h1>Weather App</h1>
            <div >
                <input onChange={handleInput} className=' border' value={loc} type="text" />
                <button type="button " onClick={handleWeather} className='border my-2'>Search</button>
            </div>
            {Object.keys(weatherData).length > 2 ?
                <div>
                    <p className="location-name">{weatherData?.name}</p>
                    <p className="date-current">{String(new Date(weatherData?.dt))}</p>
                    <p className="current-temp">Temp. {weatherData?.main?.temp}</p>
                    <p className="current-summary">{weatherData?.weather?.description}</p>
                    <div>
                        <p className="wind-speed">Wind Speed <span>{weatherData?.wind?.speed}</span></p>
                        <p className="humidity">Humidity <span>{weatherData?.main?.humidity}</span></p>
                    </div>
                </div> : <p>{loading ? "Loading..." : errorMsg !== '' ? errorMsg.toUpperCase() : "Please Enter location..."}</p>}
        </div>
    )
}

export default WeatherApp