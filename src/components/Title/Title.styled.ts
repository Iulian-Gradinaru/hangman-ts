/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('h1')(() => {
  return {
    display: 'flex',
    alingItem: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    marginBottom: '0.1em',
    marginTop: -6,
    '@media (max-width: 768px)': {
      display: 'flex',
      alingItem: 'center',
      justifyContent: 'center',
      fontSize: '4rem',
      marginBottom: '0.1em',
      marginTop: -130,
    },
    '@media (max-width: 391px)': {
      display: 'flex',
      alingItem: 'center',
      justifyContent: 'center',
      fontSize: 50,
      marginBottom: -20,
      marginTop: -170,
    },
  };
});
