document.addEventListener("DOMContentLoaded", () => {

    const weatherForm = document.getElementById("weatherForm");

    weatherForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form input values
        const location = document.getElementById("locationInput").value;
        const temperature = parseFloat(document.getElementById("temperatureInput").value);
        const humidity = parseFloat(document.getElementById("humidityInput").value);

        // Create an object with the form data
        const weatherData = {
            location: location,
            temperature: temperature,
            humidity: humidity
        };

        // Make a POST request to your backend API to add weather data
        fetch("http://localhost:8088/weathers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weatherData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response if needed (e.g., display a success message)
            alert("Weather data added successfully!");
            // Optionally, you can clear the form fields after a successful submission
            weatherForm.reset();
        })
        .catch(error => {
            console.error("Error adding weather data:", error);
            alert("Error adding weather data. Please try again.");
        });
    });
});
