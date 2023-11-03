import Cards from "./Cards";
import Filters from "./Filters";

const Body = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Filters />
      </div>
      <div className="w-3/4 p-4">
        <Cards />
      </div>
    </div>
  );
};

export default Body;
