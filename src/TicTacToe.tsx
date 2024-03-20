import { useState } from "react";
import { Square } from "./Square";

export const TicTacTow = () => {
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
      <div className="flex">
        <Square
          num={1}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={2}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={3}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
      </div>
      <div className="flex">
        <Square
          num={4}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={5}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={6}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
      </div>
      <div className="flex">
        <Square
          num={7}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={8}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
        <Square
          num={9}
          onChangeTurn={handleTurn}
          isTurn={isTurn}
          isFinished={isFinished}
          onHandleGame={handleGame}
        />
      </div>
    </>
  );
};
