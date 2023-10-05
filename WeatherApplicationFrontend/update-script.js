document.addEventListener("DOMContentLoaded", () => {
    // ... (existing code for displaying weather data) ...

    const updateWeatherForm = document.getElementById("updateWeatherForm");

    updateWeatherForm.addEventListener("submit", (e) => {
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

        // Extract the weather ID from the URL (e.g., /weathers/{id})
        const urlSegments = window.location.pathname.split("/");
        const weatherId = urlSegments[urlSegments.length - 1];

        // Make a PUT request to update weather data by its ID
        fetch(`http://localhost:8088/weathers/${weatherId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(weatherData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response if needed (e.g., display a success message)
            alert("Weather data updated successfully!");
            // Optionally, you can clear the form fields after a successful update
            updateWeatherForm.reset();
        })
        .catch(error => {
            console.error("Error updating weather data:", error);
            alert("Error updating weather data. Please try again.");
        });
    });
});
