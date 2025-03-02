import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "E-Commerce Redesign",
    description: "A modern e-commerce platform optimized for conversions and user experience.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Corporate Website",
    description: "A sleek, professional website for a corporate brand, built with SEO in mind.",
    image: "/images/corporate.jpg",
  },
  {
    title: "Startup Landing Page",
    description: "A high-converting landing page for a tech startup, designed for engagement.",
    image: "/images/startup.jpg",
  },
  {
    title: "Portfolio Showcase",
    description: "A stunning portfolio site for creatives to display their work effectively.",
    image: "/images/portfolio.jpg",
  },
];

export default function Portfolio() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <section className="py-16 bg-white text-center" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore some of our recent projects and see how we bring ideas to life.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="p-6 shadow-lg rounded-2xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <CardHeader className="mt-4">
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
