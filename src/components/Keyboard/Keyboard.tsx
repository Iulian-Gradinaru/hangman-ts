import React from 'react';

/**
 * Imports styled
 */
import { Container } from './Keyboard.styled';

/**
 * Imports types
 */
import { KeyboardProps } from './Keyboard.types';

/**
 * Displays the component
 */
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
