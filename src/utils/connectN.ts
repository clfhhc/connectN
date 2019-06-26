import produce from 'immer';

export interface GameRecord {
  boards: number[][];
  win: number;
  filled: number;
  gameOver: boolean;
  turn: number;
}

export const gameRecordKeys: (keyof GameRecord)[] = ['boards', 'win', 'filled', 'gameOver', 'turn'];

export const incrementalCheckWin = ({
  board,
  piece,
  col,
  checkAgainst,
  fullBoard,
}: {
  board: Readonly<number[]>;
  piece: Readonly<number>;
  col: Readonly<number>;
  checkAgainst: Readonly<number>;
  fullBoard: Readonly<number>;
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
  while (!((check.checkAgainst & fullBoard) ^ check.checkAgainst)) {
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
  col,
  curRecord,
  fullBoard,
  checkAgainst,
  next,
}: {
  col: Readonly<number>;
  curRecord: Readonly<GameRecord>;
  fullBoard: Readonly<number>;
  checkAgainst: Readonly<number>;
  next: Readonly<number[]>;
}): GameRecord => {
  // determine if the column is all occupied before placing
  if (!(curRecord.filled & (1 << col))) return curRecord;

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftRecord"] }] */
  return produce(curRecord, draftRecord => {
    // determine current piece
    const piece =
      draftRecord.boards.reduce((result, board) => result | board[col] || board[col], 0) + 1;

    // toggle piece
    draftRecord.boards[draftRecord.turn][col] ^= piece;

    // determine if the column is all occupied after placing
    if ((fullBoard + 1) & (piece << 2)) draftRecord.filled ^= 1 << col;

    // determine game status
    if (
      incrementalCheckWin({
        board: draftRecord.boards[draftRecord.turn],
        piece,
        col,
        checkAgainst,
        fullBoard,
      })
    ) {
      // if current player wins
      draftRecord.gameOver = true;
      draftRecord.win = draftRecord.turn;
    } else if (!draftRecord.filled) {
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
  fullBoard: number,
  boardSetup: number[],
  next: number[]
) => {
  return produce(curRecord, draftRecord => {
    draftRecord.win = -1;
    draftRecord.filled = fullBoard;
    draftRecord.gameOver = false;
    draftRecord.turn = draftRecord.turn || 0;
    draftRecord.boards = next.map(() => boardSetup.slice());
  });
};
