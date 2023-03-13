import React from 'react';
import './Keyboard.css';
import { KeyboardProps } from './Keyboard.types';

export const Keyboard: React.FC<KeyboardProps> = (props) => {
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
