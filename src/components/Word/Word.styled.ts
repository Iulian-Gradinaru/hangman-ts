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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '1em',
    fontSize: '2rem',
    marginTop: -10,
    '@media (max-width: 391px)': {
      marginTop: -20,
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
