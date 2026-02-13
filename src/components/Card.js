import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Buttons from "./Buttons";
import data from "../data";

const Card = ({ index, setIndex }) => {
    const person = data[index];
    return (
        <div className="flex flex-col transition-all duration-700 ease-in-out">
            <div className="absolute top-[-3.5rem] z-[10] left-1/2 -translate-x-1/2 md:left-10 md:-translate-x-0">
                <img
                    className="aspect-square rounded-full w-[100px] h-[100px] z-[25] object-cover shadow-lg"
                    src={person.image}
                    alt={person.name}
                />
                <div className="w-[100px] h-[100px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[8px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{person.name}</p>
                <p className="text-violet-300 uppercase text-sm">{person.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                {person.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>

            <div className="mt-5">
                <Buttons index={index} setIndex={setIndex} />
            </div>
        </div>
    );
};

export default Card;