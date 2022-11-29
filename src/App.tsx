import Logo from './components/atoms/Logo';
import AboutUsSection from './components/organisms/AboutUsSection';
import HeroSection from './components/organisms/HeroSection';
import OurCoreValuesSection from './components/organisms/OurCoreValuesSection';
import OurSpecialitySection from './components/organisms/OurSpecialitySection';

export default function App() {
  return (
    <main className="font-primary">
      <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-white px-7">
        <Logo style={{ width: 160 }} />
        <button className="btn-square text-2xl text-black">
          <i className="bi bi-list"></i>
        </button>
      </nav>
      <HeroSection />
      <AboutUsSection />
      <OurCoreValuesSection />
      <OurSpecialitySection />
    </main>
  );
}
