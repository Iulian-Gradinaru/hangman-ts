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
      marginLeft: 20,
    },

    '@media (max-width: 391px)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: -12,
      height: 200,
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
    '@media (max-width: 391px)': {
      marginTop: -43,
    },
  };
});

/**
 * Styles the Display
 */
export const Display = styled('div')(() => {
  return {
    maxHeight: 350,
    overflow: 'auto',
    '@media (max-width: 391px)': {
      width: '100%',
      height: '50%',
    },
  };
});
