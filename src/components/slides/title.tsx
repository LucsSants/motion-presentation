import { motion } from "motion/react";
import "./slides.css";

function Title() {
  return (
    <motion.div
      className="titleContainer"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="titleContent">
        <h1>Simplificando animações</h1>
        <h3>
          Apresentado por: <span>Lucas Santos</span>
        </h3>
      </div>
    </motion.div>
  );
}

export { Title };
