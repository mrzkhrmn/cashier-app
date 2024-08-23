import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";

export const QuickProductButton = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = (item, quantity = 1) => {
    dispatch(addToCart({ ...item, quantity }));
  };
  return (
    <button
      onClick={() => addItemToCart(product)}
      className="bg-gray-200 py-2 px-3 h-full rounded-md hover:bg-gray-300 transition duration-200"
    >
      <p>{product.title}</p>
      <p>424225</p>
    </button>
  );
};
