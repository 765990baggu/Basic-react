import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-2 text-center">
      <div className="w-6/12 m-auto">
        <h1 className="text-2xl m-4">Cart</h1>
        <button
          className="border border-solid border-black p-2 cursor-pointer rounded-md"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        {cartItems?.length === 0 && (
          <h1 className="m-10 text-3xl font-bold">
            Cart is Empty.Add Items to Cart!
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
