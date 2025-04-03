import React, {useState} from "react";
import SearchBar from "../SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {locationObj, weatherObj} from "../../utils/jsonData";
import {weatherMap} from "../../utils/weatherCodes";
export default function ScreenView2(props) {
    const weather = weatherObj;
    const location = locationObj;
    let code =
        weather.daily.weather_code[weather.daily.weather_code.length - 1];
    const desc = weatherMap;
    let visibility =
        weather.hourly.relative_humidity_2m[
            weather.hourly.relative_humidity_2m.length - 1
        ];

    return (
        <div className="columns-1 ">
            <div className="grid grid-cols-[808px_auto] justify-center">
                <div className="grid grid-cols-2 ">
                    <div className="justify-self-start border h-[72px] w-[392px] self-end ">
                        <div className="">
                            <SearchBar
                                city={props.city}
                                setCity={props.setCity}
                                getLocation={props.getLocation}
                            />
                        </div>
                    </div>
                    <div className="justify-self-end border self-end ">
                        <div className="h-[48px] w-[288px] self-end">
                            {weather.current.time}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[808px_auto] justify-center">
                <div className="grid grid-cols-2 gap-x-3 gap-y-6">
                    <div className="justify-self-start border font-bold text-gray-900">{`${location.name} (${location.country_code})`}</div>
                    <div className="justify-self-start self-end ">
                        <div className=" self-end font-medium text-gray-800">
                            {weather.current.time}
                        </div>
                    </div>
                    <div className="justify-self-start  text-4xl  self-end font-large ">
                        {weather.current.temperature_2m}
                        {weather.current_units.temperature_2m}
                    </div>
                    <div></div>
                    <div className="justify-self-start">
                        {`${desc.get(code.toString())}, Feels like ${weather.current.apparent_temperature}${weather.current_units.apparent_temperature}`}
                    </div>
                    <div></div>
                    <div className="grid grid-cols-1 ">
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr] ">
                            <div className="justify-self-start self-center  ">
                                wind speed
                            </div>
                            <div className="justify-self-end self-center">
                                {weather.current.wind_speed_10m}
                                {weather.current_units.wind_speed_10m}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr] ">
                            <div className="justify-self-start self-center ">
                                wind gust
                            </div>
                            <div className="justify-self-end self-center ">
                                {weather.current.wind_gusts_10m}
                                {weather.current_units.wind_gusts_10m}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr] ">
                            <div className="justify-self-start self-center ">
                                Humidity
                            </div>
                            <div className="justify-self-end self-center  ">
                                {weather.current.relative_humidity_2m}
                                {weather.current_units.relative_humidity_2m}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr]">
                            <div className="justify-self-start self-center ">
                                prob percipt
                            </div>
                            <div className="justify-self-end self-center ">
                                {weather.current.precipitation}
                                {weather.current_units.precipitation}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 ">
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr] ">
                            <div className="justify-self-start self-center ">
                                cloudy percent
                            </div>
                            <div className="justify-self-end self-center ">
                                {weather.current.cloud_cover}
                                {weather.current_units.cloud_cover}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-[0] border-b border-solid ">
                            <div className="justify-self-start ">
                                visibility
                            </div>
                            <div className="justify-self-end ">
                                {visibility}
                                {weather.hourly_units.visibility}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 border-[0] border-b border-solid grid-rows-[50px,1fr] ">
                            <div className="justify-self-start ">
                                visibility
                            </div>
                            <div className="justify-self-end ">
                                {visibility}
                                {weather.hourly_units.visibility}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
