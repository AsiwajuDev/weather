//variables to select doucment objects
const form = document.querySelector(".top-banner form");
const inputZip = document.querySelector("input");
const msg = document.querySelector(".msg");

//onSubmit function
form.addEventListener("submit", (e) => {
  //prevent form default event
  e.preventDefault();

  //call weather function
  getWeather();

  //resets form
  form.reset();
});

//function to get weather value
async function getWeather() {
  try {
    //Initialize the Input values
    let inputZipVal = inputZip.value;
    // let inputCityVal = inputCity.value;

    //API key generated from WeatherStack
    const apiKey = "0cae5c7e3884db1c24b05dfb38eaff6e";

    //OpenWeather API
    // const url = `https://api.openweathermap.org/data/2.5/weather?zip=${inputZipVal}&appid=${apiKey}`;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inputZipVal}`;

    //make API call
    const response = await fetch(url);

    //receive data from API
    const data = await response.json();
    console.log(data);

    //Destructure/Extract information from data returned
    const { current, location, request } = data;

    console.log(`Request Type: ${request.type}`);
    console.log(`Request Parameter: ${request.query}`);
    console.log(`City: ${location.name}`);
    console.log(`Time: ${location.localtime}`);
    console.log(`Day/Night: ${current.is_day === "yes" ? "Day" : "Night"}`);
    console.log(`Temp: ${current.temperature} degrees`);
    console.log(`Humidity: ${current.humidity}`);
    console.log(`Weather Description: ${current.weather_descriptions}`);
    console.log(`Country: ${location.country}`);
  } catch (error) {
    msg.textContent = "Invalid Input";
    console.log(error.message);
  }
}
