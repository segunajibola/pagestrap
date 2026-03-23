import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTA";

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This team transformed our online presence and boosted our conversions!",
    initials: "JD",
    color: "from-purple-500 to-indigo-600",
  },
  {
    name: "John Smith",
    feedback: "Incredible design and seamless experience. Highly recommend!",
    initials: "JS",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Sarah Lee",
    feedback: "A professional and creative approach to web design. Love the results!",
    initials: "SL",
    color: "from-emerald-500 to-teal-600",
  },
];

export default function Testimonial() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
      <section className="py-16 bg-gray-100 text-center" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 shadow-lg rounded-2xl bg-white">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${testimonial.color} flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {testimonial.name}
                    </CardTitle>
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
    </>
  );
}
