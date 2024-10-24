import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left pb-7 pt-3 border-gray-100 border-b-2 flex justify-between"
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
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
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
