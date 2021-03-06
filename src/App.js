import "./global.scss";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainWrapper from "./components/MainWrapper";
import { CartProvider } from "./contexts/CartContext";

function App() {
  const user = true;
  return (

      <CartProvider>
        <MainWrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:category" element={<Products />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Routes>
          </Router>
        </MainWrapper>
      </CartProvider>

  );
}

export default App;
