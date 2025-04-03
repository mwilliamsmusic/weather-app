import React from "react";
import ThreeHrForecast from "./ui/ThreeHrForecast";
import {threeHourForecast, weatherMap} from "utils/weatherCodes";
export default function ScreenWeather(props) {
    let code =
        props.weather.daily.weather_code[
            props.weather.daily.weather_code.length - 1
        ];
    const desc = weatherMap;
    let visibility =
        props.weather.hourly.relative_humidity_2m[
            props.weather.hourly.relative_humidity_2m.length - 1
        ];
    let threeHour = threeHourForecast(props.weather);
    return (
        <div>
            <div className="justify-self-start">
                {`${desc.get(code.toString())}, Feels like ${props.weather.current.apparent_temperature}${props.weather.current_units.apparent_temperature}`}
            </div>
            <div className="columns-1  ">
                <div></div>
                <div className="flex justify-center items-center ">
                    <div className="  border border-[#A3A3A3] rounded-md shadow-[0_1px_20px_#2D2D2D40] w-[808px] p-[16px] bg-[rgba(255,255,255)] bg-opacity-90">
                        <div className="grid grid-cols-2 mb-[50px] ">
                            <div className="justify-self-start border font-bold text-gray-900">{`${props.location.name} (${props.location.country_code})`}</div>
                            <div className="justify-self-start self-end ">
                                <div className=" self-end font-medium text-gray-800">
                                    {props.weather.current.time}
                                </div>
                            </div>
                            <div className="justify-self-start  text-4xl  self-end font-large ">
                                {props.weather.current.temperature_2m}
                                {props.weather.current_units.temperature_2m}
                            </div>
                        </div>
                        <div className="columns-2">
                            <table className="table-auto  w-[376px] ">
                                <tbody>
                                    <tr className=" h-[48px] border-b border-solid ">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Wind Speed"}
                                        </td>
                                        <td className="font-[600] ">
                                            {`${props.weather.current.wind_speed_10m} ${props.weather.current_units.wind_speed_10m}`}
                                        </td>
                                    </tr>
                                    <tr className=" border-b border-solid h-[48px] ">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Wind Gust"}
                                        </td>
                                        <td className="font-[600] ">
                                            {`${props.weather.current.wind_gusts_10m} ${props.weather.current_units.wind_gusts_10m} `}
                                        </td>
                                    </tr>
                                    <tr className=" border-b border-solid h-[48px] ">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Humidity"}
                                        </td>

                                        <td className="font-[600] ">
                                            {`${props.weather.current.relative_humidity_2m} ${props.weather.current_units.relative_humidity_2m}`}
                                        </td>
                                    </tr>
                                    <tr className="border-b border-solid h-[48px] ">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Prob Percipt."}
                                        </td>

                                        <td className="font-[600] ">
                                            {`${props.weather.current.precipitation} ${props.weather.current_units.precipitation}`}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table-auto  w-[376px] ">
                                <tbody>
                                    <tr className=" h-[48px] border-b border-solid ">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Cloudyness"}
                                        </td>
                                        <td className="font-[600] ">
                                            {`${props.weather.current.cloud_cover} ${props.weather.current_units.cloud_cover}`}
                                        </td>
                                    </tr>
                                    <tr className="  h-[48px] border-b border-solid">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"visibility"}
                                        </td>

                                        <td className="font-[600] ">
                                            {`${visibility} ${props.weather.hourly_units.visibility}`}
                                        </td>
                                    </tr>
                                    <tr className="  h-[48px] border-b border-solid">
                                        <td className="text-[16px] font-[400] text-[#000000]">
                                            {"Pressure"}
                                        </td>
                                        <td className="font-[600] ">
                                            {`${props.weather.hourly.surface_pressure[0]} ${props.weather.hourly_units.surface_pressure}`}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center mt-[40px]  ">
                    <div className="w-[808px] h=[179px] rounded-md border border-[#A3A3A3] shadow-[0_1px_20px_#2D2D2D40] w-[808px] p-[16px] bg-[rgba(255,255,255)] bg-opacity-90p-[16px]">
                        <ThreeHrForecast threeHour={threeHour} />
                    </div>
                </div>
            </div>
        </div>
    );
}
//
