import React from "react";
import {useId, createRef} from "react";
import {faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function SearchBar(props) {
    const id = useId();

    const inputRef = createRef();

    const handleClearInput = () => {
        props.setCity("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div className="font-[Open Sans]">
            <label
                htmlFor={id}
                className="block mb-2 text-[16px] font-[400] text-[#000000] font-[Open Sans]"
            >
                Enter City
            </label>
            <div className="*:not-first:mt-2 flex ">
                <div className="relative border border-[#A3A3A3] shadow-[0_1px_20px_#2D2D2D40] rounded-sm text-sm flex-none">
                    <input
                        id={id}
                        ref={inputRef}
                        className="pe-9 m-1 "
                        placeholder="City"
                        type="text"
                        value={props.city}
                        onChange={(e) => props.setCity(e.target.value)}
                    />
                    {props.city && (
                        <button
                            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                            aria-label="Clear input"
                            onClick={handleClearInput}
                        >
                            <FontAwesomeIcon icon={faXmark} size={"sm"} />
                        </button>
                    )}
                </div>
                <button
                    className="text-white bg-black  px-2 rounded"
                    onClick={props.getLocation}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"} />
                </button>
            </div>
        </div>
    );
}
