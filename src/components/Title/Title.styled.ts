/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('h1')(() => {
  return {
    fontSize: '4rem',
    marginBottom: '0.1em',
    marginTop: 0,
    '@media (max-width: 768px)': {
      // width: '100%',
      // height: '50%',
      // border: '2px solid red',
    },

    '@media (max-width: 391px)': {
      // width: '100%',
      // height: '50%',
      // border: '2px solid blue',
    },
  };
});
