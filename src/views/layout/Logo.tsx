import { pacifico } from "@/fonts";
import useWindowSize from "../hooks/useWindowSize";
import { motion, Variants } from "framer-motion";

const logoVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.3,
    },
  },
};

const Logo = () => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 640;

  return (
    <>
      {isMobile ? (
        <motion.img
          src="/images/logo.png"
          alt="Portfolio Logo"
          className="h-10 w-10 object-contain"
          initial="hidden"
          animate="visible"
          variants={logoVariant}
        />
      ) : (
        <motion.h1
          className={`text-3xl max-2xs:text-2xl max-3xs:text-xl tracking-widest ${pacifico.className}`}
          initial="hidden"
          animate="visible"
          variants={logoVariant}
        >
          Portfo<span className="text-secondary">lio.</span>
        </motion.h1>
      )}
    </>
  );
};

export default Logo;
