/* *
 * Imports styled
 */
import { styled } from '@mui/system';

/* *
 * Styles the AppContainer
 */
export const AppContainer = styled('div')(() => {
  return {
    fontFamily: 'papyrus',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:
      "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/61f7685f-47e5-49a0-b5cb-ca6b8cab4228/drok89-a7a2a550-ba87-40a6-9701-b635550d55b3.jpg')",
    backgroundPosition: 'center center',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '@media (max-width: 391px)': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});

// export const GlobalStyles = styled('div')(() => ({
//   body: {
//     boxSizing: 'border-box',
//     margin: 0,
//     padding: 0,
//   },
//   html: {
//     height: '100%',
//   },
//   '#root': {

//     height: '100%',
//     margin: 0,
//     padding: 0,
//     width: '100%',
//   },
// }));
