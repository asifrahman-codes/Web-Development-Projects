  // DOM elements
  const btn = document.getElementById("searchBtn");
  const result = document.getElementById("result");
  const input = document.getElementById("cityInput");

  // Your API key
  const apiKey = "4fd8640a2674e8f520144d2069df4924";

  // Function to get weather
  async function weatherFnc(cityName) {
    try {
      // Build API URL dynamically
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

      // Fetch data from API
      const res = await fetch(url);

      // Check if city exists
      if (!res.ok) {
        throw new Error("City not found");
      }

      // Convert JSON to JS object
      const data = await res.json();

      // Update DOM
      result.innerText = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;

      // Save last searched city in localStorage
      localStorage.setItem("lastCity", cityName);

    } catch (error) {
      // Show error in DOM
      result.innerText = "Error: " + error.message;
    }
  }

  // Load last searched city on page reload
  window.addEventListener("load", () => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      weatherFnc(lastCity);
    }
  });

  // Button click event
  btn.addEventListener("click", () => {
    const cityName = input.value.trim();
    if (cityName) {
      weatherFnc(cityName);
    } else {
      result.innerText = "Please enter a city name!";
    }
  });