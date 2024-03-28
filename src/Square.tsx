import { useState } from "react";
// import { storeData } from "./store";

type OnChangeTurn = (e: React.MouseEvent<HTMLButtonElement>) => void;

export const Square = ({
  x,
  y,
  onChangeTurn,
}: {
  x: number;
  y: number;
  onChangeTurn: OnChangeTurn;
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
            console.log(x, y);
            // storeData(num, isTurn, onHandleGame);
          }
        }}
        // disabled={isFinished}
      >
        x:{x}
        y:{y}
      </button>
    </div>
  );
};
