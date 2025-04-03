import React from "react";
import Carousel from "react-multi-carousel";
import {responsive} from "../../../../utils/carousel";

import "react-multi-carousel/lib/styles.css";

export default function ThreeHrForecast(props) {
    const items = props.threeHour.map((hour) => (
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
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {items}
        </Carousel>
    );
}
