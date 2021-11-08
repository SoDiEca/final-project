import {
  AppBar,
  Container,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core';
import Head from 'next/head';
import React, { useContext } from 'react';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { store } from '../utils/store';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#0c610C',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>
          {title
            ? `${title} - e-commerce final project`
            : 'e-commerce final project'}
        </title>{' '}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>
                  Tree saplings for the future
                </Typography>
              </Link>
            </NextLink>
            <div className={classes.grow} />
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved...</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
