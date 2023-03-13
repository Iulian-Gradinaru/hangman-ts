import React from 'react';
import './Word.css';

export const Word = (props) => {
  const { wordToGuess, formatLetter } = props;

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return <span key={index}>{formatLetter(letter, index)}</span>;
    });
  };

  return <div className="word">{renderWord()}</div>;
};
