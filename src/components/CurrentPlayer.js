import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    scale: 0.1
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.1
  },
  transition: { duration: 1 }
};

const CurrentPlayer = ({ activePlayer }) => {
  return (
    <div className="active">
      <p>player:</p>
      <AnimatePresence>
        <motion.h3
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {activePlayer}
        </motion.h3>
      </AnimatePresence>
    </div>
  );
};

export default CurrentPlayer;
