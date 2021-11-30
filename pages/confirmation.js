import { Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import HeroPage from '../components/HeroPage';

export default function Confirmation() {
  return (
    <Layout title="Order Confirmation">
      <div classes={styles.Confirm}>
        <Typography>
          Thank you for deciding to plant a sapling with us ! A confirmation of
          your order will be sent shortly to you per email.
        </Typography>
      </div>
    </Layout>
  );
}
