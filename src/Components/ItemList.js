import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  //console.log(items)
  const handleAddItems = (item) => {
    // dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="text-left pb-7 pt-3 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-9/12">
            <span className="font-bold">{item.card.info.name}</span>
            <span>₹{item.card.info.price / 100}</span>

            <div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-3">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItems(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
