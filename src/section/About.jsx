import React from "react";

const About = () => {
  return (
    <section className="w-full px-6 md:px-12 py-20 bg-myColor text-gray-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          A Growth-Driven Web Design Agency in Lagos
        </h2>

        <p className="text-lg md:text-xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We help ambitious businesses scale and stand out online. Our mission
          is to transform your ideas into a powerful digital presence that
          attracts customers and drives measurable results.
        </p>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Every project is handled by a dedicated team of designers, developers,
          and digital strategists focused on delivering real growth. From
          initial strategy to deployment, we combine creativity, clarity, and
          high-quality execution to bring your vision to life.
        </p>

        <p className="mt-6 text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Our results-driven services include custom web design, eCommerce
          development, SEO, website hosting and management. We don’t just build
          websites —{" "}
          <span className="font-semibold bg-gray-200 text-myColor">
            we build online success stories.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
