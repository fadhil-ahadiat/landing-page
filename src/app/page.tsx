import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/components/homepage/hero";
import Features from "@/app/components/homepage/features";
import Testimonial from "@/app/components/homepage/testimonial";

export default function HomeView() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <Testimonial />
    </>
  );
};
