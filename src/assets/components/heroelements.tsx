import { motion } from "framer-motion";
import { Graphh, Youtubeh, Camerah, Instagramh } from "../svg/Icons";

const FloatingIcons = () => {
  return (
    <div className="relative min-h-screen">
      {/* Graphh - Top Left */}
      <motion.div
        className="absolute top-[4%] left-[18%]"
        initial={{ x: 50, y: 50 }}
        animate={{ rotate: [3, -3, 3, 3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Graphh />
      </motion.div>

      {/* Youtubeh - Top Right */}
      {/* <motion.div
        className="absolute bottom-65 left-75"
        initial={{ x: 50, y: -50 }}
        animate={{ y: [2, -2, 2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Youtubeh />
      </motion.div> */}

      {/* Camerah - Bottom Left */}
      <motion.div
        className=" absolute top-[29%] right-[25%]"
        initial={{ x: -50, y: 50 }}
        animate={{ rotate: [0, 3, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Camerah />
      </motion.div>

      {/* Instagramh - Bottom Right */}
      <motion.div
        className=" absolute top-[0%] right-[22%]"
        initial={{ x: -50, y: -50 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Instagramh />
      </motion.div>
    </div>
  );
};

export default FloatingIcons;
