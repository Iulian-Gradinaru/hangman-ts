/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Imports Material UI components
 */
import { Typography, Grid } from '@mui/material';

/**
 * Styles the Container
 */
export const Container = styled(Grid)(({ theme }) => {
  return {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    width: '100%',
    color: 'black',
    textAlign: 'center',

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
        marginLeft: 183,
        marginTop: 123,
        background: 'rgb(255, 132, 0)',
        boxShadow: '0 6px rgb(174, 92, 5)',
        transform: 'rotate(-38deg)',
        '&:hover': {
          background: 'rgb(174, 92, 5)',
        },
      },
      '& > .history-container': {
        position: 'absolute',
        left: 0,
        top: 0,
      },
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
      display: 'flex',
      '& button': {
        '&#reset': {
          display: 'flex',
          position: 'absolute',
          width: 'auto',
          marginLeft: 239,
          marginTop: 608,
          marginRight: 30,
          transform: 'rotate(0deg)',
        },
      },
    },
  };
});

/**
 * Styles the Mistakes
 */
export const Mistakes = styled(Typography)(({ theme }) => {
  return {
    color: 'red',
    fontSize: 'x-large',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      fontSize: 30,
      color: 'black',
    },
  };
});

/**
 * Styles the Winner
 */
export const Winner = styled(Typography)(({ theme }) => {
  return {
    color: 'red',
    fontWeight: 'bold',
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      fontSize: 60,
      marginBottom: 20,
    },
  };
});
