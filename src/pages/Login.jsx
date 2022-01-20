import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(167, 120, 120, 0.5),
      rgba(20, 19, 19, 0.5)
    ),
    url("https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Audio-Technica-ATH-M50xBT-Banner06.jpg?v=1588679485")
      no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const Wrapper = styled.div`
  width: 40%;

  padding: 20px;
  background-color: #ffffff16;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 40px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 15px;
  background-color: #e4e9ebef;
  border-radius: 10px;
  border: none;
  &:focus{
    border: none;
  }
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = ({setLoginEmail, setLoginPassword, loginHandler}) => {
  return (
    <>
    
    <Container>
    
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" onChange={(event) => setLoginEmail(event.target.value)}/>
          <Input placeholder="Password" onChange={(event) => setLoginPassword(event.target.value)}/>

          <Button onClick={loginHandler}>LOGIN</Button>
          <Link>Forgot Password</Link>
          <Link>Create an Account</Link>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Login;
