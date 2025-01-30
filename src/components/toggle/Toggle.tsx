import * as motion from "motion/react-client";
import "./toggle.css";

interface ToggleButtonProps {
  checked: boolean;
  onChange: ()=>void;
}

function ToggleButton({checked, onChange}:ToggleButtonProps) {
 
  return (
    <div
      className="toggle-container"
      style={{ justifyContent: checked ? "end" : "start" }}
      onClick={onChange}
    >
      <motion.div
        className="gradient-overlay"
        initial={{ x: "-100%" }}
        animate={{ x: checked ? "0%" : "-100%" }}
        transition={{ ease: "easeInOut", duration: 0.4 }}
      />
      <motion.div
        className="toggle-handle"
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </div>
  );
}

export { ToggleButton };
