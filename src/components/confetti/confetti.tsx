import { motion } from "motion/react";
import { useState } from "react";
import "./Confetti.css"; 

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState<number[]>([]);

  const colors = ["#ff4081", "#ffeb3b", "#3f51b5", "#4caf50", "#ff5722"];
  const generateConfetti = () => {
    setConfettiPieces(Array.from({ length: 30 }, (_, i) => i));
  };

  return (
    <div className="container">
      <button onClick={generateConfetti} className="confetti-button">
        🎉 Launch Confetti
      </button>

      {confettiPieces.map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, 300, 500],
            x: [0, Math.random() * 300 - 150],
            rotate: [0, Math.random() * 360],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="confetti-piece"
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export {Confetti};