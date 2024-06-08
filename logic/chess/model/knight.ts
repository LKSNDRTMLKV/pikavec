import { Color, Coordinates, FENChar } from "@/interface/chess";
import Piece from "./piece";

export default class Knight extends Piece {
  protected override _FENChar: FENChar;
  protected override _directions: Coordinates[] = [
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
  ];

  constructor(color: Color) {
    super(color);
    this._FENChar =
      color === Color.White ? FENChar.WhiteKnight : FENChar.BlackKnight;
  }
}
