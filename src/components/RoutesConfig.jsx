import {Routes} from "react-router-dom";
import Account from "../Pages/Account";
import Blogs from "../Pages/Blogs";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Products from "./Products";
import ProductsDetails from "./ProductsDetails";

const RoutesConfig = () => {
  const routes = [
    {path: "/", element: <Home />},
    {path: "/blogs", element: <Blogs />},
    {path: "/account", element: <Account />},
    {path: "/products/:categoryName", element: <Products />},
    {path: "/product/:id", element: <ProductsDetails />},
    {path: "*", element: <Error />},
  ];
  return <Routes></Routes>;
};

export default RoutesConfig;
