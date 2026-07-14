"use client";

import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "Architecting scalable enterprise applications.",
          "Building intelligent, AI-powered features.",
          "Driving open-source innovation (2k+ Stars).",
          "Engineering high-performance web interfaces.",
          "Mentoring top engineering talent globally.",
        ],
        autoStart: true,
        loop: true,
        delay: 40,
        deleteSpeed: 20,
      }}
    />
  );
};

export default Typewriter;
