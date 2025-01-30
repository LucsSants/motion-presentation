import { motion } from "motion/react";
import "./slides.css";
import ExitAnimation from "../presence/presence";

function PresencePage() {
  return (
    <motion.div
      className="secondContainer"
    >
        <h2>Animate Presence</h2>
      <div className="thirdContent">
        <ExitAnimation/>

      </div>
      

      
    </motion.div>
  );
}

export { PresencePage };
