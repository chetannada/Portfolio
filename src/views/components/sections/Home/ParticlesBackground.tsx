import { useEffect, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import particlesConfig from "../../../config/particlesConfig";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

type Props = {
  id?: string;
};

const ParticlesBackground = ({ id = "tsparticles" }: Props) => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const config = particlesConfig(theme);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id={id}
        options={config}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      />
    );
  }

  return null;
};

export default ParticlesBackground;
