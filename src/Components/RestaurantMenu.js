import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Api } from "../utils/constants";

const RestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_Api + resId);
    const json = await data.json();
    console.log(json);
    setresinfo(json);
  };
  if (resinfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } =
    resinfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <p>
        {avgRating} . {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"RS."} {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
