import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#FFFFFF',
    color: '#0c610c',
    '& a': {
      marginLeft: 10,
    },
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
