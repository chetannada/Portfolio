import { useTheme } from "@/views/context/ThemeContext";
import Image from "next/image";

const HeroIllustration = () => {
  const { theme } = useTheme();

  return (
    <div className="flex-1 flex justify-center items-center">
      <Image
        src={
          theme === "dark"
            ? "/images/hero-illustration-dark.png"
            : "/images/hero-illustration-light.png"
        }
        alt="Hero Illustration"
        width={200}
        height={200}
        className="w-full max-w-96 max-h-96"
        priority
      />
    </div>
  );
};

export default HeroIllustration;
