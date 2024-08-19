export const ProductListCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-black/5 rounded-lg overflow-hidden max-w-[210px]">
      <img
        src="https://images.squarespace-cdn.com/content/v1/50d5be95e4b0d4d16b989dfb/1543179692442-QX1JZY5281Z96B5TDOZ3/070918_AsicsTiger_RunningShoes_78740042-E_WebWM.jpg"
        alt="productImage"
        className="w-full h-40 object-cover"
      />
      <p className="px-2">Shoes MH100 Man</p>
      <div className="flex justify-between items-center w-full px-2">
        <p>#843313</p>
        <p>350$</p>
      </div>
      <button className="w-full bg-yellow-300 hover:bg-yellow-400 transition duration-200 py-2 ">
        Add To Cart
      </button>
    </div>
  );
};
