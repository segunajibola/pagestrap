import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section
      className="w-full px-6 md:px-12 py-20 bg-myColor text-gray-200"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Web Design Agency in Lagos
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center text-gray-200 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          We help ambitious businesses scale and stand out online. Our mission
          is to transform your ideas into a powerful digital presence that
          attracts customers and drives measurable results.
        </motion.p>

        <motion.p
          className="mt-6 text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Every project is handled by a dedicated team of designers, developers,
          and digital strategists focused on delivering real growth. From
          initial strategy to deployment, we combine creativity, clarity, and
          high-quality execution to bring your vision to life.{" "}
          <motion.span
            className="font-semibold bg-gray-200 text-myColor"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {" "}
            We build online success stories.
          </motion.span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;
