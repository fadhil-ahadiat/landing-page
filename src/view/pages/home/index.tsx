import NavbarView from "./components/Navbar";

export default function HomeView() {
  return (
    <div>
      <NavbarView />;

      {/* tambahkan hero-image */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path/to/hero-image.jpg)' }}> 
        <div className="container mx-auto h-full flex items-center justify-center">
          <h1 className="text-white text-5xl">Welcome to Our Company</h1>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Company Overview</h2>
          <p className="text-lg">
            Our company has been a leader in providing exceptional services since its founding. We value quality and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p>We provide top-notch services including...</p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p>"This company is amazing!"</p>
        </div>
      </section>
    </div>
  );
};
