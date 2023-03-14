/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the ImgContainer
 */
export const ImgContainer = styled('img')(() => {
  return {
    width: 323,
    height: 260,
    border: '10px solid white',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.27)',
    inset: ' 0 0 40px rgba(0, 0, 0, 0.06)',
  };
});