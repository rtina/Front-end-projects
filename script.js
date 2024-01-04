let weather ={
    API_KEY :"611f14dee06be64378092fb9adb45f2f",
    fetchWeather : function(city){
       fetch("https://api.openweathermap.org/data/2.5/weather?q="
       + city 
       +"&units=metric&appid=" 
       + this.API_KEY
       )
       .then((response)=>response.json())
       .then((data) => this.displayWeather(data));

    },
    displayWeather: function(data){
     const { name } = data;
      const { icon , description} = data.weather[0];
      const { temp , humidity } = data.main;
      const { speed } = data.wind;
      console.log (name,icon,description,temp,humidity,speed)
       document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + "km/h";
    },
    search : function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("Keyup", function (event) {
if(event.key == "Enter"){
    weather.search();
}
})