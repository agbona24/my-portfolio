import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Quiz />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
