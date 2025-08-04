"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The delivery service is a lifesaver! I got my chronic medication without having to leave my home. So efficient.",
    name: "Jabu S.",
    location: "Sandton, GP",
  },
  {
    quote: "Uploading my script was incredibly easy. The pharmacist called me within an hour to confirm everything. Fantastic service!",
    name: "Aisha P.",
    location: "Randburg, GP",
  },
];

export function TestimonialsSection() {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.5 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-light dark:bg-gray-900/50">
      <motion.div 
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter text-brand-dark dark:text-white sm:text-4xl">
            Trusted by Our Community
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-2 text-muted-foreground md:text-lg">
            See what our loyal customers have to say.
          </motion.p>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-4xl">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
                <Card>
                <CardContent className="pt-6">
                    <blockquote className="text-lg italic">&quot;{testimonial.quote}&quot;</blockquote>
                    <p className="mt-4 font-semibold text-right">- {testimonial.name}, {testimonial.location}</p>
                </CardContent>
                </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
