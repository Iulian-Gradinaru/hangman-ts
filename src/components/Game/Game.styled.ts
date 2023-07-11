/**
 * Imports styled
 */
import { styled } from '@mui/system';
import { Box, Typography, Grid } from '@mui/material';

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
    // zoom: '1.3',

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

      '& > .image': {
        /* Stilurile imaginii */
      },
    },
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
      // height: '100%',
      // border: '2px solid blue',
      display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      // zoom: '1.2',
    },

    [theme.breakpoints.down('xs')]: {
      // width: '100%',
      // height: '100%',
      // border: '2px solid blue',
      display: 'flex',
      // alignItems: 'center',
      // justifyContent: 'center',
      // zoom: '1',
    },
  };
});

export const Mistakes = styled(Typography)(({ theme }) => {
  return {
    color: 'red',
    fontSize: 'large',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      marginTop: 28,
      fontSize: 23,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 20,
      fontSize: 20,
    },
  };
});

export const Winner = styled(Box)(() => {
  return {
    color: 'red',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 0,
  };
});
