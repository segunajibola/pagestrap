import React from "react";

const Hero = () => {
  return (
    <section
      className="
        w-full h-[75vh] md:h-screen bg-cover bg-center bg-no-repeat
        flex flex-col justify-center items-center
        text-center
        px-6
      "
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <h1 className="text-4xl md:text-4xl font-bold text-myColor leading-tight drop-shadow-lg">
        We Build Fast & Classic <span className="text-myColor">Websites</span>
      </h1>

      <p className="mt-4 text-md md:text-lg max-w-xl drop-shadow-md">
        Modern, responsive websites that help businesses grow online — fast,
        beautifully, and reliably.
      </p>

      <button
        className="mt-8 bg-myColor text-gray-200 px-8 py-3 rounded-full 
    text-lg md:text-xl font-semibold shadow-lg hover:bg-[#1f18a4]
    transition-all duration-300
    hover:scale-105 active:scale-95
  "
      >
        Get Started
      </button>
    </section>
  );
};

export default Hero;
