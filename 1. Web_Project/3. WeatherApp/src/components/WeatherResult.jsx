export function WeatherResult({ weather }) {
    if (!weather) return null;

    const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

    return (
        <div className="weather-content-wrapper">
            <img src={iconUrl} alt="weather icon" className="weather-icon" />
            
            <div className="main-temp">
                <h1 className="temp-display">{Math.round(weather.main.temp)}°c</h1>
                <h2>{weather.name}</h2>
                <p className="condition">{weather.weather[0].description}</p>
            </div>

            <div className="weather-details">
                <div className="detail-item">
                    <span>💧 {weather.main.humidity}%</span>
                    <p>Humidity</p>
                </div>
                <div className="detail-item">
                    <span>💨 {weather.wind.speed} km/h</span>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div>
    );
}