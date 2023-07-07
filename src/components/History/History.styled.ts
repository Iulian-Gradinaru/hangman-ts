/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    position: 'absolute',
    left: 'auto',
    width: 200,
    height: 300,
    margin: 70,
    color: 'rgb(255, 132, 0)',
    fontSize: 'large',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      // width: '102%',
      // height: '106%',
      border: '2px solid red',
      margin: 0,
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '89%',
      border: '2px solid blue',
      margin: 0,
    },
  };
});

/**
 * Styles the Title
 */
export const Title = styled('p')(() => {
  return {
    textDecoration: 'underline',
    color: 'rgb(255, 132, 0)',
    fontSize: 'x-large',
  };
});

/**
 * Styles the Display
 */
export const Display = styled('div')(() => {
  return {
    maxHeight: 350,
    overflow: 'auto',
  };
});
