import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProofBar from "@/components/sections/SocialProofBar";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import HowItWorks from "@/components/sections/HowItWorks";
import KindleSetup from "@/components/sections/KindleSetup";
import PrivacySection from "@/components/sections/PrivacySection";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <SocialProofBar />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturesGrid />
        </AnimatedSection>
        <AnimatedSection>
          <HowItWorks />
        </AnimatedSection>
        <AnimatedSection>
          <KindleSetup />
        </AnimatedSection>
        <AnimatedSection>
          <PrivacySection />
        </AnimatedSection>
        <AnimatedSection>
          <CtaBanner />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
