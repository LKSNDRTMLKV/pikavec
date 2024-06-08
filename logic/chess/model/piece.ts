import { Color, Coordinates, FENChar } from "@/interface/chess";

export default abstract class Piece {
  protected abstract _FENChar: FENChar;
  protected abstract _directions: Coordinates[];

  constructor(protected _color: Color) {}

  public get FENChar(): FENChar {
    return this._FENChar;
  }

  public get color(): Color {
    return this._color;
  }

  public get directions(): Coordinates[] {
    return this._directions;
  }
}
