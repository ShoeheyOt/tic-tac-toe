export type OnChangeTurn = (
  e: React.MouseEvent<HTMLButtonElement>,
  row: number,
  column: number,
  isTurn: boolean
) => void;
