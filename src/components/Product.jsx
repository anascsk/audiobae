import { Add, Remove } from "@material-ui/icons";
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import styled from "styled-components";
import Footer from "./Footer";

import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
;
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

 &:hover{
   background-color: #f8f4f4;
 }
`;
const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Container>
     
      <Card>
      <CardMedia image={product.media.source} title={product.name} />
      <CardContent>
        <div >
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <img src={product.media.source} alt='' width="200px" height="180px" />

          <Typography gutterBottom variant="h5" component="h2">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>

   
      <Wrapper>
        <ImgContainer>
          <Image src={product.media.source} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
          {product.description}
          </Desc>
          <Price>   {product.price.formatted_with_symbol}</Price>
          
          <AddContainer>
            
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
   

      <Footer />
    </Container>
  );
};

export default Product;
