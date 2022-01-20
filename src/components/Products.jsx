import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import styled from "styled-components";
import { mobile } from "../responsive";
import { BsHourglassSplit } from "react-icons/bs";

const Container = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  margin: 0px 0 30px;
  color: #3a3e41;
  font-size: 40px;
  margin-left: 20px;
  ${mobile({ fontSize: "20px" })}
`;
const P = styled.p`
text-align: center;
`
const Products = ({ products, onAddToCart }) => {
  if (!products?.length) return <P>Loading... <BsHourglassSplit/></P>;

  return (
    <Container>
      <Title>TRENDING PRODUCTS</Title>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
