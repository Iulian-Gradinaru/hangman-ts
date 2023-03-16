/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the Container
 */
export const Container = styled('div')(() => {
  return {
    position: 'relative',
    height: '100%',
    width: 1000,
    color: 'black',
    textAlign: 'center',
    zoom: '1.3',
    '& button': {
      border: 'none',
      fontFamily: 'inherit',
      fontSize: '1rem',
      cursor: 'pointer',
      width: 30,
      margin: '5px 2px 2px 2px',
      letterSpacing: 1,
      outline: 'none',
      background: '#00bcd4',
      color: '#fff',
      boxShadow: '0 6px #0097a7',
      borderRadius: 5,
      paddingTop: 4,
      '&:hover': {
        backgroundColor: '#0097a7',
      },
      '&:disabled': {
        background: '#bdbdbd',
        color: '#eeeeee',
        boxShadow: '0 6px #9e9e9e',
      },
      '&#reset': {
        display: 'inline-block',
        position: 'absolute',
        width: 'auto',
        marginLeft: 122,
        marginTop: 123,
        background: 'rgb(255, 132, 0)',
        boxShadow: '0 6px rgb(174, 92, 5)',
        transform: 'rotate(-38deg)',
        '&:hover': {
          background: 'rgb(174, 92, 5)',
        },
      },
    },
  };
});

// export const Reset = styled('button')(() => {
//   return {
//     '&#reset': {
//       display: 'inline-block',
//       position: 'absolute',
//       width: 'auto',
//       marginLeft: 122,
//       marginTop: 123,
//       background: 'rgb(255, 132, 0)',
//       boxShadow: '0 6px rgb(174, 92, 5)',
//       transform: 'rotate(-38deg)',
//       '&:hover': {
//         background: 'rgb(174, 92, 5)',
//       },
//     },
//   };
// });

export const Mistakes = styled('div')(() => {
  return {
    color: 'rgb(255, 132, 0)',
    fontSize: 'large',
    fontWeight: 'bold',
  };
});

export const Winner = styled('div')(() => {
  return {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 0,
  };
});
