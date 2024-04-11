'use client'

import { Input } from "@/components/ui/input";
import React, { useEffect, useMemo } from "react";

const WordlePage: React.FC = () => {
    const numberOfRows : number = 6;
    const numberOfColumns : number = 5;
    const [wordleGrid, setWordleGrid] = React.useState(Array.from({ length: numberOfRows }, () => Array.from({ length: numberOfColumns }, () => null)));
    const [onCurrentRow, setOnCurrentRow] = React.useState<number>(0);
    const [guess, setGuess] = React.useState<string>("");
    const [attempts, setAttempts] = React.useState<number>(0);
    const [feedback, setFeedback] = React.useState<string[]>([]);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    // const [currentGuess, setCurrentGuess] = React.useState<string[]>([]);
    let currentGuess: string[] = useMemo(() => [], []);


    const checkGuess = () => {
        // Logic to check the guess against the wordleGrid
        // Update feedback and attempts accordingly
        // Check if the game is over
    };

    console.log(wordleGrid)

    useEffect(() => {
        // Logic to generate a random wordleGrid
        document.addEventListener("keydown", (event) => {
            if (event.key === "Backspace") {
                currentGuess.pop();
                // setCurrentGuess((prevGuess) => prevGuess.slice(0, -1));
            }
            else {
                if (/^[a-zA-Z]$/.test(event.key)) {
                    if(currentGuess.length === 5) return;
                    currentGuess.push(event.key);
                    // setCurrentGuess((prevGuess) => [...prevGuess, event.key]);
                }
            }
            console.log(currentGuess)
        });

    }, [currentGuess]);

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