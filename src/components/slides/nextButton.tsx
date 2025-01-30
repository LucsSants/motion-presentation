import {motion} from "motion/react";
import './slides.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    left?: boolean;
  }

function NextButton({ onClick, left }: ButtonProps) {
  return (
    <motion.button  
      onClick={onClick}
      className="nextButton"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
      style={left? {left:15} : {right: 15}}
    >
      
    </motion.button>
  );
}

export { NextButton };