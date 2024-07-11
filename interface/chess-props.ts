import whitePawn from "@/assets/chess/SVG No shadow/w_pawn_svg_NoShadow.svg";
import whiteKnight from "@/assets/chess/SVG No shadow/w_knight_svg_NoShadow.svg";
import whiteBishop from "@/assets/chess/SVG No shadow/w_bishop_svg_NoShadow.svg";
import whiteRook from "@/assets/chess/SVG No shadow/w_rook_svg_NoShadow.svg";
import whiteQueen from "@/assets/chess/SVG No shadow/w_queen_svg_NoShadow.svg";
import whiteKing from "@/assets/chess/SVG No shadow/w_king_svg_NoShadow.svg";
import blackPawn from "@/assets/chess/SVG No shadow/b_pawn_svg_NoShadow.svg";
import blackKnight from "@/assets/chess/SVG No shadow/b_knight_svg_NoShadow.svg";
import blackBishop from "@/assets/chess/SVG No shadow/b_bishop_svg_NoShadow.svg";
import blackRook from "@/assets/chess/SVG No shadow/b_rook_svg_NoShadow.svg";
import blackQueen from "@/assets/chess/SVG No shadow/b_queen_svg_NoShadow.svg";
import blackKing from "@/assets/chess/SVG No shadow/b_king_svg_NoShadow.svg";
import Piece from "@/model/chess/piece";

export enum Color {
  White,
  Black,
}

export enum FENChar {
  WhitePawn = "P",
  WhiteKnight = "N",
  WhiteBishop = "B",
  WhiteRook = "R",
  WhiteQueen = "Q",
  WhiteKing = "K",
  BlackPawn = "p",
  BlackKnight = "n",
  BlackBishop = "b",
  BlackRook = "r",
  BlackQueen = "q",
  BlackKing = "k",
}

export enum MoveType {
  Capture,
  Castling,
  Promotion,
  Check,
  CheckMate,
  BasicMove,
}

export type LastMove = {
  piece: Piece;
  prevX: number;
  prevY: number;
  currX: number;
  currY: number;
  moveType: Set<MoveType>;
};

export interface Coordinates {
  x: number;
  y: number;
}

interface KingChecked extends Coordinates {
  checked: true;
}

interface KingNotChecked {
  checked: false;
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: whitePawn,
  [FENChar.WhiteKnight]: whiteKnight,
  [FENChar.WhiteBishop]: whiteBishop,
  [FENChar.WhiteRook]: whiteRook,
  [FENChar.WhiteQueen]: whiteQueen,
  [FENChar.WhiteKing]: whiteKing,
  [FENChar.BlackPawn]: blackPawn,
  [FENChar.BlackKnight]: blackKnight,
  [FENChar.BlackBishop]: blackBishop,
  [FENChar.BlackRook]: blackRook,
  [FENChar.BlackQueen]: blackQueen,
  [FENChar.BlackKing]: blackKing,
};

export type SafeSquares = Map<string, Coordinates[]>;

export type CheckState = KingChecked | KingNotChecked;

export type MoveList = [string, string?][];

export type EmptySquare = null;

export type ChessBoard = (Piece | null)[][];

export type BoardView = (FENChar | null)[][]; // 8x8 matrix

export type GameHistory = {
  lastMove: LastMove | undefined;
  checkState: CheckState;
  board: BoardView;
}[];

type SquareWithPiece = {
  piece: FENChar;
  x: number;
  y: number;
};

type SquareWithoutPiece = {
  piece: null;
};

export type SelectedSquare = SquareWithPiece | SquareWithoutPiece;

export const columns: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
