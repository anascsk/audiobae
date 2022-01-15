import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(49, 47, 47, 0.5),
      rgba(54, 49, 49, 0.5)
    ),
    url("https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Marshall-MonitorII-ANC-Drop-580-450-04_1024x1024.jpg?v=1630932128")
      no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;

  padding: 20px;
  background-color: #ffffff1d;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 40px;
  color: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap; 

`;

const Input = styled.input`
   flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  margin-left: 10px;
  padding: 15px;
  background-color: #e4e9ebef;
  color: #000000;
  border-radius: 10px;
  border: none;
  &:focus{
    border: none;
  }
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  color: white;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #90e0ef;
  color: #000;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  
`;

const Register = () => {
  return (
    <>
   
    <Container>
      
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account you are agreeing to our rules and regulations and <br /><b>PRIVACY AND POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register;
