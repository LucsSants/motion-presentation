import * as motion from "motion/react-client";
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <motion.button  
      onClick={onClick}
      className="button"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
    >
      <p>{title}</p>
    </motion.button>
  );
}

export { Button };
