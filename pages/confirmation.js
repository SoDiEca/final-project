import { Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';

export default function Confirmation() {
  return (
    <Layout title="Order Confirmation">
      <Typography component="h1" variant="h1">
        Thank you for your order!
      </Typography>
    </Layout>
  );
}
