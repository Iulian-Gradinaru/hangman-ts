import React from 'react';
import './Keyboard.css';

export const Keyboard = (props) => {
  const { onClick } = props;
  const buttonsKeyboard = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <div className="keyboard">
      {buttonsKeyboard.split('').map((letter, index) => (
        <button onClick={() => onClick(letter)} key={index}>
          {letter}
        </button>
      ))}
    </div>
  );
};
