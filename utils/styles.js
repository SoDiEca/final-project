import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#FFFFFF',
    '& a': {
      marginLeft: 10,
      color: '#336600',
    },
  },
  brand: {
    fontSize: 28,
    fontWeight: 700,
    fontStyle: 'normal',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: 50,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
