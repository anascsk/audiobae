import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

const App = () => {
  const user= ''
  return (
  <Router>
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/products" >
        <ProductList />
      </Route>
      <Route path="/products/:category" >
        <ProductList />
      </Route>
      <Route path="/products/:id" >
        <ProductList />
      </Route>
      <Route path="/cart" >
        <Cart />
      </Route>
      <Route path="/login" >
        {user ? <Redirect to="/"/> :  <Login/> }
       
      </Route>
      <Route path="/register" >
        <Register />
      </Route>

    </Switch>
  </Router>
  )
};
export default App;
