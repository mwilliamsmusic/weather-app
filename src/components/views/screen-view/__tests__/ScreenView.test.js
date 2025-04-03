import React from "react";
import {render, screen} from "@testing-library/react";

import {weatherObj} from "utils/jsonData";
import {formatTime} from "utils/date";
import ScreenView from "../ScreenView";

describe("ScreenView Component", () => {
    test("Text display", () => {
        const weather = weatherObj;
        /*      let visibility =
            weather.hourly.relative_humidity_2m[
                weather.hourly.relative_humidity_2m.length - 1
            ]; */
        render(<ScreenView weather={weather} />);

        /*    expect(
            screen.getByText(`Data as of ${formatTime(weather.current.time)}`),
        ).toBeInTheDocument(); */
        expect(
            screen.getByText(
                `${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`,
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${weather.current.wind_gusts_10m} ${weather.current_units.wind_gusts_10m}`,
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${weather.current.relative_humidity_2m} ${weather.current_units.relative_humidity_2m}`,
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${weather.current.precipitation} ${weather.current_units.precipitation}`,
            ),
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                `${weather.current.cloud_cover} ${weather.current_units.cloud_cover}`,
            ),
        ).toBeInTheDocument();

        /*       expect(
            screen.getByText(
                `${visibility} ${weather.hourly_units.visibility}`,
            ),
        ).toBeInTheDocument(); */
        expect(
            screen.getByText(
                `${weather.hourly.surface_pressure[0]} ${weather.hourly_units.surface_pressure}`,
            ),
        ).toBeInTheDocument();
    });
});
