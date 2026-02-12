import TopNav from './TopNav';
import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import FeaturesSection from './FeaturesSection';
import UseCasesSection from './UseCasesSection';
import FaqSection from './FaqSection';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <UseCasesSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
