
import {animated, useSpring} from '@react-spring/web'
import { ReactNode, useState } from 'react';
import { ToggleButton } from '../toggle/Toggle';
import './acordion.css'

interface AccordionProps {
  children: ReactNode;
  openedHeight: number | string;
  defaultOpen?: boolean;
}

function SpringAccordion({ children, openedHeight, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen) 

  const props = useSpring({ height: isOpen ? openedHeight : 60 })

  const toggleOpen=  ()=> setIsOpen(prev=> !prev)
  return (
    <animated.div
    className="square"
    style={props}
    >
      <div className="accordion-header">
        <section>
          <h3>Título</h3>
          <h5>subtitulo</h5>
        </section>
        <ToggleButton checked={isOpen} onChange={toggleOpen}/>
      </div>
      <>{isOpen && children}</>
    </animated.div>
  );
}

export { SpringAccordion };