

import Chess from "@/model/chess/chess-board";
import ChessBoard from "./chess-board"
import { BoardView, FENChar, pieceImagePaths } from "@/interface/chess-props";
import ChessBoardClient from "./chess-board-client";

const Page = async () => {
    // const chess = new Chess();
    // const chessBoard: BoardView = chess.boardView;


    function getImageFromFENChar(FENChar: FENChar) {
        return pieceImagePaths[FENChar];
    }



    return (
        <>
            {/* <ChessBoard
                chessBoard={chessBoard}
                // getImageFromFENChar={getImageFromFENChar}
            /> */}
            <ChessBoardClient />
        </>
    )
}

export default Page;