import React from 'react';

export const Word = (props) => {
  const { wordToGuess, lettersPressed } = props;
  const formatLetter = (letter) => {
    return lettersPressed.includes(letter) ? letter : '_';
  };

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => {
      return <span key={index}>{formatLetter(letter)}</span>;
    });
  };

  return <div>{renderWord()}</div>;
};
