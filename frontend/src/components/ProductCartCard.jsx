import { FaTrash } from "react-icons/fa";

export const ProductCartCard = () => {
  return (
    <div className="flex items-center justify-between bg-white pr-6 pl-4 py-2">
      <img
        src="https://images.squarespace-cdn.com/content/v1/50d5be95e4b0d4d16b989dfb/1543179692442-QX1JZY5281Z96B5TDOZ3/070918_AsicsTiger_RunningShoes_78740042-E_WebWM.jpg"
        alt="productImage"
        className="w-20 h-20 object-cover"
      />
      <div>
        <p className="text-lg font-semibold">Product Name</p>
        <p>#53436</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="py-.5 px-2 rounded-full bg-black/5 hover:bg-black/10 transition duration-200">
          -
        </button>
        <p>1 Qty</p>
        <button className="py-.5 px-2 rounded-full bg-black/5 hover:bg-black/10 transition duration-200">
          +
        </button>
      </div>
      <div>
        <p className="text-lg font-semibold">2355$</p>
      </div>
      <div>
        <button className="text-red-500 hover:bg-red-200 transition duration-200 px-2 py-3 rounded-full">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
