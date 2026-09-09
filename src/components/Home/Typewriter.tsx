"use client";

import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "Building scalable fullstack applications.",
          "Engineering with Reactjs, Nextjs, Nodejs & TypeScript.",
          "Architecting fast, secure, and maintainable web experiences.",
          "Exploring AI and building AI-powered products.",
          "Creating open-source projects that developers use.",
          "Mentoring developers and sharing what I learn.",
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
