import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OracleSection from "@/components/OracleSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PlexusBackground from "@/components/PlexusBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-bg relative">
      <PlexusBackground />
      <div className="relative" style={{ zIndex: 2 }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
