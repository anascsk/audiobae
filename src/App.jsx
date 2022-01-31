import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./components/Cart/Cart";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./lib/firebase-config";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Checkout from "./components/Cart/Checkout";
import { mobile } from "./responsive";
import { commerce } from "./lib/commerce";

import Slider from "./components/Slider";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const loginHandler = async (event) => {
    event.preventDefault();
    setIsLoggedIn(true)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };
  const registerHandler = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ); setIsLoggedIn(true)
      
        console.log({ registerEmail });
      
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logoutHandler = async () => {
    await signOut(auth);
    setIsLoggedIn(false)
  };
  

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
      console.log(error.data);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Router>
        <Navbar cart={cart} user={user} logoutHandler={logoutHandler} isLoggedIn={isLoggedIn}/>
        <Switch>
          <Route path="/" exact>
            <Slider />
            <Products products={products} onAddToCart={handleAddToCart} />
            <Categories />
            <PopularProducts />
          </Route>
          <Route path="/login">
            <Login
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
              loginHandler={loginHandler}
            />
          </Route>
          <Route path="/register">
            <Register
              registerHandler={registerHandler}
              setRegisterEmail={setRegisterEmail}
              setRegisterPassword={setRegisterPassword}
            />
          </Route>
          <Route path="/products">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
export default App;
