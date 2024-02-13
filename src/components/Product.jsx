import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const Product = ({productMobile}) => {
  const {name, price, id, image, alt} = productMobile;
  return (
    <div>
      <Card className=" bg-blue-gray-50 my-3 mx-auto ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-cover p-5"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold text-xl">
              {name}
            </Typography>
            <Typography color="blue-gray" className="font-bold text-xl">
              $ {price}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to={`/product/${id}`} state={productMobile}>
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 font-bold text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;
