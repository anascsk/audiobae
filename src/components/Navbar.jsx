import { Badge } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  TranslateOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Home from "../pages/Home";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 90px;
  background-color: #b0bee68d;
  ${mobile({ height: "50px" })}
`;

const Logo = styled.img`
  border-radius: 15px 15px;
  width: 170px;
  height: 50px;
  display: block;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
const Center = styled.div`
  /* flex: 1;
  text-decoration: none; */
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
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
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  margin-left: 20px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  width: 600px;
  height: 33px;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-right: 20px;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 18px;
  font-weight: 600;
  color: #4943a0;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/ecommerce-ui"}>
            <Logo src={logo} alt="logo" />
            {/* <img src={logo}  alt="logo"/> */}
          </Link>
          <SearchContainer style={{ color: "gray", fontSize: 14 }}>
            <Input placeholder="Search for products, brands and more" />
            <Search />
          </SearchContainer>
        </Left>
        <Center></Center>

        <Right>
          <Language style={{ marginLeft: 5 }}>
            <TranslateOutlined />
          </Language>
          <Link to={"/register"} style={{ textDecoration: "none" }}>
            <MenuItem>Register </MenuItem>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <MenuItem>Log In</MenuItem>
          </Link>
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={4} color="primary">
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
