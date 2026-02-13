import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";
import data from "../data";

const Card = ({ index, setIndex }) => {
    const person = data[index];
    return (
        <div className="flex flex-col transition-all duration-700 ease-in-out">
            <div className="text-left">
                <p className="font-bold text-2xl capitalize tracking-wider">{person.name}</p>
                <p className="text-violet-400 font-semibold uppercase text-sm">{person.job}</p>
            </div>

            <div className="text-violet-400 mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-left mt-4 text-slate-500 leading-relaxed">
                {person.text}
            </div>

            <div className="text-violet-400 mt-5 ml-auto">
                <FaQuoteRight />
            </div>

            <div className="mt-5">
                <Buttons index={index} setIndex={setIndex} />
            </div>
        </div>
    );
};

export default Card;