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
  colInd,
  checkAgainst,
  fullColumn,
}: {
  board: Readonly<number[]>;
  piece: Readonly<number>;
  colInd: Readonly<number>;
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
  if (!((board[colInd] & check.checkAgainst) ^ check.checkAgainst)) {
    return true;
  }

  const bitCol = 1 << colInd;

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

export interface PlaceOnePieceProps {
  gameType: Readonly<GameType>;
  colInd: Readonly<number>;
  rowInd?: Readonly<number>;
  curRecord: Readonly<GameRecord>;
  fullColumn: Readonly<number>;
  checkAgainst: Readonly<number>;
  next: Readonly<number[]>;
}

export const placeOnePiece = ({
  gameType,
  colInd,
  rowInd = 0,
  curRecord,
  fullColumn,
  checkAgainst,
  next,
}: PlaceOnePieceProps): GameRecord => {
  // determine current piece
  const piece =
    gameType === GameType.connectN
      ? curRecord.boards.reduce((result, board) => result | board[colInd] || board[colInd], 0) + 1
      : 1 << rowInd;

  // determine if the column is all occupied before placing
  if (!(curRecord.filledBoard[colInd] & piece)) return curRecord;

  /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftRecord"] }] */
  return produce(curRecord, (draftRecord: GameRecord) => {
    // toggle piece
    draftRecord.boards[draftRecord.turn][colInd] ^= piece;
    draftRecord.filledBoard[colInd] ^= piece;

    // determine if the column is all occupied after placing
    if (!draftRecord.filledBoard[colInd]) draftRecord.filledColumn ^= 1 << colInd;

    // determine game status
    if (
      incrementalCheckWin({
        board: draftRecord.boards[draftRecord.turn],
        piece,
        colInd,
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

export interface GetBannerProps
  extends Pick<GameRecord, 'gameOver' | 'win' | 'turn'>,
    Pick<GameSetup, 'names'> {}

export const getBanner = ({ gameOver, win, turn, names }: GetBannerProps): string => {
  if (gameOver) {
    return win >= 0 ? `Winner is ${names[turn]}!` : 'Drawed';
  }
  return `It's ${names[turn]}'s turn`;
};

export interface ResetGameProps
  extends Pick<GameSetup, 'next' | 'fullColumn' | 'fullBoard' | 'boardSetup'> {
  turn?: number;
}

export const resetGame = ({ next, fullColumn, fullBoard, boardSetup, turn }: ResetGameProps) => ({
  win: -1,
  filledColumn: fullColumn,
  filledBoard: fullBoard,
  gameOver: false,
  turn: turn || 0,
  boards: next.map(() => boardSetup.slice()),
});
