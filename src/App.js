import React, {useState} from "react";
import "./App.css";
import ScreenView from "./components/views/screen-view/ScreenView";
import {locationObj, QUALITY, weatherObj} from "./utils/jsonData";
import WeatherDashboardView from "components/views/weather-dashboard/WeatherDashboardView";

function App() {
    const [city, setCity] = useState("");
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [quality, setQuality] = useState(null);

    function getLocation() {
        const we = weatherObj;
        const lo = locationObj;
        const q = QUALITY;
        setWeather(we);
        setLocation(lo);
        setQuality(q);
    }
    /*     function getQuality(cord) {
        if (cord) {
            fetch(convertQualityURL(cord))
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setQuality(data);
                })
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error,
                    );
                });
        }
    } */
    /*     function getLocation() {
        if (city) {
            fetch(locationURL(city))
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setLocation(data[0]);
                    getWeather(data[0]);
                    //   getQuality(data[0]);
                })
                   .then(() => {
                    const cords = location;
                    getWeather(cords);
                    //   getQuality(data[0]);
                }) 
                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error,
                    );
                });
        }
    } */
    /*     function getWeather(cord) {
        if (cord) {
            fetch(convertURL(cord))
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setWeather(data);
                })

                .catch((error) => {
                    console.error(
                        "There was a problem with the fetch operation:",
                        error,
                    );
                });
        }
    } */

    return (
        <div>
            <div>
                <div className=" xl:hidden ">
                    <WeatherDashboardView
                        weather={weather}
                        location={location}
                        quality={quality}
                    />
                </div>
                <div className=" hidden xl:block ">
                    <ScreenView
                        weather={weather}
                        location={location}
                        city={city}
                        setCity={setCity}
                        getLocation={getLocation}
                    />
                </div>
                ;
            </div>
        </div>
    );
}

export default App;
