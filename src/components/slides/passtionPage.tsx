import {  motion } from "motion/react";
import "./slides.css";
import { AnimationIsMyPassion } from "../animationPassion/animationIsMyPasstion";

function PassionPage() {
  return (
    <motion.div
      className="main-containerTwo"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <AnimationIsMyPassion />
    </motion.div>
  );
}

export { PassionPage };
