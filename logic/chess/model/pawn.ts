import { Color, Coordinates, FENChar } from "@/interface/chess";
import Piece from "./piece";

export default class Pawn extends Piece {
  private _hasMoved = false;
  protected override _FENChar: FENChar;
  protected override _directions: Coordinates[] = [
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 1, y: 1 },
    { x: 1, y: -1 },
  ];

  constructor(color: Color) {
    super(color);
    if (color === Color.Black) {
      this.setBlackPawnDirections();
    }
    this._FENChar =
      color === Color.White ? FENChar.WhitePawn : FENChar.BlackPawn;
  }

  private setBlackPawnDirections(): void {
    this._directions = this.directions.map(({ x, y }) => ({ x, y: -1 * y }));
  }

  public get hasMoved(): boolean {
    return this._hasMoved;
  }
  public set hasMoved(_) {
    this._hasMoved = true;
    this._directions = [
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: -1 },
    ];
    if (this.color === Color.Black) {
      this.setBlackPawnDirections();
    }
  }
}
