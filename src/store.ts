interface IData {
  O: { [propName: string]: number };
  X: { [propName: string]: number };
}

const data: IData = {
  O: {},
  X: {},
};

export const storeData = (
  player: string,
  row: number,
  column: number,
  onHandleGame: (win: string) => void
) => {
  const rowKey = `x-${row}`;
  const columnKey = `y-${column}`;
  const store = data[player as keyof IData];

  Object.hasOwn(store, rowKey) ? store[rowKey]++ : (store[rowKey] = 1);
  Object.hasOwn(store, columnKey) ? store[columnKey]++ : (store[columnKey] = 1);

  row === column && storeBackSlash(store);
  if (row === column && row === 1) storeSlash(store);
  Math.abs(row - column) === 2 && storeSlash(store);
  Object.values(store).includes(3) && onHandleGame(player);
};

const storeBackSlash = (turn: { [propName: string]: number }) => {
  turn[`n-n`] ? (turn[`n-n`] = turn[`n-n`] + 1) : (turn[`n-n`] = 1);
};

const storeSlash = (turn: { [propName: string]: number }) => {
  turn[`n-l`] ? (turn[`n-l`] = turn[`n-l`] + 1) : (turn[`n-l`] = 1);
};

export const handleTurn = (
  e: React.MouseEvent<HTMLButtonElement>,
  row: number,
  column: number,
  isTurn: boolean,
  handleGame: (winner: string) => void,
  setIsTurn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (isTurn) {
    e.currentTarget.textContent = "O";
    storeData("O", row, column, handleGame);
    setIsTurn(false);
  }
  if (!isTurn) {
    e.currentTarget.textContent = "X";
    storeData("X", row, column, handleGame);
    setIsTurn(true);
  }
};
