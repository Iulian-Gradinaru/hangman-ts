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
    '@media (max-width: 391px)': {
      marginTop: -15,
    },
  };
});
