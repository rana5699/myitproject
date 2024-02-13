import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import {useLocation} from "react-router-dom";

const ProductsDetails = () => {
  const location = useLocation();
  const details = location.state;
  return (
    <div>
      <Card className="w-96 bg-blue-gray-50 my-3 mx-auto ">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={details.image}
            className="h-full w-full object-cover"
            alt={details.alt}
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-bold text-xl">
              {details.name}
            </Typography>
            <Typography color="blue-gray" className="font-bold text-xl">
              $ {details.price}
            </Typography>
          </div>
          <div className="text-center">
            <Typography>
              <p className="font-bold text-xl mt-1 text-gray-500">
                {details?.features?.camera}
              </p>
              <p className="font-bold text-xl mt-1 text-gray-500">
                {details?.features?.display}
              </p>
              <p className="font-bold text-xl mt-1 text-gray-500">
                {details?.features?.processor}
              </p>
              <p className="font-bold text-xl mt-1 text-gray-500">
                {details?.features?.storage}
              </p>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <div className="flex justify-arround gap-5">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 font-bold text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">
              Add to card
            </Button>

            <Button
              ripple={false}
              fullWidth={true}
              className="bg-green-700 text-white font-bold  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ">
              Buy now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductsDetails;
