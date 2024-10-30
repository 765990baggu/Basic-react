import ItemList from "./ItemList";
const RestaurantCategory = ({ data, Showitems, setshowindex }) => {
  //console.log(data);

  const handleclick = () => {
    setshowindex();
  };
  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 bg-gray-200 shadow-lg mx-auto my-4 p-4 cursor-pointer">
        <div
          className="flex justify-between font-bold text-lg"
          onClick={handleclick}
        >
          <span className="text-xl">
            {data?.title}({data.itemCards.length})
          </span>
          <span>clickarrow</span>
        </div>

        {Showitems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
