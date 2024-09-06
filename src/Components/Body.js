import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListofRestaurant, setofrestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = ListofRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setofrestaurant(filterList);
          }}
        >
          Filter Button
        </button>
      </div>
      <div className="restaurantcontainer">
        {ListofRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
