import React from "react";
import axios from "axios";
 export default function Weather(){

function showTemperature(response){
    return alert(
      `The temperature in Lviv is ${Math.round(response.data.main.temp)}°C`
    );
}

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=860949625d49936c19736b773a04ad68&units=metric`;

    axios.get(apiUrl).then(showTemperature)
    return(<h3>😀Hello, Oksana!</h3>)
 }