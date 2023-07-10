/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    textAlign: 'center',
    display: 'inline-block',
    width: 339,
    marginTop: 0,
    marginBottom: 22,
    '@media (max-width: 768px)': {
      // width: '100%',
      // height: '100%',
      border: '2px solid red',
    },

    '@media (max-width: 391px)': {
      // width: '100%',
      // height: '89%',
      border: '2px solid blue',
    },
  };
});

export const Button = styled('button')(() => {
  return {
    // textAlign: 'center',
    // display: 'inline-block',
    // width: 339,
    // marginTop: 0,
    // marginBottom: 22,
    '@media (max-width: 768px)': {
      // width: '100%',
      // height: '29%',
      // border: '2px solid red',
    },

    '@media (max-width: 391px)': {
      // width: '100%',
      // height: '89%',
      // border: '2px solid blue',
    },
  };
});
