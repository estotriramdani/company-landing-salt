import Logo from './components/atoms/Logo';
import AboutUsSection from './components/organisms/AboutUsSection';
import HeroSection from './components/organisms/HeroSection';

export default function App() {
  return (
    <main className="font-primary">
      <nav className="sticky top-0 z-50 flex h-[60px] items-center justify-between bg-white px-7">
        <Logo style={{ width: 160 }} />
        <button className="p-3 text-2xl text-black">
          <i className="bi bi-list"></i>
        </button>
      </nav>
      <HeroSection />
      <AboutUsSection />
    </main>
  );
}
