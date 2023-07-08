/**
 * Imports styled
 */
import { styled } from '@mui/system';

import { ColorLetterProps } from './Word.types';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    letterSpacing: '1em',
    margin: '0.2em -1em 0.2em 0',
    fontSize: '2rem',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      border: '2px solid red',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '89%',
      border: '2px solid blue',
    },
  };
});

export const ColorLetter = styled('span')<ColorLetterProps>((props) => {
  const { gameOver, lettersPressed, letter } = props;

  return {
    color:
      gameOver && !lettersPressed.includes(letter)
        ? 'rgb(255,0,0)'
        : 'rgb(0,0,0)',
  };
});
