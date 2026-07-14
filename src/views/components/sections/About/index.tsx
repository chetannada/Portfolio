"use client";

import ParticlesBackground from "../Home/ParticlesBackground";
import AboutContent from "./AboutContent";
import AboutHighlights from "./AboutHighlights";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-16 max-sm:px-4 py-20"
    >
      <ParticlesBackground id="particles-about" />

      <div className="relative z-10 max-w-6xl w-full flex flex-col lg:flex-row items-start gap-16 lg:gap-20">
        <AboutContent />

        <AboutHighlights />
      </div>
    </section>
  );
};

export default About;
