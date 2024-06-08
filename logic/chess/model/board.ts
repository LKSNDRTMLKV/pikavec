import {
  Color,
  EmptySquare,
  Board as BoardProps,
  FENChar,
  pieceImagePaths,
} from "@/interface/chess";
import Bishop from "./bishop";
import King from "./king";
import Knight from "./knight";
import Piece from "./piece";
import Queen from "./queen";
import Rook from "./rook";
import Pawn from "./pawn";

export default abstract class Board {
  private readonly _boardSize: number = 8;
  private readonly _emptySquare: EmptySquare = null;
  private _board: BoardProps;

  constructor() {
    this._board = [
      // Fills first row with white pieces
      [
        new Rook(Color.White),
        new Knight(Color.White),
        new Bishop(Color.White),
        new Queen(Color.White),
        new King(Color.White),
        new Bishop(Color.White),
        new Knight(Color.White),
        new Rook(Color.White),
      ],

      // Fills second row with white pawns
      Array(this._boardSize).fill(new Pawn(Color.White)),

      // Fills in 4 rows of empty squares
    //   Array(this._emptyBoardRows).fill(
    //     Array(this._boardSize).fill(this._emptySquare)
    //   ),
    Array(this._boardSize).fill(this._emptySquare),
    Array(this._boardSize).fill(this._emptySquare),
    Array(this._boardSize).fill(this._emptySquare),
    Array(this._boardSize).fill(this._emptySquare),

      // Fills second to last row with black pawns
      Array(this._boardSize).fill(new Pawn(Color.Black)),

      // Fills last row with black pieces
      [
        new Rook(Color.Black),
        new Knight(Color.Black),
        new Bishop(Color.Black),
        new Queen(Color.Black),
        new King(Color.Black),
        new Bishop(Color.Black),
        new Knight(Color.Black),
        new Rook(Color.Black),
      ],
    ];
  }

  public get board(): (Piece | null)[][] {
    return this._board;
  }
  public get boardView(): (FENChar | null)[][] {
    return this._board.map((row) =>
      row.map((piece) => (piece ? piece.FENChar : null))
    );
  }
}
