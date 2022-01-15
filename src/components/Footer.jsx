import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  background-color: #1f1e1e;
  color: #b2b5b8;
  ${mobile({ flexDirection: "column" })}
  border-radius: 10px 10px 0px 0px;
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
        <Logo>audiobae</Logo>
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
        <Desc>
        In India’s fast growing retail industry filled with crowded hyper markets, monotonous electronic chains and absent music outlets, comes an innovative concept store that combines fashion, technology and entertainment. 
        </Desc>
        
      </Left>
      <Center>
            <Title>Quick Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>TWS Headsets</ListItem>
                <ListItem>Over The Head Headsets</ListItem>
                <ListItem>In Ear Headsets</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Coupons</ListItem>
                <ListItem>FAQ</ListItem>
            </List>

      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/> 644/13 Calicut, Kerala, India</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/> +91 9847 777 111</ContactItem>
        <ContactItem><MailOutline style={{marginRight:"10px"}}/> support@audiobae.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
