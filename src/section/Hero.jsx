import React from "react";

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-[75vh] md:h-screen bg-cover bg-center bg-no-repeat
        flex flex-col justify-center items-center
        text-center
        px-6
      "
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          We Build Fast &amp; Classic <span className="text-blue-300">Websites</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-xl text-gray-200 drop-shadow-md">
          Modern, responsive websites that help businesses grow online — fast,
          beautifully, and reliably.
        </p>

        <a
          href="#contact"
          className="mt-8 bg-myColor text-gray-200 px-8 py-3 rounded-full
            text-lg md:text-xl font-semibold shadow-lg hover:bg-[#1f18a4]
            transition-all duration-300 hover:scale-105 active:scale-95
            inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
