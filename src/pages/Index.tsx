import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustIndicators } from "@/components/TrustIndicators";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <Services />
      <TrustIndicators />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;