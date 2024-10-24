import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [Showindex, setshowindex] = useState(null);
  console.log(resId);
  const resinfo = useRestaurantmenu(resId);
  if (resinfo === null) return <Shimmer />;
  const { name, cuisines, avgRating, costForTwoMessage } =
    resinfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-4xl my-5">{name}</h1>
      <h3 className="my-6">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>

      {/*categories accordions */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          Showitems={index === Showindex ? true : false}
          setshowindex={() => setshowindex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
