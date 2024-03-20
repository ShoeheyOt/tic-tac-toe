interface IData {
  O: number[];
  X: number[];
}

const data: IData = {
  O: [],
  X: [],
};

const wins = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

export const storeData = (
  num: number,
  isTurn: boolean,
  onHandleGame: (win: string) => void
) => {
  if (isTurn) {
    data.O.push(num);
    data.O.sort();
  } else {
    data.X.push(num);
    data.X.sort();
  }
  const resultO = wins.map((win) => win.every((num) => data.O.includes(num)));
  const resultX = wins.map((win) => win.every((num) => data.X.includes(num)));
  resultO.includes(true) && onHandleGame("O");
  resultX.includes(true) && onHandleGame("X");
};
