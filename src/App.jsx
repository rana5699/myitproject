import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavbarComponent from "./components/NavbarCompunent";
import Blogs from "./Pages/Blogs";
import Account from "./Pages/Account";
import Error from "./Pages/Error";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";

function App() {
  return (
    <div className=" bg-gray-100">
      <div className="my-5 px-3">
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/products/:categoryName" element={<Products />} />

            <Route path="/product/:id" element={<ProductsDetails />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
