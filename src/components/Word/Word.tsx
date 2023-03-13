import React from 'react';

import { WordProps } from './Word.types';
import { Container } from './Word.styled';

export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter } = props;

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return <span key={index}>{formatLetter(letter, index)}</span>;
    });
  };

  return <Container className="word">{renderWord()}</Container>;
};
