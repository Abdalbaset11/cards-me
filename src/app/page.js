import { HeroSection } from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";


export default function Home() {
  return (
    <main className="min-h-screen py-12 bg-[#EDFCFE] px-4">
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
