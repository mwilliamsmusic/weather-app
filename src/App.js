import React, {useEffect, useState} from "react";
import "./App.css";
import ScreenView from "./components/views/screen-view/ScreenView";
import WeatherDashboard from "./components/views/weather-dashboard/WeatherDashboard";
import {locationObj, weatherObj} from "./utils/jsonData";
import {convertURL, locationURL} from "utils/url";
import Main from "components/Main";

function App() {
    const [city, setCity] = useState("");
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState(null);
    let meh = "meh";
    function getLocation() {
        const we = weatherObj;
        const lo = locationObj;
        setWeather(we);
        setLocation(lo);
    }

    /* 
    function getLocation() {
        if (city) {
            fetch(locationURL(city))
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json(); // Parse the JSON response
                })
                .then((data) => {
                    setLocation(data.results);
                    getWeather();
                })

                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error,
                    );
                });
        }
    }
    function getWeather() {
        if (location) {
            fetch(convertURL(city))
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json(); // Parse the JSON response
                })
                .then((data) => {
                    console.log(data);
                    setWeather(data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error,
                    );
                });
        }
        <div className="visable xl:hidden ">
            <WeatherDashboard />
        </div>;

        const we = weatherObj;
        const lo = locationObj;
        setWeather(we);
        setLocation(lo);
    } */

    return (
        <div>
            <Main />
        </div>
    );
}

export default App;
