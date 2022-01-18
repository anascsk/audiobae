import { Add, Remove } from "@material-ui/icons";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";
import { AddShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";

import { mobile } from "../responsive";

const Container = styled.div`

  height: 400px;
  width: 300px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #edf7f8;

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
const IconButton = styled.div`
 
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
  font-weight: 700; ;
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

  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    
      
        <Container>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <img
              src={product.media.source}
              alt=""
              width="200px"
              height="180px"
            />

            <Typography gutterBottom variant="h5" component="h2">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        
        <CardActions disableSpacing>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCartOutlined />
          </IconButton>
        </CardActions>
        

      {/* <Wrapper>
        <ImgContainer>
          <Image src={product.media.source} alt='' width="200px" height="180px">
          
          </Image>
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
    */}
    </Container>
  );
};

export default Product;
