import React, { useEffect, useState } from 'react';

/**
 * Imports styles
 */
import { Container, Mistakes, Winner } from './Game.styled';

/**
 * Imports types
 */
import { HistoryItem } from './Game.types';

/**
 * Imports components
 */
import { Title } from '../Title';
import { Drawing } from '../Drawing';
import { Keyboard } from '../Keyboard';
import { History } from '../History';
import { Word } from '../Word';

/**
 * Imports hooks
 */
import { UseUtils } from '../../hooks';

/**
 * Displays the component
 */
export const Game: React.FC = () => {
  /**
   * Initializes the guessed letters
   */
  const [lettersPressed, setLettersPressed] = useState<string[]>([]);

  /**
   * Initializes the word to guess
   */
  const [wordToGuess, setWordToGuess] = useState('');

  /**
   * Initializes the number of mistakes
   */
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  /**
   * Initializes the game over
   */
  const [gameOver, setGameOver] = useState(false);

  /**
   * Initializes the winner
   */
  const [isWinner, setIsWinner] = useState(false);

  /**
   * Initializes the history
   */
  const [history, setHistory] = useState<HistoryItem[]>([]);

  /**
   * Gets utility
   */
  const { getWord } = UseUtils();

  /**
   * Handles the format letters
   */
  const formatLetter = (letter: string, index: number) => {
    if (index === 0 || gameOver) return letter;
    if (wordToGuess.length - 1 === index) return letter;
    return lettersPressed.includes(letter) ? letter : '_';
  };

  /**
   * Handles the letters includes in array
   */
  const handleClick = (letter: string) => {
    if (lettersPressed.includes(letter) || gameOver) return;
    setLettersPressed((currentState) => {
      return [...currentState, letter];
    });
    if (!wordToGuess.split('').includes(letter)) {
      setNumberOfMistakes((currentState) => (currentState += 1));
    }
  };

  /**
   * Handles the reset game
   */
  const handleResetGame = () => {
    setLettersPressed([]);
    setWordToGuess(getWord());
    setGameOver(false);
    setNumberOfMistakes(0);
    setIsWinner(false);
    setHistory((currentState) => {
      return [{ wordToGuess, isWinner, numberOfMistakes }, ...currentState];
    });
  };

  /**
   * Handles the words guess
   */
  useEffect(() => {
    setWordToGuess(getWord());
    // eslint-disable-next-line
  }, []);

  /**
   * Handles the winner
   */
  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length > 0) {
      const isWinner = wordToGuess
        .split('')
        .every((letter) => lettersPressed.includes(letter));
      if (isWinner) {
        setIsWinner(true);
        setGameOver(true);
      }
    }
    // eslint-disable-next-line
  }, [lettersPressed, wordToGuess]);

  /**
   * Handles the letters presed
   */
  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length < 1) {
      const firstLetter = wordToGuess[0];
      const lastLetter = wordToGuess[wordToGuess.length - 1];
      setLettersPressed([firstLetter, lastLetter]);
    }
    // eslint-disable-next-line
  }, [wordToGuess]);

  /**
   * Handles the game over
   */
  useEffect(() => {
    if (numberOfMistakes >= 6) {
      setGameOver(true);
    }
  }, [numberOfMistakes]);

  return (
    <Container className="hangman">
      <button id="reset" onClick={handleResetGame}>
        Reset
      </button>
      <History history={history} />
      <Title />
      <Winner className="winner">
        <div>{gameOver && !isWinner && <h1>You Lose!!!</h1>}</div>
        <div>{isWinner && <h1>You Won!!!</h1>}</div>
      </Winner>
      <Drawing numberOfMistakes={numberOfMistakes} />
      <Mistakes className="mistakes">{`Numbers of mistakes: ${numberOfMistakes}`}</Mistakes>
      <Word
        wordToGuess={wordToGuess}
        formatLetter={formatLetter}
        gameOver={gameOver}
        lettersPressed={lettersPressed}
      />

      <div>
        {!gameOver && (
          <Keyboard onClick={handleClick} lettersPressed={lettersPressed} />
        )}
      </div>
    </Container>
  );
};
