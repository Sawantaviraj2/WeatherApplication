document.addEventListener("DOMContentLoaded", () => {
    // ... (existing code for displaying weather data) ...

    const deleteWeatherForm = document.getElementById("deleteWeatherForm");

    deleteWeatherForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get weather ID input value
        const weatherId = document.getElementById("idInput").value;

        // Make a DELETE request to delete weather data by ID
        fetch(`http://localhost:8088/weathers/${weatherId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.status === 204) {
                // Successfully deleted
                alert("Weather data deleted successfully!");
                // Optionally, you can clear the form field after a successful deletion
                deleteWeatherForm.reset();
            } else if (response.status === 404) {
                // Weather data not found
                alert("Weather data not found. Please try again.");
            } else {
                // Other error
                alert("Error deleting weather data. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error deleting weather data:", error);
            alert("Error deleting weather data. Please try again.");
        });
    });
});
