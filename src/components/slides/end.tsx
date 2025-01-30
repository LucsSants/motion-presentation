import { motion } from 'framer-motion';

const End = () => {

  return (
    <div className="main-containerTwo"
    >
      <motion.div
      className='thirdContainer'
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,   
        repeatType: 'loop', 
        duration: 5,       
        ease: 'linear',     
      }}
      style={{fontSize: 64, fontWeight: 700}}
      >
        FIM
      </motion.div>
    </div>
  );
};

export {End};