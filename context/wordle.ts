import { WordleProps } from '@/interface/wordle-props'
import {create} from 'zustand'


export const useWordle = create<WordleProps>((set) => ({
    word: '',
    guesses: [],
    maxGuesses: 5,
    maxWordLength: 5,
    wordle: '',
    addGuess: (guess: string) => set((state) => ({ guesses: [...state.guesses, guess] })),
    checkGuess: () => {
        // Logic to check the guess against the wordleGrid
        // Update feedback and attempts accordingly
        // Check if the game is over
    },
    generateWordle: () => {
        // Logic to generate a random wordleGrid
    }
}))
