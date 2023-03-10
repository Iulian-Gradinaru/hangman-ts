import React from 'react';
import './Keyboard.css';

export const Keyboard = (props) => {
  const { lettersPressed, setLettersPressed } = props;

  const handleClick = (letter) => {
    if (lettersPressed.includes(letter)) return;
    setLettersPressed((currentState) => {
      return [...currentState, letter];
    });
  };

  return 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index) => (
    <button
      onClick={() => handleClick(letter)}
      className="keyboard"
      key={index}
    >
      {letter}
    </button>
  ));
};
