import React, { useState } from "react";
import axios from "axios";
let apiKey = "3dbc7ff6d43c851d06e56b5f272d5357";
let tempC = 0;
let tempF = 0;
let uni = "C";
let humidity = 0;
let spdC = 0;
let spdF = "";
let desc = "";
let icon = "10d";
let iconUrl = ``;

export default function Search() {
  let [val, setValue] = useState("New York");
  //First line with location and weather
  let [str, setStr] = useState(``);
  //Second line with wind speed and humidity
  let [str2, setStr2] = useState(``);
  //Third line with weath description
  let [str3, setStr3] = useState(``);

  //Stores the search bar input as it's changed
  function updateValue(event) {
    let vex = event.target.value;
    if (vex.trim("") === "") {
      setValue("New York");
    } else {
      setValue(vex);
    }
  }
  //Is activated when the search is submitted
  function submitted(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateValuesC);
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(updateValuesF);
    console.log(uni);
  }
  //Stores value for metric. Also stores values that doesn't change according to unit. Runs every time a new city name is submitted
  function updateValuesC(response) {
    tempC = response.data.main.temp;
    humidity = response.data.main.humidity;
    spdC = response.data.wind.speed;
    desc = response.data.weather[0].description;
    icon = response.data.weather[0].icon;
    iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    if (uni === "C") {
      setStr(`In ${val} it is ${tempC}°${uni}`);
      setStr2(`Humidity is ${humidity}% windspeed is ${spdC} km/h`);
      setStr3(`With ${desc}`);
    }
  }
  //Stores value for imperial. Runs every time a new city name is submitted
  function updateValuesF(response) {
    tempF = response.data.main.temp;
    spdF = response.data.wind.speed;
    iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    if (uni === "F") {
      setStr(`In ${val} it is ${tempF}°${uni}`);
      setStr2(`Humidity is ${humidity}% windspeed is ${spdF} mph`);
      setStr3(`With ${desc}`);
    }
  }
  //Switches to metric values, leaves non unit dependent values alone
  function setC() {
    uni = "C";
    setStr(`In ${val} it is ${tempC}°${uni}`);
    setStr2(`Humidity is ${humidity}% windspeed is ${spdC} km/h`);
  }
  //Switches to imperial values, leaves non unit dependent values alone
  function setF() {
    uni = "F";
    setStr(`In ${val} it is ${tempF}°${uni}`);
    setStr2(`Humidity is ${humidity}% windspeed is ${spdF} mph`);
  }
  return (
    <div>
      <h2>{str}</h2>
      <h2>{str2}</h2>
      <h3>{str3}</h3>
      <img src={iconUrl} alt="" />
      <br />
      <form className="input-group" onSubmit={submitted}>
        <input
          type="search"
          className="form-control"
          placeholder="Enter a city"
          onChange={updateValue}
        />
        <input
          type="submit"
          className="btn btn-outline-secondary"
          value="Search"
        />
        <input
          type="button"
          className="btn btn-outline-secondary"
          onClick={setC}
          value="C"
        />
        <input
          type="button"
          className="btn btn-outline-secondary"
          onClick={setF}
          value="F"
        />
      </form>
    </div>
  );
}
