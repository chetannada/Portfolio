import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
  return (
    <TypewriterComponent
      options={{
        strings: [
          "React.js Developer",
          "Next.js Developer",
          "MERN Stack Developer",
          "Open-Source Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Typewriter;
