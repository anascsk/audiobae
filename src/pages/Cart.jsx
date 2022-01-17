import {useState} from "react";
import {
  Container,
  Typography,
  Button,
  Grid,

} from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";
import EmptyCartMessage from "../components/EmptyCartMessage";


const Cart = ({cartItems,onUpdateCartQty, onRemoveFromCart, onEmptyCart}) => {
  
  const handleEmptyCart = () => onEmptyCart();
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </Typography>
  );

  if (!cartItems.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Container>
    {cartItems.length < 1 && <EmptyCartMessage/>}
    
    <Grid container spacing={3}>
        {cartItems.line_items?.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div >
        <Typography variant="h4">Subtotal: {cartItems.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
          </div>
        </Container>
    </>
  );
  return ( 
    <Container>
      <div />
      <Typography  variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cartItems.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
    
  );
};

export default Cart;
