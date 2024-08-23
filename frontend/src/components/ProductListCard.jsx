import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/reducers/cartReducer";

export const ProductListCard = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addItemToCart = (item, quantity = 1) => {
    dispatch(addToCart({ ...item, quantity }));
  };

  const itemInCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-black/5 rounded-lg overflow-hidden w-[210px]">
      <img
        src={product.image}
        alt="productImage"
        className="w-full h-60 object-cover"
      />
      <p className="px-2 line-clamp-1">{product.title}</p>
      <p className="self-start px-2 text-gray-500">{product.category}</p>
      <div className="flex justify-between items-center w-full px-2">
        <p>#843313</p>
        <p>{product.price}$</p>
      </div>
      <button
        disabled={itemInCart}
        onClick={() => addItemToCart(product)}
        className="w-full bg-yellow-300 hover:bg-yellow-400 transition duration-200 py-2 disabled:opacity-60 disabled:pointer-events-none"
      >
        {itemInCart ? "Added To Cart" : "Add To Cart"}
      </button>
    </div>
  );
};
