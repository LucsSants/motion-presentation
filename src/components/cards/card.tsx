import {
  useMotionValue,
  useTransform,
  motion,
  animate,
} from "motion/react";

import './cards.css'

function Card({
  name,
  handlePop,
}: {
  name: string;
  handlePop: () => void;
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const opacity = useTransform(x,[-150,0,150], [0.7,1,0.7])
  const rotate = useTransform(x, [-150,0, 150], [-35,0, 35]);

  const handleDragEnd = async ()=> {
    if(x.get()>80) {
      Promise.all([
        animate(x, 300, { duration: 0.3, }),
        animate(y, 250, { duration: 0.3,  }),
        animate(opacity, 0, { duration: 0.5 }),
      ]).then(() => handlePop());
    }
    if(x.get()<-80) {
      Promise.all([
        animate(x, -250, { duration: 0.3 }),
        animate(y, 250, { duration: 0.3 }),
        animate(opacity, 0, { duration: 0.5 }),
      ]).then(() => handlePop());
    }
  }

  return (
    <motion.div
      dragMomentum={false}
      drag="x"
      className="card"
      dragConstraints={{ left: 0, right: 0 }}
      exit={{ opacity: 0}}
      style={{ x: x, rotate, opacity, y }}
      onDragEnd={handleDragEnd}
    >
      <p>{name}</p>
    </motion.div>
  );
}

export {Card}