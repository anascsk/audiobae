import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./components/Cart/Cart";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import PopularProducts from "./components/PopularProducts";
import Navbar from "./components/Navbar";
import Checkout from "./components/Cart/Checkout";
import Products from "./components/Products";
import Footer from "./components/Footer";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./lib/firebase-config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { AuthContext } from "./context/AuthContext";
import { ProductContext } from "./context/ProductContext";

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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
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
      );
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      console.log({ registerEmail });

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logoutHandler = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
    localStorage.clear();
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
      <AuthContext.Provider
        value={
          {user,
          logoutHandler,
          isLoggedIn,
          setLoginEmail,
          setLoginPassword,
          loginHandler,
          setRegisterEmail,
          setRegisterPassword,
          registerHandler}
        }
      >
        <ProductContext.Provider
          value={
            {cart,
            products,
            handleAddToCart,
            handleUpdateCartQty,
            handleRemoveFromCart,
            handleEmptyCart,
            order,
            handleCaptureCheckout,
            errorMessage}
          }
        >
          <Router>
            <Navbar/>
            <Switch>
              <Route path="/" exact>
                <Slider />
                <Products products={products} />
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
                <Products products={products}/>
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
        </ProductContext.Provider>
      </AuthContext.Provider>
    </>
  );
};
export default App;
