// windchill.js

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Convert wind speed from kph to mph
    const windSpeedMph = windSpeed * 0.621371;

    // Calculate wind chill using the formula
    const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeedMph, 0.16)) + (0.3965 * temperature * Math.pow(windSpeedMph, 0.16));
    
    return windChill.toFixed(1); // Round to 1 decimal place
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get temperature and wind speed values
    const temperature = 18; // Temperature in Celsius
    const windSpeed = 11.42; // Wind speed in kph

    // Calculate the wind chill
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the wind chill in the windChillResult span
    const windChillElement = document.getElementById('windChillResult');
    if (windChillElement) {
        windChillElement.textContent = `${windChill}°C`;
    } else {
        console.error('Element with ID "windChillResult" not found.');
    }
});
