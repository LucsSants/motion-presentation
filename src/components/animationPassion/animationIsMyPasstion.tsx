import {motion} from "motion/react";

import passion from '../../assets/passion.png'
import animation from '../../assets/animation.png'
import ismy from '../../assets/ismy.png'

import './passion.css'


function AnimationIsMyPassion() {
  return (
    <div className="passionContainer">
       <motion.img src={animation} style={{height:10}} animate={{scale:35, rotate: 1440}} transition={{duration: 1}}/>
        <motion.img src={ismy}  style={{height:150, x: -1500, marginTop: 50}} animate={{ x: 0}} transition={{duration: 1, delay: 1}}/>
        <motion.img src={passion} style={{height:250, y: -700, marginTop: -80}} animate={{ y: 0}} transition={{duration: 1, delay: 2}}/>
    </div>
  );
}

export { AnimationIsMyPassion };
