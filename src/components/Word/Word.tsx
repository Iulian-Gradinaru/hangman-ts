import React from 'react';

/**
 * Imports styled
 */
import { Container, ColorLetter } from './Word.styled';

/**
 * Imports types
 */
import { WordProps } from './Word.types';

/**
 * Displays the component
 */
export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter, gameOver, lettersPressed } = props;

  /**
   * Dispalys the word to guees and format letters
   */
  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return (
        <ColorLetter
          gameOver={gameOver}
          lettersPressed={lettersPressed}
          letter={letter}
          key={`${wordToGuess}_${index}`}
        >
          {formatLetter(letter, index)}
        </ColorLetter>
      );
    });
  };

  return <Container className="word">{renderWord()}</Container>;
};
