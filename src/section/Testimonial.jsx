import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTA";

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

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This team transformed our online presence and boosted our conversions!",
    image: "/images/jane.jpg",
  },
  {
    name: "John Smith",
    feedback: "Incredible design and seamless experience. Highly recommend!",
    image: "/images/john.jpg",
  },
  {
    name: "Sarah Lee",
    feedback: "A professional and creative approach to web design. Love the results!",
    image: "/images/sarah.jpg",
  },
];

export default function Portfolio() {
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section className="py-16 bg-white text-center" ref={portfolioRef}>
      <section className="py-16 bg-gray-100 text-center mt-16" ref={testimonialsRef}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={testimonialsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 shadow-lg rounded-2xl bg-white">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">"{testimonial.feedback}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </section>
  );
}