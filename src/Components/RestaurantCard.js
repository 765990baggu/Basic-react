import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="m-2 p-4 w-[290px] bg-gray-200 hover:bg-blue-300 rounded-md">
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
    </div>
  );
};

export default RestaurantCard;
