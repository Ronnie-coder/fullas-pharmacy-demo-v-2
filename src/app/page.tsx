import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";
// We'll create and import this later
// import { CtaSection } from "@/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* <CtaSection /> */}
    </>
  );
}