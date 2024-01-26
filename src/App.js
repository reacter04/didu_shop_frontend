import Navbar from "./Components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignUp from "./Pages/LoginSignUp.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />   
          <Route path="/mens" element={<ShopCategory category="men" key={crypto.randomUUID()}/>} />
          <Route path="/womens" element={<ShopCategory category="women" key={crypto.randomUUID()}/>} />
          <Route path="/kids" element={<ShopCategory category="kid"key={crypto.randomUUID()} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":prodId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
