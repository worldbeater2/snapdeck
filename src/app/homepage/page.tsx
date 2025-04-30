import Footer from "../sections/footer";
import Navbar from "../sections/Navbar";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import Flipsection from "../sections/Flipsection";
import Testimonial from "../sections/Testimonial";

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Flipsection />
        <Testimonial />
      </main>

      <Footer />
    </div>
  );
}
