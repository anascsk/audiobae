import { Add, Remove } from "@material-ui/icons";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 300px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid #edf7f8;
  margin-bottom: 40px;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Image = styled.img`
  width: 200px;
  height: 180px;

  ${mobile({ height: "40vh" })}
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  bottom: 0;
  margin-bottom: 20px;
  /* margin-left: 25%; */
`;
const IconButton = styled.div`
  cursor: pointer;
  display: flex;
  margin: auto;
  
`;

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Container>
      <div>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ color: "#338087" }}
        >
          {product.name}
        </Typography>
        <img src={product.media.source} alt="" width="200px" height="180px" />

        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{ color: "#545e5f" }}
        >
          {product.price.formatted_with_symbol}
        </Typography>
      </div>
      <Typography
        dangerouslySetInnerHTML={{ __html: product.description }}
        variant="body2"
        color="textSecondary"
        component="p"
      />

      <>
        <IconContainer aria-label="Add to Cart" onClick={handleAddToCart}>
          <IconButton>
            <Button
              style={{
                backgroundColor: "#91e0ef",
                color: "black"
              }}
              variant="contained"
              color="primary"
              endIcon={<AddShoppingCartOutlined style={{ color: "black" }} />}
            >
              ADD TO CART
            </Button>
          </IconButton>
        </IconContainer>
      </>
    </Container>
  );
};

export default Product;
