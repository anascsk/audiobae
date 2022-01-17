// import { useState, useEffect } from "react";
// import styled from "styled-components";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Products from "../components/Products";
// import Cart from "./Cart";
// import Checkout from "./Checkout";
// import { mobile } from "../responsive";
// import { commerce } from "../lib/commerce";

// import { CssBaseline } from "@material-ui/core";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";
// import Register from "./Register";

// const Container = styled.div``;
// const Title = styled.h1``;
// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;
// const Filter = styled.div`
//   margin: 20px;
//   ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
// `;
// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })}
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0px" })}
// `;

// const Option = styled.option``;

// const ProductList = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
 
//   const [cart, setCart] = useState({});
//   const [order, setOrder] = useState({});
//   const [errorMessage, setErrorMessage] = useState("");



  
//   // const handleAddToCart = async (productId, quantity) => {
//   //   const item = await commerce.cart.add(productId, quantity);

//   //   setCart(item.cart);
//   // };

//   // const handleUpdateCartQty = async (lineItemId, quantity) => {
//   //   const response = await commerce.cart.update(lineItemId, { quantity });

//   //   setCart(response.cart);
//   // };

//   // const handleRemoveFromCart = async (lineItemId) => {
//   //   const response = await commerce.cart.remove(lineItemId);

//   //   setCart(response.cart);
//   // };

//   // const handleEmptyCart = async () => {
//   //   const response = await commerce.cart.empty();

//   //   setCart(response.cart);
//   // };


//   // useEffect(() => {
//   //   fetchProducts();
    
//   // }, []);

//   // const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
//   const user = "";

//   return (
//     <>
//       <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
//     </>
//   );
// };

// export default ProductList;
