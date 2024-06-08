import { Color, Coordinates, FENChar } from "@/interface/chess";
import Piece from "./piece";

export default class Bishop extends Piece {
  protected override _FENChar = FENChar.WhiteBishop;
  protected override _directions: Coordinates[] = [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
  ];

  constructor(_color: Color) {
    super(_color);
    this._FENChar =
      _color === Color.White ? FENChar.WhiteBishop : FENChar.BlackBishop;
  }
}
