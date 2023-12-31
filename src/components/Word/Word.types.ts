/**
 * Defines the component props interface
 */
export interface WordProps {
  wordToGuess: string;
  formatLetter: (letter: string, index: number) => string;
  gameOver: boolean;
  lettersPressed: string[];
}

export interface ColorLetterProps {
  gameOver: boolean;
  lettersPressed: string[];
  letter: string;
}
