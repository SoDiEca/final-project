import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import { Store } from '../utils/Store';
import NextLink from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import CheckoutWizard from '../components/CheckoutWizard';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import Cookies from 'js-cookie';

export default function PlaceOrder() {
  const classes = useStyles();
  const router = useRouter();
  // const [confirmOrder, setConfirmOrder] = useState('');
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems, paymentDetails },
  } = state;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const totalAmount = itemsPrice;

  useEffect(() => {
    if (!paymentDetails) {
      router.push('/payment');
    }
  }, []);
  // const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const placeOrderHandler = () => {
    orderItems: cartItems,
      // billingAddress,
      paymentDetails,
      itemsPrice,
      totalAmount,
      // closeSnackbar();
      // try {
      //   const { data } = await axios.post(
      //     '/api/orders',
      //     {
      //       orderItems: cartItems,
      //       billingAddress,
      //       paymentDetails,
      //       itemsPrice,
      //       totalAmount,
      //     },
      //     {
      //       headers: {
      //         authorization: `Bearer ${userInfo.token}`,
      //       },
      //     },
      //   );
      dispatch({ type: 'CART_CLEAR' });
    Cookies.remove('cartItems');
    router.push('/confirmation'); //  router.push(`/order/${data._id}`);
    // } catch (err) {
    //   enqueueSnackbar(getError(err), { variant: 'error' });
    // }
  };
  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <Typography component="h1" variant="h1">
        Place Order
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <list>
              <ListItem>
                <Typography component="h2" variant="h2">
                  Order Items
                </Typography>
              </ListItem>
              <ListItem>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={50}
                                  height={50}
                                />
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell>
                            <NextLink href={`/product/${item.slug}`} passHref>
                              <Link>
                                <Typography>{item.name}</Typography>
                              </Link>
                            </NextLink>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>{item.quantity}</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography>€{item.price}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </ListItem>
            </list>
          </Card>
        </Grid>
        <Grid md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography align="right">
                      <strong>Total Amount:</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      <strong>€{totalAmount}</strong>
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button
                  onClick={placeOrderHandler}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Place Order
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
