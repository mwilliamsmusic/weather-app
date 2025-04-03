import {weatherMap} from "../../../utils/weatherCodes";
import React from "react";
import {getDayName} from "../../../utils/date";
import {ftToMiles, truncateDec} from "utils/convert";

export default function WeatherDashboardWeather(props) {
    let code =
        props.weather.daily.weather_code[
            props.weather.daily.weather_code.length - 1
        ];
    let min = props.weather.daily.temperature_2m_min
        .sort((a, b) => a - b)
        .reverse();
    let max = props.weather.daily.temperature_2m_max
        .sort((a, b) => a - b)
        .reverse();

    const desc = weatherMap;
    return (
        <div className="bg-[rgb(70,70,70)] min-h-screen">
            <div className="bg-[url('http://localhost:3000/img/CloudyNight.svg')] bg-cover bg-center  ">
                <div className="flex justify-center items-center">
                    <div className="grid w-[1090px] h-[264px]  content-center mt-[75px] border border-[#7D7878] shadow-[0_1px_20px_#7D7878] ">
                        <div className="ml-[164px] grid grid-cols-2  mr-[164px] ">
                            <div className=" justify-self-start self-center ">
                                <p className="text-[35px] font-[500] font-[Work Sans] text-[#FFFFFF] ">
                                    {props.location.name}
                                </p>
                                <p className="text-[#FFA34E] text-[95px] font-[600]  ">
                                    {`${props.weather.current.temperature_2m}${props.weather.current_units.temperature_2m.replace(
                                        "F",
                                        "",
                                    )}`}
                                </p>

                                <div className="text-[25px] font-[500] font-[Work Sans] text-[#D9D9D9] ">
                                    {desc.get(code.toString())}
                                </div>
                            </div>
                            <div className="text-[25px] font-[500] justify-self-end self-center text-[#D9D9D9] ">
                                {`${getDayName(props.weather.daily.time[0]).substring(0, 3)} ${min[0]}${props.weather.daily_units.temperature_2m_min.replace(
                                    "F",
                                    "",
                                )} ${max[0]}${props.weather.daily_units.temperature_2m_max.replace(
                                    "F",
                                    "",
                                )}`}

                                <div>
                                    {"Air quality:"}
                                    {props.quality.hourly.us_aqi[0]}
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="grid w-[1090px]  content-center mt-[75px]  ">
                        <div className=" grid grid-cols-2  ">
                            <div className="text-[25px] font-[500] text-[#F5F5F5]">
                                {"Weather details "}
                            </div>
                            <div className="text-[25px] text-[#F5F5F5]  font-[500] mb-[15px] ">
                                {"5-day weather forecast"}
                            </div>
                            <div className="w-[482px] h-[303px]  border border-[#7D7878] shadow-[0_1px_20px_#7D7878]  flex justify-center items-center ">
                                <div className=" grid grid-cols-3  gap-y-[19px] gap-x-[30px]">
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878]">
                                            {"Feels Like"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5] place-content-center justify-items-center">
                                            {`${props.weather.current.apparent_temperature} ${props.weather.current_units.apparent_temperature.replace("F", "")}`}
                                        </p>
                                    </div>
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878]">
                                            {"ENE Wind"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5]">
                                            {
                                                props.weather.current
                                                    .wind_speed_10m
                                            }
                                            {
                                                props.weather.current_units
                                                    .wind_speed_10m
                                            }
                                        </p>
                                    </div>
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878] ">
                                            {"Humidity"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5] place-content-center justify-items-center">
                                            {`${props.weather.current.relative_humidity_2m} ${props.weather.current_units.relative_humidity_2m}`}
                                        </p>
                                    </div>
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878]">
                                            {"UV"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5] place-content-center justify-items-center">
                                            {`${props.weather.daily.uv_index_max[0]} ${props.weather.daily_units.uv_index_max}`}
                                        </p>
                                    </div>
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878]">
                                            {"visibility"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5] place-content-center justify-items-center">
                                            {`${truncateDec(ftToMiles(props.weather.hourly.visibility[0]), 2)} mi`}
                                        </p>
                                    </div>
                                    <div className="w-[130px] h-[120px]  bg-[rgb(0,0,0)]/70 rounded-[10px] place-content-center justify-items-center">
                                        <p className="text-[18px] font-[500] text-[#7D7878]">
                                            {"Pressure"}
                                        </p>
                                        <p className="text-[26px] font-[500] text-[#F5F5F5] ">
                                            {`${props.weather.hourly.surface_pressure[0]} ${props.weather.hourly_units.surface_pressure}`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
