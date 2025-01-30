import * as motion from "motion/react-client";
import { ReactNode, useState } from "react";
import "./acordion.css";
import { ToggleButton } from "../toggle/Toggle";

interface AccordionProps {
  children: ReactNode;
  openedHeight: number | string;
  defaultOpen?: boolean;
}

function Accordion({ children, openedHeight, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  const toggleOpen=  ()=> setIsOpen(prev=> !prev)
  return (
    <motion.div
      animate={{ height: isOpen ? openedHeight : undefined }}
      transition={{duration: 0.4}}
      className="square"
    >
      <div className="accordion-header">
        <section>
          <h3>Título</h3>
          <h5>subtitulo</h5>
        </section>
        <ToggleButton checked={isOpen} onChange={toggleOpen}/>
      </div>
      <>{isOpen && children}</>
    </motion.div>
  );
}

export { Accordion };
