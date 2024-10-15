import Bill from "./components/Bill";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import ScrollTop from "./components/ScrollTop";
import ServiceCard from "./components/ServiceCard";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar />

      {/* Scroll to top button */}
      <ScrollTop />

      {/* Main Content */}
      <div className="content-container">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <div className="stats-section">
          <Stats number="3800" title="ACTIVE USER" />
          <Stats number="230" title="TRUSTED BY COMPANY" />
          <Stats number="$230M" title="TRANSACTION" />
        </div>

        {/* Business Section */}
        <Business />

        {/* Billing Section */}
        <Bill />

        {/* Payment Method Section */}
        <PaymentMethod />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Service Card Section */}
        <ServiceCard />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
