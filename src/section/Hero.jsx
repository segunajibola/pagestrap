import React from "react";

const Hero = () => {
  return (
    <main className="w-full text-center h-screen text-gray-100 mx-auto px-6 py-[15%] bg-[url(/bg-pagestrap.avif)]">
      <h1 className="text-5xl font-bold">
        Welcome to <span className="text-blue-500">PageStrap</span>
      </h1> 
      <p className="text-2xl text-gray-100 mt-2">
        Custome websites made for your
        businesses 
        {/* <span className="text-blue-500">grow</span>. */}
      </p>
    </main>
  );
};

export default Hero;
