import { Color, Coordinates, FENChar } from "@/interface/chess";
import Piece from "./piece";

export default class Rook extends Piece {
  private _hasMoved = false;
  protected override _FENChar: FENChar;
  protected override _directions: Coordinates[] = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  constructor(color: Color) {
    super(color);
    this._FENChar =
      color === Color.White ? FENChar.WhiteRook : FENChar.BlackRook;
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }
  public set hasMoved(value: boolean) {
    this._hasMoved = value;
  }
}
