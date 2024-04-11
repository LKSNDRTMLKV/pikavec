'use client'

import { Input } from "@/components/ui/input";
import { useEffect } from "react";

const WordlePage: React.FC = () => {
    const numberOfRows : number = 6;
    const numberOfColumns : number = 5;
    const wordleGrid = Array.from({ length: numberOfRows }, () => Array.from({ length: numberOfColumns }, () => 0));
    const [onCurrentRow, setOnCurrentRow] = [0, () => { }];
    const [currentRow, setCurrentRow] = [wordleGrid[onCurrentRow], () => { }];
    // const [currentColumn, setCurrentColumn] = [currentRow[0], () => { }];
    // const [currentValue, setCurrentValue] = [currentColumn, () => { }];
    // const [currentGuess, setCurrentGuess] = [currentRow, () => { }];
    // const [currentGuessIndex, setCurrentGuessIndex] = [0, () => { }];
    // const [currentGuessValue, setCurrentGuessValue] = [currentGuess[currentGuessIndex], () => { }];
    // const [currentWord, setCurrentWord] = [currentRow, () => { }];
    // const [currentWordIndex, setCurrentWordIndex] = [0, () => { }];
    // const [currentWordValue, setCurrentWordValue] = [currentWord[currentWordIndex], () => { }];
    // const [currentWordle, setCurrentWordle] = [currentRow, () => { }];
    // const [currentWordleIndex, setCurrentWordleIndex] = [0, () => { }];
    // const [currentWordleValue, setCurrentWordleValue] = [currentWordle[currentWordleIndex], () => { }];
    // const [currentGuesses, setCurrentGuesses] = [wordleGrid, () => { }];
    // const [currentWords, setCurrentWords] = [wordleGrid, () => { }];
    // const [currentWordles, setCurrentWordles] = [wordleGrid, () => { }];

    useEffect(() => {
        console.log(wordleGrid);
    }, [wordleGrid]);

    return (
        <div>
            {
                wordleGrid.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {
                            row.map((column, columnIndex) => (
                                <div key={columnIndex} className="w-10 h-10 border border-gray-300 m-1">
                                    {rowIndex === onCurrentRow ?
                                        <Input
                                        type="text"
                                        placeholder=""
                                        className="w-10 h-10" /> :
                                        null
                                    }
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}
export default WordlePage;