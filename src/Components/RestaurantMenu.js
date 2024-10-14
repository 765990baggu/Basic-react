import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resinfo = useRestaurantmenu(resId);
  if (resinfo === null) return <Shimmer />;
  let { name, cuisines, avgRating, costForTwoMessage } =
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
