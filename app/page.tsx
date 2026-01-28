import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import ServiceQuiz from "@/components/ServiceQuiz";
import TechStackMatcher from "@/components/TechStackMatcher";
import Testimonials from "@/components/Testimonials";
import Quiz from "@/components/Quiz";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import EasterEgg from "@/components/EasterEgg";
import CodingElements3D from "@/components/CodingElements3D";
import AvailabilityBadge from "@/components/AvailabilityBadge";

export default function Home() {
  return (
    <>
      <CodingElements3D />
      <ScrollProgress />
      <EasterEgg />
      <AvailabilityBadge />
      <PageTransition>
        <main className="min-h-screen">
          <Navbar />
          <Hero />
          <ClientLogos />
          <About />
          <Services />
          <Stats />
          <Work />
          <Process />
          <Skills />
          <ServiceQuiz />
          <TechStackMatcher />
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
