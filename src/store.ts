interface IData {
  O: { [propName: string]: number };
  X: { [propName: string]: number };
}

const data: IData = {
  O: {},
  X: {},
};

export const storeData = (
  row: number,
  column: number,
  isTurn: boolean,
  onHandleGame: (win: string) => void
) => {
  const rowKey = `x-${row}`;
  const columnKey = `y-${column}`;
  if (isTurn) {
    Object.hasOwn(data.O, rowKey)
      ? (data.O[rowKey] = data.O[rowKey] + 1)
      : (data.O[rowKey] = 1);
    Object.hasOwn(data.O, columnKey)
      ? (data.O[columnKey] = data.O[columnKey] + 1)
      : (data.O[columnKey] = 1);
    row === column && storeBackSlash(data.O);
    if (row === column && row === 1) storeSlash(data.O);
    Math.abs(row - column) === 2 && storeSlash(data.O);
    Object.values(data.O).includes(3) && onHandleGame("O");
  } else {
    Object.hasOwn(data.X, rowKey)
      ? (data.X[rowKey] = data.X[rowKey] + 1)
      : (data.X[rowKey] = 1);
    Object.hasOwn(data.X, columnKey)
      ? (data.X[columnKey] = data.X[columnKey] + 1)
      : (data.X[columnKey] = 1);
    row === column && storeBackSlash(data.X);
    if (row === column && row === 1) storeSlash(data.X);
    Math.abs(row - column) === 2 && storeSlash(data.X);
    Object.values(data.X).includes(3) && onHandleGame("X");
  }
};

const storeBackSlash = (turn: { [propName: string]: number }) => {
  turn[`n-n`] ? (turn[`n-n`] = turn[`n-n`] + 1) : (turn[`n-n`] = 1);
};

const storeSlash = (turn: { [propName: string]: number }) => {
  turn[`n-l`] ? (turn[`n-l`] = turn[`n-l`] + 1) : (turn[`n-l`] = 1);
};
