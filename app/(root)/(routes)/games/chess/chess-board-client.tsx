'use client'

import React, { useEffect } from 'react';
import { cn } from "@/lib/utils"
import ChessBoard from '@/model/chess/chess-board';
import { BoardView, CheckState, Color, Coordinates, FENChar, LastMove, SelectedSquare, pieceImagePaths } from '@/interface/chess-props';
import Piece from '@/model/chess/piece';
import Image from 'next/image';
// import { BehaviorSubject } from 'rxjs';
// import  moveSound  from '@/assets/chess/sound/move.mp3';

const ChessBoardClient: React.FC = () => {
    const [chessBoard] = React.useState(new ChessBoard());
    const [chessBoardView, setChessBoardView] = React.useState<BoardView>(chessBoard.chessBoardView);
    // const [chessBoardState, setChessBoardState] = React.useState(new BehaviorSubject(chessBoard.boardAsFen));
    const [selectedSquare, setSelectedSquare] = React.useState<SelectedSquare>({ piece: null })
    const [pieceSafeSquares, setPieceSafeSquares] = React.useState<Coordinates[] | null>([]);
    const [lastMove, setLastMove] = React.useState<LastMove | undefined>(chessBoard.lastMove);
    const [checkState, setCheckState] = React.useState(chessBoard.checkState);
    const [flipMode, setFlipMode] = React.useState<boolean>(false);

    const [isPromotionActive, setIsPromotionActive] = React.useState<boolean>(false);
    const [promotionCoordinates, setPromotionCoordinates] = React.useState<Coordinates | null>(null);
    const [promotedPiece, setPromotedPiece] = React.useState<FENChar | null>(null);

    const [gameHistoryPointer, setGameHistoryPointer] = React.useState<number>(0);
    const [gameOverMessage, setGameOverMessage] = React.useState(chessBoard.gameOverMessage);

    const promotionPieces: FENChar[] = chessBoard.playerColor === Color.White ?
        [FENChar.WhiteKnight, FENChar.WhiteBishop, FENChar.WhiteRook, FENChar.WhiteQueen] :
        [FENChar.BlackKnight, FENChar.BlackBishop, FENChar.BlackRook, FENChar.BlackQueen];

    const moveSound = ''

    const promotePiece = (piece: FENChar) => {
        // return chessBoard.playerColor === Color.White ?
        //     [FENChar.WhiteQueen, FENChar.WhiteRook, FENChar.WhiteBishop, FENChar.WhiteKnight] :
        //     [FENChar.BlackQueen, FENChar.BlackRook, FENChar.BlackBishop, FENChar.BlackKnight];
        setPromotedPiece(piece);
    }

    const handleFlipBoard = () => {
        setFlipMode(!flipMode);
    }

    const isSquareDark = (x: number, y: number) => {
        return ChessBoard.isSquareDark(x, y);
    };


    const isSquareSelected = (x: number, y: number) => {
        return selectedSquare.piece && selectedSquare.x === x && selectedSquare.y === y;
    };

    const isSquareSafeForSelectedPiece = (x: number, y: number) => {
        return pieceSafeSquares?.some((coords) => coords.x === x && coords.y === y);
    };

    const isSquareLastMove = (x: number, y: number) => {
        if (!lastMove) return false;
        const { prevX, prevY, currX, currY } = lastMove;
        return (x === prevX && y === prevY) || (x === currX && y === currY);
    };

    const isSquareChecked = (x: number, y: number) => {
        return checkState.checked && checkState.x === x && checkState.y === y;
    };

    const isSquarePromotionSquare = (x: number, y: number) => {
        return promotionCoordinates && promotionCoordinates.x === x && promotionCoordinates.y === y;
    };


    const unmarkingPreviouslySelectedAndSafeSquares = () => {
        setSelectedSquare({ piece: null });
        setPieceSafeSquares([]);

        if (isPromotionActive) {
            setIsPromotionActive(false);
            setPromotedPiece(null);
            setPromotionCoordinates(null);
        }
    };

    const selectingPiece = (x: number, y: number) => {
        if (gameOverMessage) return;

        const piece = chessBoardView[x][y];
        if (!piece) return;
        if (isWrongPieceSelected(piece)) return;


        const isSameSquareClicked =
            !!selectedSquare.piece && selectedSquare.x === x && selectedSquare.y === y;
        unmarkingPreviouslySelectedAndSafeSquares();
        if (isSameSquareClicked) return;

        setSelectedSquare({ piece, x, y });

        setPieceSafeSquares(chessBoard.safeSquares.get(`${x},${y}`) || []);
    };

    const placingPiece = (newX: number, newY: number) => {
        if (!selectedSquare.piece) return;
        if (!isSquareSafeForSelectedPiece(newX, newY))
            unmarkingPreviouslySelectedAndSafeSquares();

        // pawn promotion
        const isPawnSelected =
            selectedSquare.piece === FENChar.WhitePawn || selectedSquare.piece === FENChar.BlackPawn;
        const isPawnOnLastRank = isPawnSelected && (newX === 7 || newX === 0);
        const shouldOpenPromotionDialog = !isPromotionActive && isPawnOnLastRank;

        if (shouldOpenPromotionDialog) {
            setPieceSafeSquares([]);
            setIsPromotionActive(true);
            setPromotionCoordinates({ x: newX, y: newY });
            return;
        }

        const { x: prevX, y: prevY } = selectedSquare;
        updateBoard(prevX, prevY, newX, newY, promotedPiece);
    }

    const updateBoard = (prevX: number, prevY: number, newX: number, newY: number, promotedPiece: any) => {
        chessBoard.movePiece(prevX, prevY, newX, newY, promotedPiece);
        setChessBoardView(chessBoard.chessBoardView);
        markLastMoveAndCheckState(chessBoard.lastMove, chessBoard.checkState);
        unmarkingPreviouslySelectedAndSafeSquares();
        // setChessBoardState(() => chessBoard.boardAsFen);
        // ChessBoardService.chessBoardState$.next(chessBoard.boardAsFEN);
        setGameHistoryPointer((prev) => prev + 1);
    };

    const closePawnPromotionDialog = () => {
        unmarkingPreviouslySelectedAndSafeSquares();
    };

    const markLastMoveAndCheckState = (lastMove: LastMove | undefined, checkState: CheckState) => {
        setLastMove(lastMove);
        setCheckState(checkState);

        // if (lastMove) moveSound(lastMove.moveType);
        // else moveSound(new Set([MoveType.BasicMove]));
    };

    const isWrongPieceSelected = (piece: FENChar): boolean => {
        const isWhitePieceSelected: boolean = piece === piece.toUpperCase();
        return (isWhitePieceSelected && chessBoard.playerColor === Color.Black) || (!isWhitePieceSelected && chessBoard.playerColor === Color.White);
    };

    const showPreviousPosition = React.useCallback((moveIndex: number) => {
        const { board, checkState, lastMove } = chessBoard.gameHistory[moveIndex];
        setChessBoardView(board);
        markLastMoveAndCheckState(lastMove, checkState);
        setGameHistoryPointer(moveIndex);
    }, [chessBoard.gameHistory]);

    const handleMoveSound = (moveType: Set<string>) => {
        const moveSounds = new Audio(moveSound);
        moveSounds.play();
    }

    const handleMove = (x: number, y: number): void => {
        selectingPiece(x, y);
        placingPiece(x, y);
        // moveSound && handleMoveSound(new Set(['BasicMove']));
        // const moveSounds = new Audio(moveSound);
        // moveSounds.play();
    }

    // const squareClickHandler = (piece: Piece, coordinates: Coordinates) => {
    //     setSelectedSquare({ piece, coordinates });
    //     setPieceSafeSquares(piece.getSafeSquares());
    // };

    React.useEffect(() => {
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                switch (event.key) {
                    case 'ArrowRight':
                        if (gameHistoryPointer === chessBoard.gameHistory.length - 1) return;
                        setGameHistoryPointer((prev) => prev + 1);
                        break;
                    case 'ArrowLeft':
                        if (gameHistoryPointer === 0) return;
                        setGameHistoryPointer((prev) => prev - 1);
                        break;
                    default:
                        break;
                }
                showPreviousPosition(gameHistoryPointer);
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
            //   ChessBoardService.chessBoardState$.next(FENConverter.initialPosition);
        };
    }, [gameHistoryPointer, chessBoard, showPreviousPosition]);

    useEffect(() => {
        if(chessBoard.gameOverMessage) {
            setGameOverMessage(chessBoard.gameOverMessage)
        }
    }, [chessBoard.gameOverMessage])

    return (
        <div className='mt-4 rounded-md'>

            <div className={cn("flex flex-col", flipMode && "rotate-180")}>
                {chessBoardView.map((row, x) => (
                    <div key={x} className="flex flex-row">
                        {row.map((piece, y) => (
                            <div
                                key={y}
                                className={cn(
                                    "relative w-16 h-16 flex items-center justify-center cursor-pointer",
                                    isSquareDark(x, y) ? "bg-gray-700" : "bg-gray-300",
                                    isSquareSelected(x, y) && "border-4 border-yellow-500",
                                    isSquareLastMove(x, y) && "bg-green-200",
                                    isSquareChecked(x, y) && "bg-red-500",
                                    isSquarePromotionSquare(x, y) && "bg-blue-500"
                                )}
                                onClick={() => handleMove(x, y)}
                            >
                                <div className={cn("absolute inset-0", isSquareSafeForSelectedPiece(x, y) && "bg-yellow-300 opacity-50")} />
                                {piece && (
                                    <Image
                                        src={pieceImagePaths[piece]}
                                        alt={piece}
                                        className={cn("w-3/4 h-3/4 cursor-grab", flipMode && "rotate-180")}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )).reverse()}
            </div>

            <button onClick={handleFlipBoard} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Flip</button>
            {gameOverMessage && <h2 className="mt-4 text-red-500 text-xl font-bold">{gameOverMessage}</h2>}
            {isPromotionActive && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        {promotionPieces.map((piece) => (
                            <Image
                                key={piece}
                                src={pieceImagePaths[piece]}
                                onClick={() => promotePiece(piece)}
                                className="w-16 h-16 mx-2 cursor-pointer"
                                alt='promotion piece'
                            />
                        ))}
                        <span
                            className="absolute top-0 right-0 p-2 cursor-pointer text-xl text-red-500"
                            onClick={closePawnPromotionDialog}
                        >
                            &times;
                        </span>
                    </div>
                </div>
            )}
            {/* Implement <MoveList /> component and pass necessary props */}
        </div>
    );

}

export default ChessBoardClient;