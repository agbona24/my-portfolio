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
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import EasterEgg from "@/components/EasterEgg";
import CodingElements3D from "@/components/CodingElements3D";

export default function Home() {
  return (
    <>
      <CodingElements3D />
      <ScrollProgress />
      <EasterEgg />
      <PageTransition>
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
      </PageTransition>
    </>
  );
}
