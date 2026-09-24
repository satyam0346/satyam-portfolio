import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SelectedWork from "@/components/SelectedWork";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Services from "@/components/Services";
import Principles from "@/components/Principles";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <SelectedWork />
        <CurrentlyBuilding />
        <Services />
        <Principles />
        <Process />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
