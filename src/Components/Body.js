import RestaurantCard, { PromotedLabel } from "./RestaurantCard";

import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";
import UserContext from "../utils/UserContext";

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
  const { LoggedInUser, setusername } = useContext(UserContext);
  // Conditional Rendering
  if (ListofRestaurant?.length === 0) {
    return <Shimmer />;
  }
  const RestaurantCardPromoted = PromotedLabel(RestaurantCard);

  return (
    <div className="bodycontainer">
      <div className="flex">
        <div className="inputcontainer">
          <input
            data-testid="searchInput"
            className="border border-solid border-black m-3 rounded-md"
            type="text"
            value={SearchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="p-1 rounded-md bg-green-200"
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
        <div className="h-10 w-15 flex items-center m-1 px-1 rounded-md bg-slate-100">
          <button
            className="filter-btn"
            onClick={() => {
              const filterList = ListofRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              console.log(filterList);
              setofrestaurant(filterList);
            }}
          >
            Top RatedRestaurants
          </button>
        </div>
        <div className="flex mx-2">
          <label className="my-1">Username:</label>
          <input
            className="border border-solid border-black h-10 w-15 rounded-md text-center"
            value={LoggedInUser}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {Filteredrestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
