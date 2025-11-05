"use client";

import ParticlesBackground from "./ParticlesBackground";
import Typewriter from "./Typewriter";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative min-h-[calc(100vh-12rem)] flex items-center px-16"
      >
        <ParticlesBackground />

        <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-12 relative z-10">
          <div className="text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Hi There! <span className="inline-block animate-wave">👋</span>
            </h1>
            <h2 className="mt-4 text-4xl sm:text-5xl font-semibold">
              I'M <span className="text-secondary">Chetan Nada</span>
            </h2>

            <h2 className="mt-12 text-3xl sm:text-4xl font-bold text-secondary">
              <Typewriter />
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
