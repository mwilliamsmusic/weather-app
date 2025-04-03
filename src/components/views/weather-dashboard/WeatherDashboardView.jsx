import React from "react";
import WeatherDashboardWeather from "./WeatherDashboardWeather";
export default function WeatherDashboardView(props) {
    return (
        <div>
            {props.weather && props.location && props.quality ? (
                <WeatherDashboardWeather
                    weather={props.weather}
                    location={props.location}
                    quality={props.quality}
                />
            ) : (
                <div className="flex justify-center items-center ">
                    <div className="text-[20px] text-[#D9D9D9]  font-[600] border border-[#A3A3A3] rounded-md shadow-[0_1px_20px_#2D2D2D40] w-[808px] p-[16px] bg-[rgba(255,255,255)] bg-opacity-90">
                        {"Search for city in a larger resolution"}
                    </div>
                </div>
            )}
        </div>
    );
}
