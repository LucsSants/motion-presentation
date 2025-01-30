import { motion } from "framer-motion";

import img from "../../assets/motion.png";

const Motion = () => {
  return (
    <div className="main-container">
      <motion.p
      style={{fontWeight: 700, fontSize: 64, marginBottom: 24}}
        animate={{
          scale: [1, 1.2, 1], // Scale the image from normal size to 120% and back
        }}
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Loop the animation
          duration: 1, // Duration for one full pulse cycle
          ease: "easeInOut", // Smooth easing for pulsing effect
        }}
      >
        Motion
      </motion.p>
      <motion.img
        src={img}
        alt="Pulsing"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
        }}
        animate={{
          scale: [1, 1.2, 1], // Scale the image from normal size to 120% and back
        }}
        transition={{
          repeat: Infinity, // Repeat the animation infinitely
          repeatType: "loop", // Loop the animation
          duration: 1, // Duration for one full pulse cycle
          ease: "easeInOut", // Smooth easing for pulsing effect
        }}
      />
    </div>
  );
};

export { Motion };
