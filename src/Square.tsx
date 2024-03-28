import { useState } from "react";
import { storeData } from "./store";

type OnChangeTurn = (e: React.MouseEvent<HTMLButtonElement>) => void;

export const Square = ({
  x,
  y,
  onChangeTurn,
  isFinished,
  isTurn,
  onHandleGame,
}: {
  x: number;
  y: number;
  onChangeTurn: OnChangeTurn;
  isFinished: boolean;
  onHandleGame: (winner: string) => void;
  isTurn: boolean;
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-20 h-20 border border-slate-50">
      <button
        className="w-full h-full"
        onClick={(e) => {
          if (!clicked) {
            onChangeTurn(e);
            setClicked(true);
            storeData(x, y, isTurn, onHandleGame);
          }
        }}
        disabled={isFinished}
      ></button>
    </div>
  );
};
