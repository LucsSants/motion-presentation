import { useState } from 'react';
import { motion } from 'framer-motion';

const Imple = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        border: '2px solid black',
        display: 'flex',
      }}
    >
      <motion.div
      className='dragText'
        drag
        dragConstraints={{ left: 0, top: 0, right: 1450, bottom: 775 }}
        style={{
          // position: 'absolute',
          top: position.y,
          left: position.x,
          cursor: 'grab',
        }}
        dragElastic={1} 
        onDrag={(_e, info) => {
          // Update position state as the element is dragged
          setPosition({ x: info.offset.x, y: info.offset.y });
        }}
      >
        Implementação
      </motion.div>
    </div>
  );
};

export {Imple};