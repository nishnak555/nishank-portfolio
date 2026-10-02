import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { TechSection } from "@/sections/TechSection";
import { TeamSection } from "@/sections/TeamSection";
import { FaqSection } from "@/sections/FaqSection";
import { Seo } from "@/components/Seo";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ContactSection } from "@/sections/ContactSection";
import { FooterSection } from "@/sections/FooterSection";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <Seo />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <TechSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </main>
      <FooterSection />
    </ThemeProvider>
  );
}
