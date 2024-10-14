import Navbar from "@/app/components/navbar";
import "@/view/pages/home/styles/home.css";
import "@/view/pages/home/styles/hero.css";
// import Card from "./card";

export default function HomeView() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
      <div className="hero-content">
          <h1>Revolutionize Your 3D Designs with AI</h1>
          <p>Create, Customize, and Enhance 3D Models Effortlessly</p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="company-overview">
        <h2>About Our Company</h2>
        <p>Founded in 2020, we are dedicated to delivering high-quality solutions.</p>
        <p>Our culture is built on innovation and teamwork.</p>
      </section>

      {/* Products or Services */}
      <section className="products">
        <h2>Our Services</h2>
        <p>We provide top-notch services in web development, mobile applications, and more.</p>
      </section>

      {/* Cards Testimonials Section */}
    <div className="cards-container">
      <section className="testimonials">
      <h2>What Our Clients Say</h2>

      {/* <Card /> */}
      </section>
    </div>

    </div>
  );
};
