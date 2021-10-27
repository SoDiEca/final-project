import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>e-commerce final project</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>A tree seedling for the future</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved...</Typography>
      </footer>
    </div>
  );
}
