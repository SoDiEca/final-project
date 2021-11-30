import {
  Button,
  List,
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from 'react';
import CheckoutWizard from '../components/CheckoutWizard';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import useStyles from '../utils/styles';
import { Controller, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

export default function Payment() {
  // const { enqueueSnackbar, closeSnackbar } = useSnackbar;
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
    cart: { billingAddress },
  } = state;
  useEffect(() => {
    if (!billingAddress.address) {
      router.push('/billing');
    } else {
      setPaymentDetails(Cookies.get('paymentDetails') || '');
    }

    setValue('cardNum', paymentDetails.cardNum);
    setValue('expMonth', paymentDetails.expMonth);
    setValue('expYear', paymentDetails.expYear);
    setValue('cvc', paymentDetails.cvc);
  }, []);

  const submitHandler = ({ cardNum, expMonth, expYear, cvc }) => {
    // closeSnackbar();
    // e.preventDefault();
    // if (!paymentDetails) {
    //   enqueueSnackbar('Payment details are required', { variant: 'error' });
    // } else {
    dispatch({
      type: 'SAVE_PAYMENT_DETAILS',
      payload: { cardNum, expMonth, expYear, cvc },
    });
    Cookies.set('paymentDetails', paymentDetails);
    router.push('/placeorder');
    // }
  };

  return (
    <Layout title="Payment">
      <CheckoutWizard activeStep={2} />
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="h1">
          Payment Details
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="cardNum"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 16,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="cardNum"
                  label="Card Number"
                  error={Boolean(errors.cardNum)}
                  helperText={
                    errors.cardNum
                      ? errors.cardNum.type === 'minLength'
                        ? 'Please enter valid credit card details'
                        : 'Valid credit card required'
                      : ''
                  }
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="expMonth"
              control={control}
              defaultValue=""
              rules="required"
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="expMonth"
                  label="Expiry Month"
                  error={Boolean(errors.expMonth)}
                  helperText={
                    errors.expMonth
                      ? errors.expMonth.type === 'rules'
                        ? 'Please enter valid expiry month'
                        : 'Expiry month is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="expYear"
              control={control}
              defaultValue=""
              rules="required"
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="expYear"
                  label="Expiry Year"
                  error={Boolean(errors.expYear)}
                  helperText={
                    errors.expYear
                      ? errors.expYear.type === 'rules'
                        ? 'Please enter valid expiry year'
                        : 'Expiry year is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />
          </ListItem>
          <ListItem>
            <Controller
              name="cvc"
              control={control}
              defaultValue=""
              rules="required"
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="cvc"
                  label="CVC"
                  error={Boolean(errors.cvc)}
                  helperText={
                    errors.cvc
                      ? errors.cvc.type === 'rules'
                        ? 'Please enter valid cvc number'
                        : 'CVC is required'
                      : ''
                  }
                  {...field}
                />
              )}
            />
          </ListItem>
        </List>

        <ListItem>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={() => router.push('/placeorder')}
          >
            Continue
          </Button>
          <ListItem>
            <Button
              fullWidth
              type="button"
              variant="contained"
              onClick={() => router.push('/billing')}
            >
              Back
            </Button>
          </ListItem>
        </ListItem>
      </form>
    </Layout>
  );
}
