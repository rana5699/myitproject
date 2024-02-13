import {useLocation} from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const location = useLocation();
  const products = location.state;

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <Product productMobile={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
