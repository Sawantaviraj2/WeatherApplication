document.addEventListener("DOMContentLoaded", () => {
    // ... (existing code for displaying weather data) ...

    const getWeatherForm = document.getElementById("getWeatherForm");

    getWeatherForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get weather ID input value
        const weatherId = document.getElementById("idInput").value;

        // Make a GET request to fetch weather data by ID
        fetch(`http://localhost:8088/weathersbyid/${weatherId}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    locationName.textContent = data.location;
                    temperature.textContent = data.temperature;
                    humidity.textContent = data.humidity;
                    weatherInfo.style.display = "block";
                } else {
                    alert("Weather data not found. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Error fetching weather data. Please try again.");
            });
    });
});
