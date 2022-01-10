
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "0vh" })}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;


`
const Title = styled.h1`
color: #070708;
margin-bottom: 20px;
`
const Button = styled.button`
 padding: 10px;
  font-size: 20px;
  background-color: #90e0ef;
  cursor: pointer;
  color: black;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #addfe9;
  margin-bottom: 5px;
  transition: transform .3s ;
&:hover {
  transform: scale(1.03);
}
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title> {item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
