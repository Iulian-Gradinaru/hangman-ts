/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the ImgContainer
 */
export const DrawingContainer = styled('img')(() => {
  return {
    // maxHeight: 260,
    // width: 'auto',
    border: '10px solid white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.27)',
    '@media (max-width: 768px)': {},

    '@media (max-width: 391px)': {},
  };
});

export const ContainerImg = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      border: '2px solid red',
    },

    '@media (max-width: 391px)': {
      border: '2px solid red',
    },
  };
});
