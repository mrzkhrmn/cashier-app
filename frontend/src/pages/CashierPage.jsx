import { CashierHeader } from "../components/CashierHeader";
import { Input } from "../components/Input";
import { ProductCartCard } from "../components/ProductCartCard";
import { ProductListCard } from "../components/ProductListCard";

export const CashierPage = () => {
  const products = true;
  return (
    <div className="w-full p-8 bg-black/5">
      <CashierHeader />
      <div className="h-[80vh] flex gap-4">
        <div className=" w-[60%] h-full rounded-md p-4 border border-black/20 overflow-auto">
          <form className="w-full flex items-center justify-between gap-4 mb-6">
            <div className="w-full flex">
              <Input
                style="w-full py-2 rounded-l-md px-2 outline-none"
                placeholder={"Search for products..."}
              />
              <button className="bg-blue-400 px-4 rounded-r-md text-white hover:bg-blue-500 transition duration-200">
                Search
              </button>
            </div>
            <select
              name="sort"
              id="sort"
              className="py-2 pl-4 pr-2 bg-transparent border outline-none border-black rounded-md"
            >
              <option value="">Sort By</option>
              <option value="price">By Price</option>
              <option value="name">By Name</option>
              <option value="category">By Category</option>
            </select>
          </form>
          <div className="bg-white py-4 ">
            <div className="flex flex-wrap  gap-6  items-center overflow-hidden">
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
              <ProductListCard />
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full rounded-md py-4 border border-black/20 overflow-auto">
          <h1 className="font-semibold text-3xl text-center">Cart</h1>
          <h2 className="text-xl px-4 mb-6">0 Products at Cart</h2>
          <div className="flex flex-col gap-4 h-full w-full">
            {products ? (
              <>
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
                <ProductCartCard />
              </>
            ) : (
              <h1 className="text-3xl text-center">
                There are no any products!
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
