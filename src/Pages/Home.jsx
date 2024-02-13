import Data from "../AllData.json";
import BrandCard from "../components/BrandCard";

const Home = () => {
  return (
    <div>
      <div className="my-3 p-5 grid grid-cols-2 gap-4">
        {Data.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default Home;
