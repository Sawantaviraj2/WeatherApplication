document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const locationInput = document.getElementById('location-input');
    const weatherList = document.getElementById('weather-list');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = locationInput.value.trim();

        if (location) {
            fetch(`http://localhost:8088/weathersbylocation/${location}`)
                .then((response) => response.json())
                .then((data) => {
                    weatherList.innerHTML = ''; // Clear previous results

                    if (data.length > 0) {
                        data.forEach((weather) => {
                            const listItem = document.createElement('li');
                            listItem.textContent = `Location: ${weather.location}, Temperature: ${weather.temperature}, Humidity: ${weather.humidity}`;
                            weatherList.appendChild(listItem);
                        });
                    } else {
                        const noDataItem = document.createElement('li');
                        noDataItem.textContent = 'No data found for this location.';
                        weatherList.appendChild(noDataItem);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching weather data:', error);
                });
        }
    });
});
