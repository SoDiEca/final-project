import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#FFFFFF',
    color: '#0c610c',
    '& a': {
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },

  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 10,
    textAlign: 'center',
    color: '#0c610c',
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyles;
