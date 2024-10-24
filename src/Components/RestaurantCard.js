import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const data = useContext(UserContext);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-2 p-4 w-[290px] bg-gray-200 hover:bg-blue-200 rounded-md">
      <img
        className="rounded-md"
        alt="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg py-2">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{deliveryTime} mints</h4>
      <h4>{data.LoggedInUser}</h4>
    </div>
  );
};

// Higher order Component
// input is RestaurantCard =>RestaurantcardPromoted

export const PromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute border border-solid border-black m-3 text-white bg-black rounded-md px-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
