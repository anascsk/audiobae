
import styled from "styled-components";
import { mobile,tablet } from "../responsive";

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
 padding: 30px;
 width: 100%;
  font-size: 3vw;
  background-color: #90e0ef;
  cursor: pointer;
  color: #12534a;
  font-weight: 600;
  border-radius: 10px 10px 0px 0px ;
  border: 2px solid #addfe9;
  ${mobile({ fontSize: "6vw" })}
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
        
        <Button>{item.title}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
