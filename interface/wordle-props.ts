interface WordleStateProps {
  word: string;
  guesses: string[];
  maxGuesses: number;
  maxWordLength: number;
  wordle: string;
}

interface WordleActionsProps {
  addGuess: (guess: string) => void;
  checkGuess: () => void;
  generateWordle: () => void;
}

export interface WordleProps extends WordleStateProps, WordleActionsProps {}

export interface KeyboardProps {
    keys: string[];
    onKeyPress: (key: string) => void;
}