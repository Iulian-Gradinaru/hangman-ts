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
  };
});
