import { motion } from "framer-motion";

const Reset = ({ resetGame }) => {
  return (
    <motion.button
      onClick={resetGame}
      className="reset"
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.2 }}
    >
      New Game
    </motion.button>
  );
};

export default Reset;
