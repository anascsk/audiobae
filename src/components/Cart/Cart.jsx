import { useState } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Wrap = styled.div`
  display: flex;
  height: 300px;
  width: 95vw;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #edf7f8;
  margin-bottom: 20px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 50px;
  margin: 30px;
  bottom: 40px;
  margin-top: 70px;
`;
const Total = styled.h3`
  font-size: 40px;
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-bottom: 1%;
`;
const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  margin-bottom: 5%;
`;

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const handleEmptyCart = () => onEmptyCart();
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link to="/">start adding some</Link>!
    </Typography>
  );

  if (!cart.line_items) return "Please wait...";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div>
        <Total>Subtotal: {cart.subtotal.formatted_with_symbol}</Total>
        <Action>
          <Button
            size="large"
            type="button"
            variant="outlined"
            color="secondary"
            onClick={handleEmptyCart}
          >
            EMPTY CART
          </Button>
          <Button
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            CHECKOUT
          </Button>
        </Action>
      </div>
    </>
  );

  return (
    <>
      <Title>Shopping Cart</Title>

      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </>
  );
};

export default Cart;
