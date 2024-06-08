import { Color, Coordinates, FENChar } from "@/interface/chess";
import Piece from "./piece";

export default class Queen extends Piece {
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
        color === Color.White ? FENChar.WhiteQueen : FENChar.BlackQueen;
    }
    }