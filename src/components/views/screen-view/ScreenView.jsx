import React from "react";
import SearchBar from "../../ui/SearchBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeftLong, faRightLong} from "@fortawesome/free-solid-svg-icons";
import ScreenWeather from "./ScreenWeather";
export default function ScreenView(props) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    return (
        <div className="bg-[rgb(53,124,255)] bg-opacity-5 min-h-screen">
            <div className="columns-1 mb-[50px]  ">
                <div className="bg-[rgba(255,255,255)] bg-opacity-30 min-w-screen h-[50px] ">
                    <div className="flex justify-center ">
                        <div className=" w-[808px] flex justify-between place-content-center">
                            <FontAwesomeIcon icon={faLeftLong} />
                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"Boise"}
                            </div>
                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"Philadelphia"}
                            </div>
                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"Chicago"}
                            </div>
                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"New York"}
                            </div>

                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"Newark"}
                            </div>
                            <div className="text-[16px] font-[400] text-[#000000]">
                                {"Scranton"}
                            </div>
                            <FontAwesomeIcon icon={faRightLong} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[808px_auto] justify-center mb-[40px]">
                    <div className="grid grid-cols-2 ">
                        <div className="justify-self-start h-[72px] w-[392px] self-end ">
                            <div>
                                <SearchBar
                                    city={props.city}
                                    setCity={props.setCity}
                                    getLocation={props.getLocation}
                                />
                            </div>
                        </div>

                        <div className=" self-end text-[20px] font-[400] text-[#000000] font-[Open Sans]  ">
                            <div className="flex justify-center items-center h-[48px] w-[288px] border border-[#A3A3A3] rounded-md shadow-[0_1px_20px_#2D2D2D40] bg-[rgb(255,255,255)]">
                                {`Data as of ${timeString}`}
                            </div>
                        </div>
                    </div>
                </div>

                {props.weather && props.location ? (
                    <ScreenWeather
                        weather={props.weather}
                        location={props.location}
                    />
                ) : (
                    <div className="flex justify-center items-center ">
                        <div className="text-[20px] text-[#D9D9D9]  font-[600] border border-[#A3A3A3] rounded-md shadow-[0_1px_20px_#2D2D2D40] w-[808px] p-[16px] bg-[rgba(255,255,255)] bg-opacity-90">
                            {" "}
                            {"Click search button"}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
