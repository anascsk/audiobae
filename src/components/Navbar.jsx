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


const Parent = styled.div`

`
const Container = styled.div`
  height: 70px;
  background-color: #b6e7f0;
  ${mobile({ height: "70px" })}
  width: 98.75vw;
  position: fixed;
  top: 0;
  z-index: 4;
`;

const Logo = styled.h4`
  font-size: 30px;
  color: black;
  margin-left: 20px;
  ${mobile({ fontSize: "30px" })}
 
`;
const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  max-width: 98.75vw;
  ${mobile({ padding: "10px 0px" })}
  
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 20%;
`;
const Center = styled.div``;
const Right = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: flex-end;
  text-decoration: none;
  ${mobile({ flex: 2, justifyContent: "flexEnd" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 0px;
  margin-top: 10px;
  padding: 5 px;
  border-radius: 5px;
  cursor: pointer;
 
  ${mobile({ display: "none" })}
  &:focus {
  }
`;

const Input = styled.input`
  border: none;

  &:focus {
    outline: none;
  }

  width: 90%;
  height: 100%;
  border-radius: 5px;
  font-size: 15px;
  padding: 5px;
  margin-right: 20px;
  ${mobile({ height: "50%" })}
`;

const MenuItem = styled.div`
  margin-left: 25px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: 600;
  color: #0a6596e6;
  cursor: pointer;
  justify-content: space-between;
  ${mobile({ fontSize: "13px", marginLeft: "10px" })}
  
`;


const Navbar = ({ cart, user, logoutHandler, isLoggedIn }) => {
  return (
    <Parent>
    <Container>
      <Wrapper>
        <Left>
          <Link to={"/"}>
            <Logo>audiobae</Logo>
          </Link>
        </Left>
        <SearchContainer style={{ color: "gray", fontSize: 14 }}>
          <Input placeholder="Search for products, brands and more" />
          <Search style={{ fontSize: "30px" }}/>
        </SearchContainer>

        <Right>
          <Language style={{ marginLeft: "5px", marginTop: "3px" }}>
            <TranslateOutlined />
          </Language>
          {console.log(isLoggedIn)}
          { isLoggedIn ?
          ( <><MenuItem>{user?.email}</MenuItem>
          <MenuItem onClick={logoutHandler}>Logout</MenuItem></>
          ) : (
          <><Link to={"/register"} style={{ textDecoration: "none" }}>
            <MenuItem>Register </MenuItem>
          </Link>
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <MenuItem>Login</MenuItem>
          </Link> </>)
}

          
          {console.log(user)}
          <MenuItem>
            <Link to={"/cart"}>
              <Badge badgeContent={cart.total_items} color="primary">
                <MenuItem><ShoppingCartOutlined /></MenuItem>
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
    </Parent>
  );
};

export default Navbar;
