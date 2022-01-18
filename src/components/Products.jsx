import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import styled from "styled-components";


const Container = styled.div`
  padding: 20px;
`

const Products = ({ products, onAddToCart }) => {
  if (!products?.length) return <p>Loading...</p>;

  return (
    <Container>
      <div />
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
