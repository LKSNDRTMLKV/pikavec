'use client';

import { BoardView, FENChar, pieceImagePaths } from "@/interface/chess";
import Image from "next/image";
import DarkSquare from "@/assets/chess/board squares/square brown dark_svg.svg";
import LightSquare from "@/assets/chess/board squares/square brown light_svg.svg"
import React from "react";

interface ChessBoardProps {
    chessBoard: BoardView;
    // getImageFromFENChar: (FENChar: FENChar) => string;
}

function getImageFromFENChar(FENChar: FENChar) {
    return pieceImagePaths[FENChar];
}


const ChessBoard = ({ chessBoard }: ChessBoardProps) => {
    return (
        <div className="m-2">
            {chessBoard.map((row, rowIndex) => (
                <div className="flex flex-row" key={rowIndex}>
                    {row.map((square, squareIndex) => {
                        const image: string = (rowIndex + squareIndex) % 2 === 0 ? LightSquare : DarkSquare;
                        const piece: string = square !== null ? getImageFromFENChar(square) : '';
                        // const image : string = square !== null ? getImageFromFENChar(square) : LightSquare;
                        return (
                            <div key={squareIndex} className="w-full h-16 relative">
                                <Image src={image} alt="Piece" width={64} height={64} />
                                <div className="absolute bottom-1/2 left-0 translate-x-1/2 translate-y-1/2 z-50">
                                    {piece ?
                                        <Image src={piece} alt="" width={32} height={32} className="object-contain" /> :
                                        null
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>
            ))
            }
        </div>
    )
};

export default ChessBoard;