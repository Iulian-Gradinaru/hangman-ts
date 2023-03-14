import React from 'react';
import { KeyboardProps } from './Keyboard.types';
import { Container } from './Keyboard.styled';

export const Keyboard: React.FC<KeyboardProps> = (props) => {
  const { onClick, lettersPressed } = props;
  const buttonsKeyboard = 'abcdefghijklmnopqrstuvwxyz';

  return (
    <Container className="keyboard">
      {buttonsKeyboard.split('').map((letter, index) => (
        <button
          onClick={() => onClick(letter)}
          key={index}
          disabled={lettersPressed.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </Container>
  );
};
