export const ProductListCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-black/5 rounded-lg overflow-hidden w-[210px]">
      <img
        src={product.image}
        alt="productImage"
        className="w-full h-60 object-cover"
      />
      <p className="px-2 line-clamp-1">{product.title}</p>
      <div className="flex justify-between items-center w-full px-2">
        <p>#843313</p>
        <p>{product.price}$</p>
      </div>
      <button className="w-full bg-yellow-300 hover:bg-yellow-400 transition duration-200 py-2 ">
        Add To Cart
      </button>
    </div>
  );
};
