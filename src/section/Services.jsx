import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaLaptopCode, FaPaintBrush, FaSearch, FaMobileAlt, FaServer, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  { icon: <FaLaptopCode size={40} />, title: "Web Development", description: "Custom, high-performance websites tailored to your needs." },
  { icon: <FaPaintBrush size={40} />, title: "UI/UX Design", description: "Visually stunning and user-friendly interface designs." },
  { icon: <FaSearch size={40} />, title: "SEO Optimization", description: "Improve your search rankings and online visibility." },
  { icon: <FaMobileAlt size={40} />, title: "Mobile Responsiveness", description: "Optimized designs for all devices and screen sizes." },
  { icon: <FaServer size={40} />, title: "Web Hosting & Maintenance", description: "Reliable hosting and ongoing support for your website." },
  { icon: <FaShoppingCart size={40} />, title: "E-Commerce Solutions", description: "Custom online stores with seamless shopping experiences." }
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section className="py-16 bg-gray-100 text-center" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }} 
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We provide cutting-edge web solutions to help your business grow online.
        </motion.p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="p-6 shadow-lg rounded-2xl">
                <CardHeader className="flex flex-col items-center">
                  <div className="text-blue-500 mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white">
            Get a Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
