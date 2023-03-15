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
    color: ' rgb(255, 132, 0)',
    fontSize: 'large',
    fontWeight: 'bold',
  };
});

export const Title = styled('p')(() => {
  return {
    textDecoration: 'underline',
    color: ' rgb(255, 132, 0)',
    fontSize: ' x-large',
  };
});

export const Display = styled('div')(() => {
  return {
    maxHeight: 350,
    overflow: 'auto',
  };
});
