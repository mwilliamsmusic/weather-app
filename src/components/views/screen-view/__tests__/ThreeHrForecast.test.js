import React from "react";
import {render, screen} from "@testing-library/react";

describe("ThreeeHrForcast Component", () => {
    // getByText doesnt work because Carousel package
    test("Carousel list display", () => {
        let arr = [];
        arr.push({
            time: "12:00 AM",
            temp: "43.9 °F",
            icon: "CloudyNight",
        });
        const items = arr.map((hour) => (
            <div className="w-[147px] h-[119px] border " key={hour.time}>
                <div className="grid grid-cols-2  ">
                    <img
                        className="w-[59px] h-[59px]  justify-self-start self-center "
                        src={`http://localhost:3000/img/${hour.icon}.svg`}
                        alt={hour.icon}
                    />

                    <p className="text-[#000000] text-[24px] font-[400]  self-center">
                        {hour.temp}
                    </p>
                </div>
                <p>{hour.time}</p>
            </div>
        ));
        render(<div>{items}</div>);
        expect(screen.getByText("43.9 °F")).toBeInTheDocument();

        expect(screen.getByText("12:00 AM")).toBeInTheDocument();

        expect(screen.getByRole("img")).toHaveAttribute(
            "src",
            `http://localhost:3000/img/CloudyNight.svg`,
        );
        expect(screen.getByRole("img")).toHaveAttribute("alt", `CloudyNight`);
    });
});
