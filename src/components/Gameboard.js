import React, { useState, useEffect } from "react";
import GameGrid from "./GameGrid";
import CurrentPlayer from "./CurrentPlayer";
import Winner from "./Winning";
import wait from "waait";
import { AnimatePresence } from "framer-motion";
import Bouncer from "./Bouncer";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].owner &&
      squares[a].owner === squares[b].owner &&
      squares[a].owner === squares[c].owner
    ) {
      return squares[a].owner;
    }
  }
  return null;
}

const Gameboard = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [board, setBoard] = useState(
    new Array(9).fill(null).map(() => ({ owner: "", clicked: false }))
  );
  const [winning, setWinning] = useState(null);

  const changeTurn = (i) => {
    board[i].owner = activePlayer;
    board[i].clicked = true;
    setWinning(calculateWinner(board));
    setActivePlayer(activePlayer === "X" ? "O" : "X");
  };

  const computerPlay = async () => {
    await wait(200);
    const randomNumber = Math.floor(Math.random() * 9);
    if (board[randomNumber].clicked === false) {
      board[randomNumber].owner = activePlayer;
      board[randomNumber].clicked = true;
      setWinning(calculateWinner(board));
      setActivePlayer(activePlayer === "X" ? "O" : "X");
      return;
    }
    computerPlay();
  };

  useEffect(() => {
    if (activePlayer === "O") {
      computerPlay();
    }
  }, [activePlayer, setActivePlayer]);

  useEffect(() => {
    const remaining = board.filter((square) => square.clicked === true);

    if (remaining.length >= 9 && !winning) {
      setWinning("Everyone! Tie Game...");
    }
  }, [activePlayer, setActivePlayer]);

  const resetGame = () => {
    setWinning(null);
    setBoard(
      new Array(9).fill(null).map(() => ({ owner: "", clicked: false }))
    );
    setActivePlayer("X");
  };

  return (
    <div className="game-board">
      <CurrentPlayer activePlayer={activePlayer} />
      <AnimatePresence>
        {winning && <Winner winning={winning} resetGame={resetGame} />}
        {!winning && <GameGrid board={board} changeTurn={changeTurn} />}
      </AnimatePresence>
      <Bouncer side="left" player="X" />
      <Bouncer side="right" player="O" />
    </div>
  );
};

export default Gameboard;
