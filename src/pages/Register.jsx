import styled from "styled-components";
import { mobile } from "../responsive";
// import {
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../lib/firebase-config";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(49, 47, 47, 0.5), rgba(54, 49, 49, 0.5)),
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
  &:focus {
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

const Register = ({
  registerHandler,
  setRegisterEmail,
  setRegisterPassword,
}) => {
  
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={(event) =>  {event.preventDefault()}}>
            <Input placeholder="Full Name" />
           
            <Input placeholder="Username" />
            <Input
              placeholder="Email"
              onChange={(event) => setRegisterEmail(event.target.value)}
            />
            <Input type="password"
              placeholder="Password"
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
            
            <Agreement>
              By creating an account you are agreeing to our rules and
              regulations and <br />
              <b>PRIVACY AND POLICY</b>
            </Agreement>
            <Button onClick={registerHandler}>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
