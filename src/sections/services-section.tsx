"use client";

import { motion } from "framer-motion";
import { UploadCloud, Truck, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <UploadCloud className="w-10 h-10 mb-4 text-brand-primary" />,
    title: "Prescription Uploads",
    description: "Quickly upload your doctor's prescription. We'll verify it and prepare your medication for you.",
  },
  {
    icon: <Truck className="w-10 h-10 mb-4 text-brand-primary" />,
    title: "Fast & Reliable Delivery",
    description: "Get your essential medicines delivered right to your doorstep, safely and on time, anywhere in the area.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 mb-4 text-brand-primary" />,
    title: "Over-the-Counter Support",
    description: "Need advice on common ailments? Our experienced pharmacists are here to help you find the right solution.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Can Help You</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Modern convenience meets professional pharmaceutical care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="h-full">
                <CardHeader>
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}