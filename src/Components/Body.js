import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";

const Body = () => {
  const [ListofRestaurant, setofrestaurant] = useState([]);
  const [Filteredrestaurant, setfilteredrestaurant] = useState([]);
  const [SearchText, setsearchText] = useState("");

  // Whenever statevariable update,react triggers the reconciliation cycle(re-render the component)

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6810024&lng=83.19906&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optionl Chaining
    setofrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlinestatus = useonlinestatus();
  if (onlinestatus === false)
    return <h1>you are offline!! please check your internet..</h1>;

  // Conditional Rendering
  if (ListofRestaurant?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="bodycontainer">
      <div className="buttons-container">
        <div className="inputcontainer">
          <input
            type="text"
            value={SearchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //Filter the Restaurantcards and update the UI
              //SearchBox
              const Filteredrestaurant = ListofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setfilteredrestaurant(Filteredrestaurant);
              console.log(SearchText);
            }}
          >
            search
          </button>
        </div>
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
            Top RatedRestaurants
          </button>
        </div>
      </div>
      <div className="restaurantcontainer">
        {Filteredrestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
