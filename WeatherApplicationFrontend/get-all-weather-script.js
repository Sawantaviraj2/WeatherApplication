document.addEventListener("DOMContentLoaded", () => {
    // ... (existing code for displaying weather data) ...

    const getAllWeatherButton = document.getElementById("getAllWeatherButton");

    getAllWeatherButton.addEventListener("click", () => {
        // Make a GET request to fetch all weather data
        fetch(`http://localhost:8088/weathers`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    // Create a list to display all weather data
                    const weatherList = document.createElement("ul");
                    data.forEach(weatherData => {
                        const listItem = document.createElement("li");
                        listItem.textContent = `Location: ${weatherData.location}, Temperature: ${weatherData.temperature}°C, Humidity: ${weatherData.humidity}%`;
                        weatherList.appendChild(listItem);
                    });

                    // Display the list of weather data
                    weatherInfo.innerHTML = "";
                    weatherInfo.appendChild(weatherList);
                } else {
                    alert("No weather data found.");
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                alert("Error fetching weather data. Please try again.");
            });
    });
});
