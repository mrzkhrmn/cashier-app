import { Clock } from "./Clock";

export const CashierHeader = () => {
  return (
    <div className="flex justify-between bg-white py-2 px-4 rounded-md mb-4">
      <div className="flex flex-col">
        <h1 className="text-xl">MKAHRA20</h1>
        <h2 className="text-lg">Till Number: 8</h2>
      </div>
      <div className="flex  flex-col items-end">
        <Clock />
      </div>
    </div>
  );
};
