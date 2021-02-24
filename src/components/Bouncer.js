import { motion } from "framer-motion";
import React from "react";

const bounceVariants = {
  animationOne: (direction) => ({
    scale: [1, 1.5],
    rotate: [-35, 35],
    y: [0, -30],
    transition: {
      scale: {
        yoyo: Infinity,
        duration: direction === "right" ? 1.4 : 1.25
      },
      rotate: {
        yoyo: Infinity,
        duration: direction === "right" ? 0.5 : 0.75
      },
      y: {
        yoyo: Infinity,
        duration: direction === "right" ? 0.4 : 0.5,
        ease: "easeOut"
      }
    }
  })
};

const Bouncer = ({ side, player }) => {
  return (
    <motion.h4
      className={side}
      custom={side}
      variants={bounceVariants}
      animate="animationOne"
    >
      {player}
    </motion.h4>
  );
};

export default Bouncer;
