import { pacifico } from "@/fonts";
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
  return (
    <motion.h1
      className={`text-3xl max-2xs:text-2xl max-3xs:text-xl tracking-widest ${pacifico.className}`}
      initial="hidden"
      animate="visible"
      variants={logoVariant}
    >
      Portfo<span className="text-secondary">lio.</span>
    </motion.h1>
  );
};

export default Logo;
