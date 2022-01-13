import Product from "./components/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Products from "./components/Products";
import Footer from "./components/Footer";


const App = () => {
  const user= ''
  return (
    <Router>
      <>
        <Home />
        </>
        </Router>
  
        
  )
};
export default App
