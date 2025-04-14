import CTA from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticleBackground";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden scroll-smooth">
      <ParticlesBackground />
      <Navbar></Navbar>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main> 
  );
}
