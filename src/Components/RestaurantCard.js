import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="restaurantcard">
      <img
        className="restaurant-img"
        alt="restaurant-img"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="restaurant-name">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minituets</h4>
    </div>
  );
};

export default RestaurantCard;
