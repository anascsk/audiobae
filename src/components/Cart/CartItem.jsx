import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { KeyboardArrowUp } from "@material-ui/icons";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
`;

const InfoBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrap = styled.div`
  height: 360px;
  width: 400px;
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #dfe0e07f;
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: #f9feff;
`;

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const handleUpdateCartQty = (lineItemId, newQuantity) =>
    onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  return (
    <>
      <Wrap>
        <img src={item.media.source} alt="" width="150px" height="135px" />
        <CardContent>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">
            {item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonContainer>
            <Button
            
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
            >
              <KeyboardArrowUp />
            </Button>
            <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
            <Button
              
              type="button"
              size="small"
              onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            >
              <KeyboardArrowDown />
            </Button>
          </ButtonContainer>

          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            <InfoBottom>Remove</InfoBottom>
          </Button>
        </CardActions>
      </Wrap>
    </>
  );
};

export default CartItem;
