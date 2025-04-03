import React, {useEffect, useState} from "react";

import {locationObj, weatherObj} from "utils/jsonData";
import ScreenView from "./views/screen-view/ScreenView";

export default function Main() {
    const [city, setCity] = useState("");
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    function getLocation() {
        const we = weatherObj;
        const lo = locationObj;
        setWeather(we);
        setLocation(lo);
    }
    // let meh = "meh";
    /*     function weatherHandler(we) {
        setWeather(we);
    }
    function locationHandler(lo) {
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
            <ScreenView
                city={city}
                setCity={setCity}
                getLocation={getLocation}
                // getweather={getweather}
                weather={weather}
                location={location}
            />
        </div>
    );
}
