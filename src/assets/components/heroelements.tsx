import { motion } from "framer-motion";
import { Graphh, Youtubeh, Camerah, Instagramh } from "../svg/Icons";

const FloatingIcons = () => {
  return (
    <div className="relative min-h-screen">
      {/* Instagram - Top Left */}
      <motion.div
        className=" absolute top-[7%] md:top-[4%] left-[17%] md:left-[26%]"
        initial={{ x: -50, y: -50 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Instagramh classNames="h-10 md:h-14" />
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

      {/* Facebook - Bottom Left */}
      <motion.div
        // className=" absolute top-[19%] md:top-[29%] right-[25%]"
        className=" absolute top-[29%] md:top-[36%] right-[24%] md:right-[26%]"
        initial={{ x: -50, y: -50 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Graphh classNames="h-[34px] md:h-12"/>
      </motion.div>

      {/* Youtube - Bottom Right */}
      <motion.div
        className=" absolute top-[1%] right-[4%] md:right-[20%] "
        initial={{ x: -50, y: -50 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Camerah classNames="h-10  md:h-14"/>
      </motion.div>
    </div>
  );
};

export default FloatingIcons;
