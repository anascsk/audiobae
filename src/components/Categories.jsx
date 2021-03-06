import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
const Container = styled.div`
  display: flex;
  padding: 20;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Link to="/products" key={item.id} >
          <CategoryItem item={item} />
        </Link>
      ))}
    </Container>
  );
};

export default Categories;
