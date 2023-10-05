document.addEventListener("DOMContentLoaded", () => {
    const postButton = document.getElementById("postButton");
    const updateButton = document.getElementById("updateButton");
    const getByLocationButton = document.getElementById("getByLocationButton");
    const getByIdButton = document.getElementById("getByIdButton");
    const getAllButton = document.getElementById("getAllButton");
    const deleteButton = document.getElementById("deleteButton");

    const postPageURL = "addweather.html"; 
    const updatePageURL = "update-weather.html"; 
    const getByLocationPageURL = "get-weather-by-location.html"; 
    const getByIdPageURL = "get-weather-by-id.html"; 
    const getAllPageURL = "get-all-weather.html"; 
    const deletePageURL = "delete-weather.html"; 

    // Add event listeners to navigate to respective pages
    postButton.addEventListener("click", () => {
        window.location.href = postPageURL;
    });

    updateButton.addEventListener("click", () => {
        window.location.href = updatePageURL;
    });

    getByLocationButton.addEventListener("click", () => {
        window.location.href = getByLocationPageURL;
    });

    getByIdButton.addEventListener("click", () => {
        window.location.href = getByIdPageURL;
    });

    getAllButton.addEventListener("click", () => {
        window.location.href = getAllPageURL;
    });

    deleteButton.addEventListener("click", () => {
        window.location.href = deletePageURL;
    });
});
