import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import data from "../data";

const Buttons = ({ setIndex, index }) => {
    const leftHandler = () => {
        if (index === 0) {
            setIndex(data.length - 1);
        } else {
            setIndex(index - 1);
        }
    };
    const rightHandler = () => {
        if (index === data.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const surpriseHandler = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setIndex(randomIndex);
    };
    return (
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex text-3xl gap-6 text-violet-400 font-bold justify-start">
                <button
                    onClick={leftHandler}
                    className="cursor-pointer hover:text-violet-500 transition-all duration-200"
                >
                    <FaAngleLeft />
                </button>
                <button
                    onClick={rightHandler}
                    className="cursor-pointer hover:text-violet-500 transition-all duration-200"
                >
                    <FaAngleRight />
                </button>
            </div>

            <div>
                <button
                    onClick={surpriseHandler}
                    className="bg-violet-400 hover:bg-violet-500 shadow-md transition-all duration-200 cursor-pointer px-10 py-2 rounded-full font-bold text-white text-lg"
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Buttons;