import { Clock } from "./Clock";
import { GrLogout } from "react-icons/gr";

export const CashierHeader = () => {
  return (
    <div className="flex justify-between bg-white py-2 px-4 rounded-md mb-4">
      <div className="flex flex-col">
        <h1 className="text-xl">MKAHRA20</h1>
        <h2 className="text-lg">Till Number: 8</h2>
      </div>
      <div className="flex gap-2  items-center">
        <Clock />
        <button className="text-white bg-red-500 hover:bg-red-600 transition duration-200 px-3 w-full py-3 text-2xl">
          <GrLogout />
        </button>
      </div>
    </div>
  );
};
