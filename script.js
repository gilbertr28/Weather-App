
async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "b404ca0aedc0f9a644a16a0a39bb00bc"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        const data = await response.json();
        document.getElementById("result").innerHTML = 
            `Temperature: ${data.main.temp}°C <br> Weather: ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById("result").innerText = "Error: " + error.message;
    }
}
