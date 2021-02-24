import React from "react";
import Reset from "./Reset";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: "-100vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      mass: 0.4,
      damping: 9
    }
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: { duration: 1 }
  }
};

const Winner = ({ winning, resetGame }) => {
  return (
    <motion.div
      className="over"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>The Winner is {winning}</h1>
      <Reset resetGame={resetGame} />
    </motion.div>
  );
};

export default Winner;
