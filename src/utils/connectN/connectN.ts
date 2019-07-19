import produce from 'immer';

export enum GameType {
  ticTacToe = 'ticTacToe',
  connectN = 'connectN',
  gomoku = 'gomoku',
}

export interface GameSetup {
  rowNum: number;
  colNum: number;
  winRule: number;
  names: string[];
  next: number[];
  fullColumn: number;
  fullBoard: number[];
  checkAgainst: number;
  boardSetup: number[];
}

export interface GameRecord {
  boards: number[][];
  win: number;
  filledBoard: number[];
  filledColumn: number;
  gameOver: boolean;
  turn: number;
}

export const gameRecordKeys: (keyof GameRecord)[] = [
  'boards',
  'win',
  'filledBoard',
  'filledColumn',
  'gameOver',
  'turn',
];

export const incrementalCheckWin = ({
  board,
  piece,
  col,
  checkAgainst,
  fullColumn,
}: {
  board: Readonly<number[]>;
  piece: Readonly<number>;
  col: Readonly<number>;
  checkAgainst: Readonly<number>;
  fullColumn: Readonly<number>;
}) => {
  const check = {
    curCol: 0,
    curRound: 0,
    leftDiag: 0,
    rightDiag: 0,
    row: 0,
    checkAgainst,
  };

  // concurrent column check;
  while (!(check.checkAgainst & piece)) check.checkAgainst <<= 1;
  if (!((board[col] & check.checkAgainst) ^ check.checkAgainst)) {
    return true;
  }

  const bitCol = 1 << col;

  // row and diagnal checks
  check.checkAgainst = checkAgainst;
  while (!((check.checkAgainst & fullColumn) ^ check.checkAgainst)) {
    if (check.checkAgainst & bitCol) {
      check.curCol = check.curRound;
      check.row = board[check.curCol];
      check.rightDiag = board[check.curCol];
      check.leftDiag = board[check.curCol];
      check.curCol += 1;
      while ((1 << check.curCol) & check.checkAgainst) {
        check.leftDiag = (check.leftDiag << 1) & board[check.curCol];
        check.rightDiag = (check.rightDiag >> 1) & board[check.curCol];
        check.row &= board[check.curCol];
        check.curCol += 1;
      }
      if (check.leftDiag | check.rightDiag | check.row) {
        return true;
      }
    }
    check.checkAgainst <<= 1;
    check.curRound += 1;
  }

  return false;
};

export const placeOnePiece = ({
  gameType,
  col,
  row = 0,
  curRecord,
  fullColumn,
  checkAgainst,
  next,
}: {
  gameType: Readonly<GameType>;
  col: Readonly<number>;
  row?: Readonly<number>;
  curRecord: Readonly<GameRecord>;
  fullColumn: Readonly<number>;
  checkAgainst: Readonly<number>;
  next: Readonly<number[]>;
}): GameRecord => {
  // determine current piece
  const piece = gameType === GameType.connectN ? curRecord.filledBoard[col] + 1 : 1 << row;

  // determine if the column is all occupied before placing
  if (!(curRecord.filledBoard[col] & piece)) return curRecord;

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftRecord"] }] */
  return produce(curRecord, (draftRecord: GameRecord) => {
    // toggle piece
    draftRecord.boards[draftRecord.turn][col] ^= piece;
    draftRecord.filledBoard[col] ^= piece;

    // determine if the column is all occupied after placing
    if (!draftRecord.filledBoard[col]) draftRecord.filledColumn ^= 1 << col;

    // determine game status
    if (
      incrementalCheckWin({
        board: draftRecord.boards[draftRecord.turn],
        piece,
        col,
        checkAgainst,
        fullColumn,
      })
    ) {
      // if current player wins
      draftRecord.gameOver = true;
      draftRecord.win = draftRecord.turn;
    } else if (!draftRecord.filledColumn) {
      // if draw
      draftRecord.gameOver = true;
    } else {
      // if not ended
      draftRecord.turn = next[draftRecord.turn];
    }
  });
};

export const getBanner = (record: GameRecord, names: string[]): string => {
  if (record.gameOver) {
    return record.win >= 0 ? `Winner is ${names[record.turn]}!` : 'Drawed';
  }
  return `It's ${names[record.turn]}'s turn`;
};

export const resetGame = (
  curRecord: GameRecord,
  { next, fullColumn, fullBoard, boardSetup }: GameSetup
) => {
  return produce(curRecord, (draftRecord: GameRecord) => {
    draftRecord.win = -1;
    draftRecord.filledColumn = fullColumn;
    draftRecord.filledBoard = fullBoard;
    draftRecord.gameOver = false;
    draftRecord.turn = draftRecord.turn || 0;
    draftRecord.boards = next.map(() => boardSetup.slice());
  });
};
