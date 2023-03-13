import React from 'react';
import './Word.css';
import { WordProps } from './Word.types';

export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter } = props;

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return <span key={index}>{formatLetter(letter, index)}</span>;
    });
  };

  return <div className="word">{renderWord()}</div>;
};
