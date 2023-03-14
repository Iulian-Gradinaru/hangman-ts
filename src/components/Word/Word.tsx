import React from 'react';

/**
 * Imports styled
 */
import { Container } from './Word.styled';

/**
 * Imports types
 */
import { WordProps } from './Word.types';

/**
 * Displays the component
 */
export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter, gameOver, lettersPressed } = props;

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return (
        <span
          style={{
            color:
              gameOver && !lettersPressed.includes(letter) ? 'red' : 'dark',
          }}
          key={`${wordToGuess}_${index}`}
        >
          {formatLetter(letter, index)}
        </span>
      );
    });
  };

  return <Container className="word">{renderWord()}</Container>;
};
