import Logo from './components/atoms/Logo';
import AboutUsSection from './components/organisms/AboutUsSection';
import FooterSection from './components/organisms/FooterSection';
import HeroSection from './components/organisms/HeroSection';
import Navigation from './components/organisms/Navigation';
import OurCoreValuesSection from './components/organisms/OurCoreValuesSection';
import OurSpecialitySection from './components/organisms/OurSpecialitySection';

export default function App() {
  return (
    <main className="font-primary">
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <OurCoreValuesSection />
      <OurSpecialitySection />
      <FooterSection />
    </main>
  );
}
