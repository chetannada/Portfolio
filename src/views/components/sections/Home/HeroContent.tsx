import Typewriter from "./Typewriter";

const HeroContent = () => {
  return (
    <div className="flex-1 flex justify-center items-start flex-col min-h-80">
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
        Hi There! <span className="inline-block animate-wave">👋</span>
      </h1>
      <h2 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-semibold">
        I'M <span className="text-secondary">Chetan Nada</span>
      </h2>

      <h2 className="mt-12 text-3xl sm:text-4xl font-bold text-secondary">
        <Typewriter />
      </h2>
    </div>
  );
};

export default HeroContent;
