import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex; 
flex-wrap: wrap;
`

const ListItem = styled.li`
margin-bottom: 10px;
width: 50%;

`

const Right = styled.div`
  flex: 1;
  padding: 15px; 
  ${mobile({ backgroundColor: "lightgray" })}
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`

margin-bottom: 20px;
display: flex;
align-items: center;
`


const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopeBae</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus in, laboriosam quis alias expedita quam odio. Nihil
          sunt delectus ipsa?
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
            <Title>Jump To</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>FAQ</ListItem>
            </List>

      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/> 622 Dixie path, Dehradun 98336</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +1 123 466</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/> support@shopbae.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
