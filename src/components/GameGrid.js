import React from "react";
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

const GameGrid = ({ board, changeTurn }) => {
  return (
    <motion.div
      className="game-grid"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {board.map((square, index) => (
        <motion.button
          key={index}
          className="square"
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            changeTurn(index);
          }}
          disabled={square.clicked}
        >
          {square.owner}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default GameGrid;
