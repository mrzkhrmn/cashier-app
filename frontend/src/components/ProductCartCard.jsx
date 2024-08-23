import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  increaseItemQuantity,
  deleteItem,
} from "../redux/reducers/cartReducer";

export const ProductCartCard = ({ item }) => {
  const dispatch = useDispatch();

  const increaseQuantity = (item) => {
    dispatch(increaseItemQuantity(item));
  };

  const decrementQuantity = (item) => {
    dispatch(decrementItemQuantity(item));
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div className="flex items-center justify-between bg-white pr-6 pl-4 py-2">
      <img
        src={item.image}
        alt="productImage"
        className="w-20 h-20 object-cover"
      />
      <div className="w-[300px]">
        <p className="text-lg font-semibold line-clamp-1">{item.title}</p>
        <p>#53436</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => decrementQuantity(item)}
          className="py-.5 px-2 rounded-full bg-black/5 hover:bg-black/10 transition duration-200"
        >
          -
        </button>
        <p>{item.quantity} Qty</p>
        <button
          onClick={() => increaseQuantity(item)}
          className="py-.5 px-2 rounded-full bg-black/5 hover:bg-black/10 transition duration-200"
        >
          +
        </button>
      </div>
      <div>
        <p className="text-lg font-semibold">{item.price}$</p>
      </div>
      <div>
        <button
          onClick={() => handleDeleteItem(item)}
          className="text-red-500 hover:bg-red-200 transition duration-200 px-2 py-3 rounded-full"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
