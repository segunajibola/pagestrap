import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-32 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Elevate Your Online Presence?
        </motion.h2>
        <motion.p
          className="mb-6 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let's discuss your project and bring your vision to life with a
          stunning website.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button className="bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-full font-semibold">
            Get a Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
