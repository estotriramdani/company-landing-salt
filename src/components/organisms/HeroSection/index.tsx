const HeroSection = () => {
  return (
    <section id="home">
      <img src="/img/bg-hero.png" alt="" className="relative z-[5]" />
      <div className="relative z-10 -mt-[90px]">
        <div className="relative h-[90px]">
          <div className="trapezoid absolute bottom-0 z-[2]"></div>
          <div className="trapezoid-2 absolute bottom-0 z-[1]"></div>
        </div>
        <div className="relative -mt-px bg-[#4097DB] px-10 pb-[73px] pt-10 text-white">
          <h1 className="pb-4 text-4xl font-medium">
            Discover <br />
            Your Wonder
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
        <div className="absolute -bottom-5 flex w-full justify-center">
          <a href="#about-us" className="btn-square rounded-full bg-white p-0 shadow-md">
            <i className="bi bi-chevron-double-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
