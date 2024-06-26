import { useState } from "react";
import { Square } from "./Square";

const gameBoard: number[][] = new Array(3).fill(new Array(3).fill(null));

export const TicTacToe = () => {
  const [isTurn, setIsTurn] = useState(true);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [winner, setWinner] = useState("");

  const handleGame = (winner: string) => {
    setIsGameFinished(true);
    setWinner(winner);
  };

  return (
    <>
      <p>{winner.length >= 1 && `${winner} wins!`}</p>
      {gameBoard.map((row, i) => (
        <div className="flex" key={i}>
          {row.map((_, j) => (
            <Square
              key={j}
              row={i}
              column={j}
              onHandleGame={handleGame}
              setIsTurn={setIsTurn}
              isGameFinished={isGameFinished}
              isTurn={isTurn}
            />
          ))}
        </div>
      ))}
    </>
  );
};
