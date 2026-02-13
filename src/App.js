import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center flex flex-col items-center">
        <div className="mb-4">
          <Header />
        </div>
        <div className="bg-white flex flex-col justify-center items-center mt-12 p-8 transition-all duration-700 hover:shadow-2xl rounded-md w-[85vw] md:w-[600px] min-h-[350px] relative">
          <Card index={index} setIndex={setIndex} />
        </div>
      </div>
    </div>
  );
};

export default App;
