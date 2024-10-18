import Navbar from "@/app/components/navbar/navbar";
import Hero from "@/app/components/homepage/hero";
import Features from "@/app/components/homepage/features";
import Testimony from "@/app/components/homepage/testimonial";

export default function HomeView() {
  return (
    <div className="font-poppins">
      <Navbar />

      <Hero />

      <Features />
      
      <Testimony />
    </div>
  );
};
