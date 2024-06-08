

import Chess from "@/logic/chess/model/chess";
import ChessBoard from "./chess-board"
import { BoardView, FENChar, pieceImagePaths } from "@/interface/chess";

const Page = async () => {
    const chess = new Chess();
    const chessBoard : BoardView = chess.boardView;


    function getImageFromFENChar(FENChar: FENChar) {
        return pieceImagePaths[FENChar];
    }



    return (
        <>
            <ChessBoard
                chessBoard={chessBoard}
                // getImageFromFENChar={getImageFromFENChar}
            />
        </>
    )
}

export default Page;