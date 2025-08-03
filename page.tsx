import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DashboardShowcaseSection } from "@/components/landing/DashboardShowcaseSection";
import { AIFeaturesSection } from "@/components/landing/AIFeaturesSection";
import { MobileAppsSection } from "@/components/landing/MobileAppsSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CTASection } from "@/components/landing/CTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <LandingHeader />
      <HeroSection />
      <FeaturesSection />
      <DashboardShowcaseSection />
      <AIFeaturesSection />
      <MobileAppsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <LandingFooter />
    </div>
  );
} 