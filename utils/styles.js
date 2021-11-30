import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#FFFFFF',
    minHeight: '10vh',
    position: 'relative',

    '& a': {
      marginLeft: 10,
      color: '#336600',
      textAlign: 'center',
    },
  },
  brand: {
    fontSize: 28,
    fontWeight: 700,
    fontStyle: 'normal',
  },
  alignCenter: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  gridContainer: {
    width: '90%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
    position: 'relative',
  },
  footer: {
    textAlign: 'center',
    marginTop: 60,
    backgroundColor: '#336600',
    height: '17vh',
    justifyContent: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    maxWidth: 400,
    margin: '0 auto',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
  },

  navbarButton: {
    color: '#336600',
    textTransform: 'initial',
    backgroundColor: 'transparent',
  },
  transparentBackground: {
    backgroundColor: 'transparent',
  },
});
export default useStyles;
