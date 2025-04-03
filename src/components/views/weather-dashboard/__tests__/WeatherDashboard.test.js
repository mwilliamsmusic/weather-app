import React from "react";
import {render, screen} from "@testing-library/react";
import WeatherDashboard from "../WeatherDashboard";
import {locationObj, weatherObj} from "utils/jsonData";
import {weatherMap} from "utils/weatherCodes";
import {getDayName} from "utils/date";

const location = locationObj;
const weather = weatherObj;
let code = weather.daily.weather_code[weather.daily.weather_code.length - 1];
let min = weather.daily.temperature_2m_min.sort((a, b) => a - b).reverse();
let max = weather.daily.temperature_2m_max.sort((a, b) => a - b).reverse();
const desc = weatherMap;
describe("WeatherDashboard Component", () => {
    test("Display text WeatherDashboard", () => {
        render(<WeatherDashboard />);
        expect(
            screen.getByText(
                `${weather.current.temperature_2m}${weather.current_units.temperature_2m.replace("F", "")}`,
            ),
        ).toBeInTheDocument();
        expect(screen.getByText(desc.get(code.toString()))).toBeInTheDocument();

        expect(
            screen.getByText(
                `${getDayName(weather.daily.time[0]).substring(0, 3)} ${min[0]}${weather.daily_units.temperature_2m_min.replace(
                    "F",
                    "",
                )} ${max[0]}${weather.daily_units.temperature_2m_max.replace(
                    "F",
                    "",
                )}`,
            ),
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                `${weather.current.apparent_temperature} ${weather.current_units.apparent_temperature.replace("F", "")}`,
            ),
        ).toBeInTheDocument();

        /*       expect(
            screen.getByText(weather.current.wind_speed_10m),
        ).toBeInTheDocument(); */
        /*        expect(
            screen.getByText(
                `${weather.hourly.visibility[0]} ${weather.hourly_units.visibility}`,
            ),
        ).toBeInTheDocument(); */
        expect(
            screen.getByText(
                `${weather.hourly.surface_pressure[0]} ${weather.hourly_units.surface_pressure}`,
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${weather.current.relative_humidity_2m} ${weather.current_units.relative_humidity_2m}`,
            ),
        ).toBeInTheDocument();
    });
});
