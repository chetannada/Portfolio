"use client";

import ParticlesBackground from "./ParticlesBackground";
import HeroContent from "./HeroContent";
import HeroIllustration from "./HeroIllustration";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[calc(100vh-12rem)] flex items-center justify-center px-16 max-sm:px-0"
      >
        <ParticlesBackground />

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8">
          <HeroContent />

          <HeroIllustration />
        </div>
      </section>
    </>
  );
};

export default Home;
