import Product from "./components/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer";

import {useState, useEffect} from 'react'
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Checkout from './pages/Checkout';
import { mobile } from "./responsive";
import {commerce} from './lib/commerce'

import { CssBaseline } from '@material-ui/core';

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;
const Filter = styled.div`
margin: 20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({ marginRight: "0px" })}


`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}
`

const Option = styled.option``


  


const App = () => {
  const [user, setUser] = useState(false)
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    const Data = await commerce.cart.retrieve();
    return Data.line_items;
    console.log(Data.line_items)
  };
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCartItems(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCartItems(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCartItems(response.cart);
  };

  
  useEffect(() => {
    setCartItems(fetchCart())
  }, [])

  return (
    <>
    
    <Router>
    <Navbar/>
     <Switch>
       <Route path="/" exact >
         <Home/>

       </Route>
        <Route path="/login" >
        {user ? <Redirect to="/"/> :  <Login/> }
      </Route>
      <Route path="/register" >
        <Register />
      </Route>
           <Route path="/products">
            <ProductList/>
            
          </Route>
         <Route exact path="/cart">
            <Cart cartItems={cartItems} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>
          </Route>
          {/* <Route path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>  */}



     </Switch>
    </Router>
    <Footer/>
    </>
  
        
  )
};
export default App
