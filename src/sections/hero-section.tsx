"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Truck, UploadCloud } from "lucide-react";

export function HeroSection() {
  // CORRECTED: Added "as const" to satisfy stricter TypeScript types
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  } as const;

  return (
    <section className="relative w-full py-24 lg:py-32 bg-brand-light dark:bg-gray-900/50">
      <div className="container mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-brand-dark dark:text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Your Health, Delivered.
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mt-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            Fullas Pharmacy brings professional care right to your doorstep. Easily upload prescriptions, track deliveries, and get the support you need.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center gap-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Button asChild size="lg">
              <Link href="/upload">
                <UploadCloud className="mr-2 h-5 w-5" />
                Upload Prescription
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/delivery">
                <Truck className="mr-2 h-5 w-5" />
                Track My Order
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
