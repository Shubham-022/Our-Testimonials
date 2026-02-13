import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);
  const person = data[index];

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="bg-white flex flex-col rounded-md w-[85vw] md:w-[600px] shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl mt-12">
          {/* Banner with Header inside */}
          <div className="h-32 bg-violet-400 w-full relative flex items-center justify-center">
            <Header />
          </div>

          {/* Profile Image - LinkedIn Style Overlap */}
          <div className="relative px-8">
            <div className="absolute top-[-50px] left-8 z-10 transition-all duration-700">
              <img
                className="aspect-square rounded-full w-[120px] h-[120px] z-[25] object-cover shadow-lg border-4 border-white"
                src={person.image}
                alt={person.name}
              />
              <div className="w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-[-4px] z-[-10] left-[6px]"></div>
            </div>

            {/* Content Section */}
            <div className="pt-20 pb-8">
              <Card index={index} setIndex={setIndex} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
