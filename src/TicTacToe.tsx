import { useState } from "react";
import { Square } from "./Square";

const gameBoard: number[][] = new Array(3).fill(new Array(3).fill(null));

export const TicTacToe = () => {
  const [isTurn, setIsTurn] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [winner, setWinner] = useState("");

  const handleGame = (winner: string) => {
    setIsFinished(true);
    setWinner(winner);
  };

  const handleTurn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isTurn) {
      e.currentTarget.textContent = "O";
      setIsTurn(false);
    }
    if (!isTurn) {
      e.currentTarget.textContent = "X";
      setIsTurn(true);
    }
  };
  return (
    <>
      <p>{winner.length >= 1 && `${winner} wins!`}</p>
      {gameBoard.map((row, i) => (
        <div className="flex" key={i}>
          {row.map((_, j) => (
            <Square
              key={j}
              x={i}
              y={j}
              onChangeTurn={handleTurn}
              isFinished={isFinished}
              onHandleGame={handleGame}
              isTurn={isTurn}
            />
          ))}
        </div>
      ))}
    </>
  );
};
