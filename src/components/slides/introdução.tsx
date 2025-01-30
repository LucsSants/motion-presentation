import { motion } from "motion/react";
import "./slides.css";

function Intro() {
  return (
    <motion.div
      className="titleContainer"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="titleContent">
        <h1>Introdução</h1>

      </div>
    </motion.div>
  );
}

export { Intro };
