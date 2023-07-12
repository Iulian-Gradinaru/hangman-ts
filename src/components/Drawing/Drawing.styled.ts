/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Drawing Container
 */
export const DrawingContainer = styled('img')(() => {
  return {
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.27)',
    '@media (max-width: 391px)': {
      width: '50%',
    },
  };
});

/**
 * Styles the Container Img
 */
export const ContainerImg = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -17,
    '@media (max-width: 391px)': {
      width: '100%',
      height: '100%',
    },
  };
});
