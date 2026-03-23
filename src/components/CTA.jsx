import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="py-32 bg-myColor text-white text-center" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Elevate Your Online Presence?
        </motion.h2>
        <motion.p
          className="mb-6 text-lg max-w-2xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss your project and bring your vision to life with a
          stunning website.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#contact">
            <Button className="bg-white text-myColor hover:bg-gray-200 px-6 py-3 rounded-full font-semibold">
              Get a Free Quote
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
