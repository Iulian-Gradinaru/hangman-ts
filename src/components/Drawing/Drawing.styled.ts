/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the ImgContainer
 */
export const DrawingContainer = styled('img')(() => {
  return {
    maxHeight: 260,
    width: 'auto',
    border: '10px solid white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.27)',
    '@media (max-width: 768px)': {
      width: '75%',
      height: '91%',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '89%',
    },
  };
});

export const ContainerImg = styled('div')(() => {
  return {
    '@media (max-width: 768px)': {
      width: '41%',
      height: '42%',
      border: '2px solid red',
      marginLeft: 164,
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '89%',
      border: '2px solid blue',
    },
  };
});
