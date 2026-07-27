import { useState } from "react"
import '../styles/weatherApp.css';
import {CityInput} from './CityInput.jsx';
import {WeatherResult} from './WeatherResult.jsx';

export default function WeatherApp(){
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    function handleCityChange(e){
        setCity(e.target.value);
    }

    const API_KEY = "4fd8640a2674e8f520144d2069df4924";

    async function fetchWeather(){
        if (!city) return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
        } catch (error) {
            console.log("Error fetching data");
        }
    }

    return(
        <div className="result">
            <div className="inputBox"><CityInput city = {city} onCityChange = {handleCityChange} onSearch = {fetchWeather}/></div>
            <div className="ResultBox"><WeatherResult weather = {weather}/></div>
        </div>
    )
}