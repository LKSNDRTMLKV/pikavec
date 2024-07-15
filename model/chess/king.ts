import { Color, Coordinates, FENChar } from "@/interface/chess-props";
import Piece from "./piece";

export default class King extends Piece {
  private _hasMoved: boolean = false;
  protected override _FENChar: FENChar;
  protected override _directions: Coordinates[] = [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: 1 },
    { x: -1, y: -1 },
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ];

  constructor(color: Color) {
    super(color);
    this._FENChar =
      color === Color.White ? FENChar.WhiteKing : FENChar.BlackKing;
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }

  public set hasMoved(_) {
    this._hasMoved = true;
  }
}
