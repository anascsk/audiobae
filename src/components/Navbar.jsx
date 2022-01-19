import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  TranslateOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80px;
  background-color: #b6e7f0;
  ${mobile({ height: "70px" })}
  width: 100vw;
`;

const Logo = styled.h4`
  font-size: 30px;
  color: black;
  margin-left: 10px;
  ${mobile({ fontSize: "30px" })}
`;
const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  max-width: 100vw;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 20%;
`;
const Center = styled.div`
 
`;
const Right = styled.div`
  
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: flex-end;
  text-decoration: none;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 1px solid #dfe2f5;
  display: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  ${mobile({ padding: "0px", border: "none", })}
  &:focus{
   
  }

`;

const Input = styled.input`
  border: none;
  
  &:focus {
    outline: none;
  }
  
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-right: 20px;
  ${mobile({ height: "50%" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #05679c;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;

const Navbar = ({cart}) => {
  
 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>
            <Logo>audiobae</Logo>
            
          </Link>
          </Left>
          <SearchContainer style={{ color: "gray", fontSize: 14 }}>
            <Input placeholder="Search for products, brands and more" />
            <Search />
          </SearchContainer>
        
       

        <Right>
          <Language style={{ marginLeft: 5 }}>
            <TranslateOutlined />
          </Language>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <MenuItem>Register </MenuItem>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <MenuItem>Login</MenuItem>
          </Link>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={cart.total_items} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
