import { useState } from "react";
import { handleTurn } from "./store";

interface ISquare {
  row: number;
  column: number;
  onHandleGame: (winner: string) => void;
  setIsTurn: React.Dispatch<React.SetStateAction<boolean>>;
  isGameFinished: boolean;
  isTurn: boolean;
}

export const Square = ({
  row,
  column,
  onHandleGame,
  setIsTurn,
  isGameFinished,
  isTurn,
}: ISquare) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-20 h-20 border border-slate-50">
      <button
        className="w-full h-full"
        onClick={(e) => {
          if (!clicked) {
            handleTurn(e, row, column, isTurn, onHandleGame, setIsTurn);
            setClicked(true);
          }
        }}
        disabled={isGameFinished}
      ></button>
    </div>
  );
};
