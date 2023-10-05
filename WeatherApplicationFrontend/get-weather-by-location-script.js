document.addEventListener("DOMContentLoaded", () => {
    // ... (existing code for displaying weather data) ...

    const getWeatherForm = document.getElementById("getWeatherForm");

    getWeatherForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get location input value
        const location = document.getElementById("locationInput").value;

        // Make a GET request to fetch weather data by location
        fetch(`http://localhost:8088/weathersbylocation/${location}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const weatherData = data[0];
                    locationName.textContent = weatherData.location;
                    temperature.textContent = weatherData.temperature;
                    humidity.textContent = weatherData.humidity;
                    weatherInfo.style.display = "block";
                } else {
                    alert("Location not found. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Error fetching weather data. Please try again.");
            });
    });
});
