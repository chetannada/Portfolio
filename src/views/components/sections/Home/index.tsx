"use client";

import ParticlesBackground from "./ParticlesBackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 sm:px-16 py-16 lg:py-0"
      >
        <ParticlesBackground id="particles-home" />

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 overflow-hidden lg:overflow-visible">
          <HeroContent />

          <HeroIllustration />
        </div>
      </section>
    </>
  );
};

export default Home;
