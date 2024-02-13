import {Card} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const BrandCard = ({brand}) => {
  const {image, products} = brand;

  return (
    <div className="">
      <Link to={`/products/${brand.categoryName}`} state={products}>
        <Card className=" mx-auto rounded-lg">
          <img src={image} alt="brand-image" className="h-60 rounded-lg" />
        </Card>
      </Link>
    </div>
  );
};

export default BrandCard;
