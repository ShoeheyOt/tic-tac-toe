interface IData {
  O: { [propName: string]: number };
  X: { [propName: string]: number };
}

const data: IData = {
  O: {},
  X: {},
};

// const wins = [
//   [1, 2, 3],
//   [1, 4, 7],
//   [1, 5, 9],
//   [2, 5, 8],
//   [3, 6, 9],
//   [3, 5, 7],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// export const storeData = (
//   num: number,
//   isTurn: boolean,
//   onHandleGame: (win: string) => void
// ) => {
//   if (isTurn) {
// data.O.push(num);
// data.O.sort();
// } else {
// data.X.push(num);
// data.X.sort();
// }
// const resultO = wins.map((win) => win.every((num) => data.O.includes(num)));
// const resultX = wins.map((win) => win.every((num) => data.X.includes(num)));
// resultO.includes(true) && onHandleGame("O");
// resultX.includes(true) && onHandleGame("X");
// };

export const storeData2 = (
  row: number,
  column: number,
  isTurn: boolean,
  onHandleGame: (win: string) => void
) => {
  // const rowKey = `x-${row}`;
  // const columnKey = `y-${column}`;
  if (isTurn) {
    Object.hasOwn(data.O, `x-${row}`)
      ? (data.O[`x-${row}`] = data.O[`x-${row}`] + 1)
      : (data.O[`x-${row}`] = 1);
    Object.hasOwn(data.O, `y-${column}`)
      ? (data.O[`y-${column}`] = data.O[`y-${column}`] + 1)
      : (data.O[`y-${column}`] = 1);
    row === column && storeBackSlash(data.O);
    if (row === column && row === 1) storeSlash(data.O);
    Math.abs(row - column) === 2 && storeSlash(data.O);
    Object.values(data.O).includes(3) && onHandleGame("O");
  } else {
    Object.hasOwn(data.X, `x-${row}`)
      ? (data.X[`x-${row}`] = data.X[`x-${row}`] + 1)
      : (data.X[`x-${row}`] = 1);
    Object.hasOwn(data.X, `y-${column}`)
      ? (data.X[`y-${column}`] = data.X[`y-${column}`] + 1)
      : (data.X[`y-${column}`] = 1);
    row === column && storeBackSlash(data.X);
    if (row === column && row === 1) storeSlash(data.X);
    Math.abs(row - column) === 2 && storeSlash(data.X);
    Object.values(data.X).includes(3) && onHandleGame("X");
  }

  console.log(data);

  // console.log("row", row, "column", column);
  // console.log(row === column ? true : false);
};

const storeBackSlash = (turn: { [propName: string]: number }) => {
  turn[`N-N`] ? (turn[`N-N`] = turn[`N-N`] + 1) : (turn[`N-N`] = 1);
};

const storeSlash = (turn: { [propName: string]: number }) => {
  turn[`N-L`] ? (turn[`N-L`] = turn[`N-L`] + 1) : (turn[`N-L`] = 1);
};
