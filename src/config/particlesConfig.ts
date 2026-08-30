import type { ISourceOptions } from "@tsparticles/engine";

const particlesConfig = (theme: "light" | "dark"): ISourceOptions => ({
  background: {
    color: { value: "transparent" },
  },
  fullScreen: { enable: false },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4, // number of particles added on click
      },
      bubble: {
        distance: 200,
        size: 6,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
    },
  },
  particles: {
    color: { value: theme === "dark" ? "#ffffff" : "#000000" },
    links: {
      color: theme === "dark" ? "#ffffff" : "#000000",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: { default: "bounce" },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: { enable: true },
      value: 80,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
});

export default particlesConfig;
